// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint public amount;
    uint256 public value;
    address public owner;
    uint public tokenSupply;
    address[] public tokenOwners;

    mapping(address => mapping(address => uint)) internal waitingTokens;

    mapping(address => uint) internal tokenValue;

    constructor(
        string memory _name,
        string memory _symbol,
        address _address,
        uint _amount
    ) ERC20(_name, _symbol) {
        owner = _address;
        amount = _amount;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    function claimTokens() public payable {
        require(
            tokenSupply < amount,
            "All claims have been claimed. You can only transfer from now on"
        );
        require(msg.value >= value, "Insufficient funds");
        require(msg.value <= tokenSupply * value, "Exceeding amount of tokens");

        uint256 toReceive = msg.value / value;

        _mint(msg.sender, toReceive);
        payable(owner).transfer(msg.value);
        tokenSupply += toReceive;
    }

    function approveWithValue(
        address _spender,
        uint256 _amount,
        uint _value
    ) public returns (bool) {
        approve(_spender, _amount);
        tokenValue[msg.sender] = _value;

        return true;
    }

    // SEM AMOUNT???????
    function buyToken(address _owner, uint256 _amount) public payable {
        require(allowance(_owner, owner) > 0, "Not on sale");
        require(msg.value >= tokenValue[_owner]);

        waitingTokens[msg.sender][_owner];
    }

    function transferTokenTo(address _owner, address _receiver) public isOwner {
        require(
            waitingTokens[_receiver][_owner] > 0,
            "You don't own the tokens yet"
        );

        transfer(_receiver, waitingTokens[_receiver][_owner]);
        payable(_owner).transfer(
            waitingTokens[_receiver][_owner] * tokenValue[_owner]
        );
        delete waitingTokens[_receiver][_owner];
    }

    function getOwners() public view returns (address[] memory) {
        return tokenOwners;
    }

    function burnTokens() public isOwner returns (bool) {
        require(
            balanceOf(_msgSender()) == tokenSupply,
            "Government does not own all tokens"
        );
        _burn(_msgSender(), tokenSupply);
        return true;
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 _amount
    ) internal override {
        if (from == address(0)) {
            tokenOwners.push(to);
        } else if (to == address(0)) {
            // burning tokens
            tokenOwners = [address(0)];
        } else {
            for (uint256 i = 0; i < tokenOwners.length; i++) {
                if (tokenOwners[i] == from) {
                    tokenOwners[i] = tokenOwners[tokenOwners.length - 1];
                }
            }
            tokenOwners.pop();
            tokenOwners.push(to);
        }
    }
}
