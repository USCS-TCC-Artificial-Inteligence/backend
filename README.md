<p align="center">
  <h3 align="center">TCC USCS - Captura de dados estatísticos do sistema operacional</h3>

  <p align="center">
    Esse repositório contempla o código de backend da aplicação do tcc do curso de ciências e sistemas de informação USCS 2021.
  </p>
</p>


# Descrição

Nosso projeto é feito com a linguagem javascript para os endpoints, python para coleta de informações do sistema operacional e postgreSQL para o armazenamento de dados.
O link para a documentação de API pode ser encontrado [aqui](https://www.notion.so/Documenta-o-API-TCC-Os-Charlinhos-47c99711876b446da5cd9f9b59973fa4).

### Estutura de Arquivos
```
    .
    ├── src                    # Arquivos fonte do projeto.
    ├── index.js               # Arquivo contendo declaração do express.
    ├── server.js              # Arquivo responsável pela inicialização do projeto.
    ├── .prettierrc            # Configuração de identação e boas práticas de código.
    ├── .babelrc               # Arquivo de configuração do transpilador.
    ├── .env.example           # Arquivo de configuração de varíaveis de ambiente. Deve ser modificado baseado nas configurações do banco.
    ├── package.json           
    └── yarn.lock              
```

## Setup Windows (Único OS suportado no momento)

- Instale o [NVM](https://github.com/coreybutler/nvm-windows). Um gerenciador de pacotes do node. Opicional porém altamente recomendado.
- O projeto foi feito com a versão node **14.17.0**. Por isso sugerimos que à utilize.
- Após a instalação do NVM, rode o comando no terminal ```nvm install 14.17.0```.
- Após a instalação dessa versão do node, rode o comando no terminal ```nvm use 14.17.0``` para utiliza-la.
- Instale o [Chocolatey](https://community.chocolatey.org/).
- Instale o [Yarn](https://community.chocolatey.org/packages/yarn) utilizando o chocolatey.
- Instale o [PostgreSQL](https://www.postgresql.org/).
- Através do painel PGAdmin que ja é incluido na instalação do PostgreSQL crie uma nova database chamada ```tcc``` ou outro nome que desejar.
- Clone o repositório.
- Na pasta recem criada, rode o comando no terminal ```yarn``` para instalar todos os pacotes.
- Modifique o arquivo ```.env.example``` encontrado na raiz do diretório para ```.env```, e realize as alterações necessarias de seu cotéudo, mudando as váriaveis para as informações que você configurou durante o setup do PostgreSQL. *Verifique a estrutura de arquivos*.
- Rode o comando no terminal ```yarn start``` para executar os endpoints.

# Considerações finais.

Atualmente o projeto se encontra em desenvolvimento, porém é possível que todos os dados mockados já sejam utilizados pela API. Consulte a documentação de API [aqui](https://www.notion.so/Documenta-o-API-TCC-Os-Charlinhos-47c99711876b446da5cd9f9b59973fa4).
