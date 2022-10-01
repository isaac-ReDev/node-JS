const fs = require("fs");

fs.unlink("arq.txt", function(error) {
    if(error){
        console.log(error);
        return;
    }

    console.log("arquivo removido!");
})