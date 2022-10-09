const fs = require('fs')

fs.stat("todos.txt", (error, stats) => {
    if(error){
        console.log(error);
        return
    }
    // console.log(stats)
    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
    
} )