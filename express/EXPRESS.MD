# EXPRESS

## THATS IS THE EXPRESS ?

- Um **framework pra Node.js** muito ultilizado

- Serve para criarmos **aplicasoes web**;

- Nele podemos criar rotas, renderizar HTML, conectar a um bannco de dados;

- **O express torna a criacao de app muito mais simples**, do que com os Core Modules;

---

## wHAT IS ROUTEES ?

- Rota e um **conceito super importante presente** em uma aplciacao web; 

- basicamente sao as **URL's que acessamos**;

- Se criamos uma rota **/produtos**, podemos acessar atraves da URL **www.nossosite.com/produtos**;

- **Quando o usuario acessa podemos acessar varias logicas**, como carregar o usuario do banco de dados;

- Ou seja, rotas **sao uma ponte** entre o usuario e a logica da aplicacao;

---

##  FIRST STEPS

- O **setup inicial do Express e bem simples**, mas precisamos conseguir algumas pessoas;

- **Imprtar o Express** e invocalo;

- **Definir uma porta base**paraa aplicacao;

- **Criar uma rota** (URL que sera acessada);

- **Executar o metodo listen** na porta expecifica;

## HTML RENDERER

- Para enviar HTML como resposta ultilizaremos o modulo **sendFIle**;

- isso faz que o arquivo seja **renderizado no navegar**;

- Precisamos acessar o arquivo por meio do diretorio base, isso requer o modulo **path**

---

## SOLVING THE UPDATE PROBLEM

- Precisamos todas toda vez **reiniciar o servidor** para receber as atualizacoes, isso e muito custoso;

- Vamos entao instalar o modulo **Nodemon**;

- Que **a cada vez o arquivo salvo ele reinicai o projeto**, facilitando nossa vida;

- Vamos salvar como dependencia de desenvolvimento (--save-dev);

- Precisamos criar o **script start** **"start": "nodemon index.js localhost 3000"**'
    1. start e o nome do script que chamaremos **(npm start)**.
    2. **Nodemom** e o nome do nosso **Core Module externo** salvo em nossas dependecias de desenvolvimento.
    3. **Localhost 3000** e a porta.

---

## MIDDLEWARES

- Middlewares sao codigos quer podem sar executados no **meio/entre (middle de alguma acao e outra)**

- Por exemplo: **verficar se o usuario esta logado**, podemos ter um para esta verrificacao.

- O metodo wuer nos da acesso a ultilizacao middlewares e o **user** no Express;

---

## GETTING PARAMETERS

- Podemos resgataros parametros da URL por meio do **REQ**;

- Acessamos **req.params.<nome>**

- Onde nome **deve ser o que esta definido na URL do Express**;

- Que fica desta forma: **/users/:id**;

- Nest caso estariamos buscando o usuario no banco de dados pelo **ID**;

- E o parametro vem pela URL;

---

## SENDING DATAS BY METHOD POST

- Para enviar os dados camos precisar **criar um form e mandar os dados via post** para alguma URL;

- No Express precisamos colocarf alguns **middlewares** como o express.json para ler os dados do body;

- E tambem uma rota quweque vai receber estes dados, ultilizandos o **metodo post** do Express;

---

## Module Routes

- Podemos **unir varias rotas em um modulo**, isso vai deixar nosso codigo mais organizado;

- NOrmalmente **criamos uma pasta ou arquivo** que contem essas rotas;

- Que representam uma entidade em comun, como **users**;

- Vamos ultilizar um novo objeto chamado **Router**, e colocar as rotas nele;

- Depois precisamos **exporta-lo e importar no arquivo pricipal**;

## 404 page


