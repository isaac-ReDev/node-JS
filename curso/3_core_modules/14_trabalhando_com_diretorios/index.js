const fs = require("fs")

if(!fs.existsSync('./hentais')){
    console.log("voce nao tem hentais :(")
    fs.mkdirSync("hentais")
    const msg = "Nos criamos para voe aproveite"
    console.log(`${msg}`)
}else{

    console.log("voce tem hentais :)")
}
