// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CeloNFT is ERC721 {
    constructor() ERC721("CeloNFT", "cNFT") {
        // mint 5 NFTs to yourself
        for (uint i = 0; i < 5; i++) {
            _mint(msg.sender, i);
        }
    }

    // Hardcoded token URI will return the same metadata
    // for each NFT
    function tokenURI(uint) public pure override returns (string memory) {
        return "ipfs://QmTy8w65yBXgyfG2ZBg5TrfB2hPjrDQH3RCQFJGkARStJb";
    }
}

//function to return the NFTs owned by the user
function getNFTs() public view returns (uint[] memory) {
    uint[] memory result = new uint[](balanceOf(msg.sender));
    for (uint i = 0; i < balanceOf(msg.sender); i++) {
        result[i] = tokenOfOwnerByIndex(msg.sender, i);
    }
    return result;
}
