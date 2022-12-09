//Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT

// identificador unico de URI
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// contador unico para cada NFT mintado
import "@openzeppelin/contracts/utils/Counters.sol";

pragma solidity ^0.8.0;

contract CeloContract is ERC721URIStorage{

    // _tokeinIds é o contador de NFTS mintadas
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;



    

    constructor() ERC721 ("NFT_SANT", "SANT") {

       
    }
    
    // recebe um endereço de carteira e uma url com os metados do token 
    function mintNFT(address recipient, string memory tokenURI) public returns (uint256){

        _tokenIds.increment();  // incrementa contador

        uint256 newItemId = _tokenIds.current(); // newItemId recebe valor corrente 

        _mint (recipient, newItemId);  // mint ERC721 para mintar realmente o token

        _setTokenURI(newItemId, tokenURI); //  para apontar ID novo NFT com URL de metadados

        return newItemId;




    }

    
}
