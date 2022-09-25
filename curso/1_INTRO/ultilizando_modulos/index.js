const fs = require("fs") // File System

fs.readFile("arquivo.txt", "utf8", (error,data)=>{
    if(error){
        return console.log(error);
        
    }

    return console.log(data); 

})