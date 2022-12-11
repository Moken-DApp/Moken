// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./RealEstateProperty.sol";

contract RealEstateFactory {
    address public owner; // the owner of the contract
    uint256 public price; // the price of the property
    string public name; // the name of the property
    string public description; // the description of the property
    RealEstateProperty[] public properties; // the properties

    constructor() {
        owner = msg.sender; // the owner of the contract is the one who deployed it
    }

    // create a new property
    function createProperty(
        string memory _name, // the name of the property
        string memory _description, // the description of the property
        uint256 _price // the price of the property
    ) public {
        //_description = "This is a test description";
        RealEstateProperty property = new RealEstateProperty(
            _name, // the name of the property
            _description, // the description of the property
            _price, // the price of the property
            msg.sender // the owner of the property
        );
        properties.push(property); // add the property to the properties array
    }

    // get all the properties
    function getProperties() public view returns (RealEstateProperty[] memory) {
        return properties;
    }
}
