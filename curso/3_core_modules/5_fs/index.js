const https = require("http")
const fs    = require("fs");

const port = 3000;

const server = https.createServer( (req, resp) => {
    fs.readFile('./messagem.html', function(error, data ){
        try{resp.writeHead(200, {"Content-Type": "text/html"});
            resp.write(data)
            return resp.end()} 
        catch{
            console.log(error)
        }finally{
            console.log("FYnaly")
        }
    })

} )

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});