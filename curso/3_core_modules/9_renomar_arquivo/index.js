const fs = require("fs");



fs.rename('arq.txt', "newArq.txt", function(error){
    if(error){
        console.log("O arquivo nao existe ao nao foi encontrato");
        console.error(error);
        return;
    }
    console.log("Arquivo renomeado!");

});