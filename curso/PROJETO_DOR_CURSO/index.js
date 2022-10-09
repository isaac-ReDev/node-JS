//# modulos externos
const c = require('ansi-colors');
const inquirer = require('inquirer');

//# modulos internos
const fs = require("fs")

operations()

function operations(){
    inquirer
        .prompt([{
            type: "list",
            name: "action",
            message: "O que vode deseja fazer >",
            choices: ["criar conta","consultar saldo","Deposito","Sacar","Sair"],
        },
    ]).then().catch((err) => console.log(err) );
}

