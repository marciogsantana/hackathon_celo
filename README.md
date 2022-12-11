# Projeto Hackthon Celo
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/marciogsantana/hackathon_celo/blob/main/LICENCE) 

# Sobre o projeto

### E se no futuro for possível….
- Registrar um grande volume de imovéis de modo mais fácil?
- Comunicar de forma transparente atividades e ações entre muitos órgãos?
- Trazer maior transparência aos processos internos?
- Monitorar futuras ações envolvendo tais propriedades?

### O Futuro Chegou!! Este projeto implementa:

- Coleta de dados via SPU Net. 
- Registro em blockchain usando o protocolo erc721.
- Emissão de títulos com força de escritura pública a partir de informações onchain.



## Layout Front End
![Front1](https://github.com/marciogsantana/imagens/blob/main/imagem_front.png) ![Front 2](https://github.com/marciogsantana/imagens/blob/main/imagem_front2.png)


## blockscout da rede alfajores
![Blockscout](https://github.com/marciogsantana/imagens/blob/main/block.png)  

## Metados IPFS,
![IPFS](https://github.com/marciogsantana/imagens/blob/main/metadas_pinata.png)  

## Imagem IPFS,
![IPFS Imaggem](https://github.com/marciogsantana/imagens/blob/main/metadas_pinata_imagem.png)  


# Tecnologias utilizadas
## Back end
- Javascript
- NodeJs
- Solidity
- Truffle
- Ganache (testes rápidos)
- Pinata
- Alchemy
- Redes de testes Alfatores Blockchain Celo
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
## Iniciar o projeto

# clonar repositório
git clone https://github.com/marciogsantana/hackathon_celo.git

```bash

# alterar o arqvuivo .env
inserir as chaves para autenticação

# Na raiz do projeto

# instalar dependências
npm install

# fazer deploy do contrato na rede de testes Alfajores
truffle migrate --network alfajores --reset

# ao final da execução e esperado um resultado parecido com este
> contract address:    0x46aaDee37975871e91D6041E8393590199576ED9
   > block number:        15062764
   > block timestamp:     1670678418
   > account:             0x5F17446EA5B8967ad3fC7b649aE3F508fA2a6329
   > balance:             1.9420483886
   > gas used:            2338276 (0x23ade4)
   > gas price:           2.6 gwei
   > value sent:          0 ETH
   > total cost:          0.0060795176 ETH

# acessar pasta SRC
# cd src
# executar o comando abaixo
npm start
Acesse http://localhost:3000 para visualizar a página no browser
```

# Autor

Márcio Gomes de Santana

https://www.linkedin.com/in/marcio-gomes-de-santana-05347198/
