# RoadMap do Curso

## O que e node.js ?
- **Node.js** e um Run time de javascript;

- Ou seja, **uma biblioteca ultilizada por um compilador** durante e execucao do programa;

- Queesta escrita na **V8 engine**(escrita em c++ da  google;

- Poscibilita criar softwares em JS no lado do servidor;

- Temos entao um codigo JS rodando em c++ para garantir alta performace; 

---

## O que e **NPM**

- O **MPM** e um gerenciador de pacotes do Node;

- Vamospoder ultilizar **bibliotecas de terceiros**, baixando ela pelo **NPM**;

- E tambem **executar determinados scripts** no nosso programa;

- Os modulos externos ficam buma pasta chamada **node_modules**;

- Ela deve ser descartavel, ou seja, a cada instalacao do projeto baixamos todos os pacots novametne.

---

## Ultilizando um modulo
- Agora vamos **evoluir o nivel do nossos programas**;

- Importaremos um module do node: **File System**;

- esse modulo serve para trabalhar com diretorios, arquivos e etc;

- E ele e um **Cors Module**, ou seja, noa e nescessario instalar;

- Veremos mais sobre o modulo ao longo do curso.

- Podemos importar o module ocm a instrucao **Import**;

---

# fundamentos do **Node.js**

## O que sao sos modulos

-   Modulos sao **scripts reaproveitaves *8, que ultilizamos bastante programando em node.js;

-   Eles sao divididos em tres categorias;

-    **Internos**: modulos que nos desenvolvemos;

-    **Core modules**: modulos que vem com o Noe.js;

-   **Externos**: modulos que nos instalamos via **NPM**;

---

## modulo Interno

-   Os **Moduls INternos** sao criados nas pastas do nosso projeto;

-   Precisamos **Exporta** o modulo;

-   Podedemos ultilizar a instruxao **Module exports**;

-   E **importante** onde precisamos ultlizar;

- Para inportar precisamos ultiizar a instrucao require;

-   vamos criar modulos;

- Exemplo:
```javascript
    //exportando 
    function soma(...args){
        return args,reduce((accu, currentIndex) => {
            acuu += currentIndex;
        });
    };
    mudule.exports{
        soma,
    }
    // importnado em um arquivo
    const myModule = require('./MeuModulo')
    const soma = myModule.soma;

    soma(1,2,3,4,5,6);
    //logs
    --> 21
```

---

## Export e Import;

- Com o Node.JS tambem e possivel ultilizar o **Import e export  do ES**;

- Sao funcionalidades mais modernas de **Importacao e exportacao**;

- Com **mais recursos** do com as qie vimos antes;

- Pra isso podemos modificar nossos arquicos para extencao **mjs**;

- E entao podemos export uma com **export default**;

- E importante com **import**, com uma unica funcao, caso seja importante; 

---

## Core Modules

- No Node temos diversas **Core Modules**, que sao o que vem prontos para serem ultilizados.

- Eles resolveram diversos problemas, como: **trabalar com arquivos e diretorio, servir aplicacoes** e etc;

- **Presamos importar** esses modulos no projeto para poder ultilizarmos;

- Vamos ultilizar o Core Module;

---

## Ler argumentos

- O Node permite o **envio de argumentos via linha de comando;**

- Passamos eles apos as instrucoesde execusao do raquivo;

- Rgumentos ficam em um arrey camado: **process.argv**

- Onde Podemso **fazer um loop e rssgatar os valores** e resgatar osvalores enviados.

---

## Modulos Exxternos

- Os modulos externos podem ser instalados vai **npm**;

- para isso precisamos inicializar um projeto, com **npm init**;

- Que sao salvos na pasta **node_modules**;

- Podemos instalar modulos com **npm install <nome>**;

##   Algo pratico com os argumentos
-   podemos **ultilizar argumentos recebidos** para aplicar em nosso programa alguma logica;

-   Basta **encapsular em variaveis** e depois ultilizar-los;

-   Ou seja, podemos atravez do terminal, **executar tambem uma funcao de um modulo interno nosso**, por exemplo;

---

## Explorando o console

-   Temos uma grande variedade de metodos no console, como o **'console.log()'**;

- Podemso **imprimir mais de uma variavel** por vez;

- Inserir  **variavesi entre strings**;

- Ha um metodo para limpar as mensagens do console;

---

## Melhorando a visualizacao

- ha um modulo externo chamado **chalk**;

- Ele pode deixar a visualizacao do console mais agradavel;

- Fazendo com que seja posssivel expressar um **feedback com base em cores**;

---

## lendo entrada de dados

- Podemos ler dadso do usuario com modulo **readline**, um core module;

- Neste caso usamos o metodo **question**, que faz uma pergunta a ser respondida pelo usuario;

- Deposi podemos **processa a resposta** e entregar o retorno;

### Melhorando a leitura de dados

- Ha um modulo externo  chamado **inquirer**;

- Que e mais completo para **resgatar e lidar** com o input do usuario;

- Alem dissom e **baseado em promises**, o que torna sua ultilizacao mais simples;

---

## Event Loop

- O **Event Loop** e um recurso de arquitetura do node;

- o **Node executa uma linha por vez**, e de cima para baixo  do codigo escrito;

- Isso nos ajuda a **evitar problemas de concorrencia**, como loops infinitos;

---

## Event Emitter

- O **Event Emmiter** se comporta com os eventos do navegador;

- Podemos **ativar codigo alguns pontos da aplicacao**, como o inicio;

- E um **core module** chamado **events**;

- Precisamos instanciar a **class EventEmmiter** que vm deste modulo;

- Entao ultilizamos os metodos para atingir nosso objetivo;b

---

## Sincrono e Assincrono
- Em node.js temos duas formas de executar codigos;

- Conhecidas como **sync** e **async**;

- **Sync Forma sincrona:** E quando o codigo espera ser totalmente executado para prosseguir;

- **Async Forma assincrona:** O codigo constinua progredindo e em um ponto futuro obtem a resposta da execuxao **assinciona**.

---

## Erros no Node

- Temos duas formas principais para **gerar ou evidenciar erros me node.JS**

- **Throw:** uma forma de encerrar um programa, gerando um novo erro.

- **Try, catch:** uma formade evidenciar algo que deu errado em um bloco de codigo e existe a message mde erro.


# Sobre Core Modules

- Vamos ver diversos Core Modules em detalhes, que sao **funcdamentais para criaca ode softwares em node**;

- **http** modulo para criar servidores HTTPS.

- **path** extrair informacoes de path(**caminho de diretorios**);

- **fs** file system, leitura e escrieta de arquivos;

- **url** modelos para trabalhar com URLs;


# O modulo http

- Podemos criar um **servidor HTTP** com este modulo;

- Ou seja, receber uma requisisca e enviar **codigos HTML** como resposta, por exemplo;

- Vamos ultizar alguns modelos **como createServer**, para criacao do servidor;

- e tabem **listen**, para determinar a porta;

## Parando o servidor

- ha alguns servidores que **ocupam a aba do terminal** para continuarem rodando;

- Um deste e o modulo **HTTP**;

- Parar parar este servidor basta ultilizar o **CTRL + c**;

- Isso **e util quando a um problema no codigo** tambem;

## Retornando HMTLcom o http

- Para retornar HTML precisamos **implementar mais recursos**;

- Podemos adicionar um **status code** no retorno, com a propriedade **statusCode**;

- Mudar os headers para **textHTML**;

- E retornar o HTML pelo **metodo end** do http;

## Atualizacoes de projeto

- Para emitir as atualizacoes do projeto **precisamos sempre reiniciar o servidor**;

- Ou seja, salvar, encerrando e inciando, este e o processo;

- Isso e **terrivel para produtividade!**;

---

## Modulo Url

- O modulo **url** serve para que possamos deconpor o metood **parse**;

- Podemos resgatar: **host, path, search, query** e etc;

- A partir dessa infiormacoes podemso alterar a logica das nossas aplicacoess;

## Uhnindo os medulos http e url

- **Podemos trabalhar com esse modulo juntos** e ter um resultado interessante;

- Com o **http criamso nosso servidor** e alteramos a resposta com base na **URL** acessada;

- **Com url processamos os parametros** que vem pela query string, para alterar a logica do http;

---

## Modulo **fs**

- O modulo **fs** (File System) serve para trabalhar com arquivo e diretorios;

- Este e tembe m um **core moduro**; 

- Podemos ler e escrever em arquivos, **por exemplo**;

- Uma atualizacao interessante: **Logs do sistema**;

---

## Escreendo em arquivos

- Podemos criar e escrever com arquivos abem, ultilizando o metodo **whiteFile**;

- Esta escrita pode estar associada a um conjunto de operacoes;

- Como o **envio de informacoes do usuasrio**, por exemplo;

--- 

## Atualizndo arquivos

- O **writeFIle** substitui tudo que esta dentro de um arquivo;
<!--  -->
- **E se quisermos atualizar ?**

---

## Detalhe dos arquivos

- Podemos sasber mais sobre o arquivo temos acesso;

- Ultilizaos o metodo **stat** do fs;

- Com ele temso informacoes de: tamanho, data de criacao, se e arquivo diretorio e etx;


- Para este fim ultilizamos o **appendile**;

- Que tem a mesma ultili nos permite unir os conteudos;

---

## Removendo arquivo

- Para remover mu arquivo com o **fs** ultilizamos o modulo **unlink**;

- Precisamos **passar o arquivo como parametro**;

- Temos a possibiblidadde de checar algum erro, apartir da **callback** retornada;

---

## Renomeando arquivos

- Para renomear um qruivo com  ofs ultilizamos o modulo **rename**;

- Precisamos **passar o arquivo como como parametro** e tabem o novo nome;

- Neste metodo tambem verificar algum eventuial erro, pela **callback**;

--- 

## Rotas com node.js puro

- Podemos criar um **sistema de roteamento** simples com node.js e seus core modules;

- As rotas  sao basicamente **paginas que acessamos** no nosso site;

- A ideia e **Indentificar as arquivos acessados pla url** e retornar-los, se existirem;

---

## Module Path

- Com o **path** conseguimos extrair diversas informacoes sobre os caminhos e arquivos;

- Este tambem e um **code module**

- Algumas **informecoes possives sao:** node do diretorio, nome do arquivo, extencoes de arquivos e etc,

---

## Path absolute e formar path

- Com a funcao **resolve** e possivel saber qual o path completo ate o arquiv alvo;

- E com a funcao **join** e possivel formar um path dinamico, com variaveis e valores fixos;

- Sao duas funceos muito importantes;

---



    