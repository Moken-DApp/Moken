// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./RealEstateProperty.sol";

contract TokenProprety {
    //address of the owner of the contract
    address public owner;
    //amount of tokens stored in the contract
    uint256 public tokensStored;
    //address of the real estate property contract
    RealEstateProperty public realEstateProperty;

    //address of the token contract

    constructor() {
        owner = msg.sender; // the owner of the contract is the one who deployed it
    }

    //function to change the owner of the property
    function changeOwner(address _newOwner) public {
        require(msg.sender == owner, "Only the owner can change the owner");
        owner = _newOwner;
    }

    //function to store ethers tokens in the contract
    function storeTokens() public payable {
        require(msg.sender == owner, "Only the owner can store tokens");
        tokensStored += msg.value;
    }

    //send celo tokens to the owner
    function sendTokens() public {
        require(msg.sender == owner, "Only the owner can send tokens");
        payable(owner).transfer(tokensStored);
        tokensStored = 0;
    }
}
