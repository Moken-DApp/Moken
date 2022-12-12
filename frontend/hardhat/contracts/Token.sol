// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Contract that creates the properties and the tokens for each property
contract Token is ERC20 {
    uint256 public amount;
    uint256 public value;
    address public owner;
    uint256 public tokenSupply;
    address[] public tokenOwners;

    mapping(address => mapping(address => uint256)) internal waitingTokens;

    mapping(address => uint256) internal tokenValue;

    // Starts the contract and sets the owner as the one who deployed it
    constructor(
        string memory _name,
        string memory _symbol,
        address _address,
        uint256 _amount
    ) ERC20(_name, _symbol) {
        owner = _address;
        amount = _amount;
    }

    // Checks if who is triggering the contract is the owner
    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    // This function mint tokens
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

    //
    function approveWithValue(
        address _spender,
        uint256 _amount,
        uint256 _value
    ) public returns (bool) {
        approve(_spender, _amount);
        tokenValue[msg.sender] = _value;

        return true;
    }

    // This function buy tokens
    function buyToken(address _owner, uint256 _amount) public payable {
        require(allowance(_owner, owner) > 0, "Not on sale");
        require(msg.value >= tokenValue[_owner]);

        waitingTokens[msg.sender][_owner];
    }

    // This function allows the owner to sell tokens
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

    // This function burns all the tokens
    function burnTokens() public isOwner returns (bool) {
        require(
            balanceOf(_msgSender()) == tokenSupply,
            "Government does not own all tokens"
        );
        _burn(_msgSender(), tokenSupply);
        return true;
    }

    // This function sets the value of the token
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
