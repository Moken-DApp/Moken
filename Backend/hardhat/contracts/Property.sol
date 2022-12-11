// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./Token.sol";

contract Property is ERC721 {
    address public owner;

    mapping(uint => address) public propetiesERC20;
    mapping(uint => string) public tokenURIs;

    using Counters for Counters.Counter;
    Counters.Counter _tokenIds;

    // Starts the contract and sets the owner as the one who deployed it
    constructor() ERC721("RealEstateProperty", "REP") {
        owner = msg.sender;
    }

    // Checks if who is triggering the contract is the owner
    modifier govOwner() {
        require(msg.sender == owner);
        _;
    }

    function createProperty(string memory _uri) external {
        _mint(msg.sender, _tokenIds.current());
        _setTokenURI(_tokenIds.current(), _uri);
        _tokenIds.increment();
    }

    // Mints all tokens - 1 (?*10...) for each square meter
    function createTokens(
        uint _idProperty,
        string memory _name,
        string memory _symbol,
        uint _area
    ) public govOwner {
        address newTokenProperty = address(
            new Token(_name, _symbol, owner, _area)
        );
        propetiesERC20[_idProperty] = newTokenProperty;
    }

    // Min

    // Sets the token uri for the specific token
    function _setTokenURI(uint _tokenId, string memory _uri) internal {
        tokenURIs[_tokenId] = _uri;
    }

    function tokenURI(
        uint256 _id
    ) public override view returns (string memory) {
        return tokenURIs[_id];
    }
}
