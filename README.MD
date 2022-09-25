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



