const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

//*fazneod pergubntaao usuario
readline.question(
    "qual a sua linguagem de programacao favorita \n", (language) => {

    if(language === "html" || language === "css" || language === "markdown"  || language === "python" ){
        console.log("it's not a language kkkkkk lol",
        "\n Da proxima diga uma linguagem de programacoa de verdade!",
         language.toUpperCase() + " kkk");
        

    }else{
        console.log("Language: ", language);
    }
    readline.close();
} )




