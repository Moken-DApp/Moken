// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./Token.sol";

// Contract that creates the properties and the tokens for each property
contract Property is ERC721 {
    address public owner;

    mapping(uint256 => address) public propetiesERC20;
    mapping(uint256 => string) public tokenURIs;
    mapping(string => string) public tokenURIByRIP;
    mapping(string => address) public tokenAddressByRIP;

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

    // Creates a new property
    function createProperty(string memory _uri, string memory _rip) external {
        _mint(msg.sender, _tokenIds.current());
        _setTokenURI(_tokenIds.current(), _uri, _rip);
        _tokenIds.increment();
    }

    // Mints all tokens - 1 (?*10...) for each square meter
    function createTokens(
        uint256 _idProperty,
        string memory _name,
        string memory _symbol,
        uint256 _area
    ) public govOwner {
        address newTokenProperty = address(
            new Token(_name, _symbol, owner, _area)
        );
        propetiesERC20[_idProperty] = newTokenProperty;
    }

    // Get all tokens
    function getTokenURIs() public view returns (string[] memory) {
        string[] memory uris = new string[](_tokenIds.current());

        for (uint256 i = 0; i < _tokenIds.current(); i++) {
            uris[i] = tokenURIs[i];
        }

        return uris;
    }

    // Get Contract Address
    function getTokenAdr() public view returns (address) {
        return address(this);
    }

    // Get token uri by rip
    function getTokenURIByRIP(string memory rip)
        public
        view
        returns (string memory)
    {
        return tokenURIByRIP[rip];
    }

    // Get this token address by rip
    function getTokenAddressByRIP(string memory rip)
        public
        view
        returns (address)
    {
        return tokenAddressByRIP[rip];
    }

    // Sets the token uri for the specific token
    function _setTokenURI(
        uint256 _tokenId,
        string memory _uri,
        string memory rip
    ) internal {
        tokenURIs[_tokenId] = _uri;
        tokenURIByRIP[rip] = _uri;
        tokenAddressByRIP[rip] = propetiesERC20[_tokenId];
    }

    // Gets the token uri for the specific token
    function tokenURI(uint256 _id)
        public
        view
        override
        returns (string memory)
    {
        return tokenURIs[_id];
    }
}
