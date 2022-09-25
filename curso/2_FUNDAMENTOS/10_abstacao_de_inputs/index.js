// import inquirer from 'inquirer';
const inquirer = require('inquirer')

inquirer.prompt([{
    name:"p1",
    message:"qual a sua nota",
},{
    name:"p2",
    message:"qual a sua segunda nota",
}]).then(answars => {
    console.log(answars);
}).catch(error => {
    console.log(error);
});