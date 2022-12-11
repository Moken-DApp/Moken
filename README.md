#  <img width="28px" height="28px" src="https://user-images.githubusercontent.com/99221221/206879319-23fa7ee3-75ca-4534-98d7-6b1d754c2f12.png" alt="moken-logo"/> Moken - Decentralized App
## Moken - HACKATHON WEB3 - Tokenização do Patrimônio da União - 2022

## [Trailer]()

<img src="https://user-images.githubusercontent.com/99221221/206878622-54420850-86b1-4eaa-9c62-fe99bb5edb40.png" alt="app-screens-mockup"/>


## Nossa Solução
 Moken é um aplicativo descentralizado, também conhecido como DApp, que funciona em uma rede peer-to-peer descentralizada, ou seja, as informações ficam armazenadas na rede blockchain. A blockchain na qual ele foi desenvolvido é a Celo, uma rede compatível com Proof of Stake Layer-1 EVM, otimizado para DeFi, que é projetado para ser mobile-first (priorização de dispositivos móveis). 

 A plataforma foi desenvolvida para transformar a gestão patrimonial da união, com o objetivo de se tornar um meio para a própria Secretaria do Patrimônio da União (SPU) ofertar seus imóveis a público em forma de tokens. Os imóveis pertencentes a SPU serão cadastrados na plataforma e nesse momento são tokenizados, criando tokens que terão seus valores lastreados no respectivo  imóvel. Os tokens serão vendidos de forma que, ao comprar um token, a pessoa tem direito à fração da posse do imóvel que ele representa. 

 Esta solução traz como benefícios à SPU a maior facilidade de liquidez ao patrimônio, pois o ticket de entrada de um token é muito menor em relação ao mercado tradicional e um autogerenciamento da carteira de imóveis pois os "Smart-contracts" garantem confiabilidade nas disposições das partes envolvidas.

<img src="https://user-images.githubusercontent.com/99221221/206935248-ac05c3df-e8a9-4ae8-ad5e-949e97fafdf5.png" alt="app-screens-mockup"/>

## Documentação

A documentação com informações da visão geral do projeto, análise de negócio, requisitos do sistema e elaboração do sistema pode poder ser encontrada clicando [aqui](https://docs.google.com/document/d/1NKbF3l3-t60BgFTBy-jNdQLMHlBoJJ4H1e9Ow-CwlRc/edit?usp=sharing)

## Árvore de arquivos
As pastas desse projeto foram organizadas conforme exemplo a seguir:
```
├── .vscode
├── Backend
│    ├── database
│    ├── hardhat
│    ├── prisma
│    ├── src
│    ├── utils
├── Documents
├── Frontend
│    ├── .next
│    ├── assets
│    ├── components
│    ├── pages
│    ├── public
│    ├── styles
├── README.md
```
## Arquitetura do sistema

<img src="https://user-images.githubusercontent.com/99221221/206935813-57cb0afa-e7a8-4310-bded-5ffce28f73cd.png" alt="arquitetura do sistema"/>

1 - O Frontend se comunica com o Backend, chamando as rotas e recebendo o retorno de acordo com os parâmetros indicados.

2 - O Frontend se comunica com a blockchain, chamando funções contidas nos contratos e recebendo o retorno de acordo com os parâmetros indicados.

3 - O Backend se comunica com a blockchain chamando funções contidas nos contratos e recebendo o retorno de acordo com os parâmetros indicados.

4 - O Backend armazena informações no banco de dados e também solicita informações por meio de uma ORM ( Prisma.io ).

## Tecnologias

 Esse projeto foi desenvolvido usando as seguintes tecnologias:
 
- React
- Tailwind
- Css
- JavaScript
- Ethers Js
- Prisma
- Node Js
- SQLite
- Metamask
- HardHat
- Solidity
- IPFS (InterPlanetary File System)
- Celo Testnet ( Alfajores )

## Licença

Distributed under the MIT License. See  `LICENSE`  for more information.

## Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/emanuele-morais/">
        <img src="https://avatars.githubusercontent.com/u/99221221?v=4" width="100px;" alt="Emanuele Morais profile image"/><br>
        <sub>
          <b>Emanuele Lacerda Morais Martins</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/henriquemarlon/">
        <img src="https://avatars.githubusercontent.com/u/89201795?v=4" width="100px;" alt="Henrique Marlon profile image"/><br>
        <sub>
          <b>Henrique Marlon Conceição Santos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/marcelofeitoza7/">
        <img src="https://avatars.githubusercontent.com/u/71825192?v=4" width="100px;" alt="Marcelo Feitoza profile image"/><br>
        <sub>
          <b>Marcelo Gomes Feitoza</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/pedro-hagge/">
        <img src="https://avatars.githubusercontent.com/u/99206621?v=4" width="100px;" alt="Pedro Hagge profile image"/><br>
        <sub>
          <b>Pedro Hagge Baptista</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
