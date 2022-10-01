const http = require("http");
const fs   = require("fs");

const port = 3000;

const server = http.createServer((req, resp) => {
    const urlInfo = require("url").parse(req.url, true);
    const name    = urlInfo.query.inputName

    if(!name){
        fs.readFile("./msg.html", function(error, data){
            try{
                resp.writeHead(200, {"Content-Type": "text/html"})
                resp.write(data)
                return resp.end()
            }
            catch{
                console.log(error);
            }
        })
    }
    else{
        const nameNewFIle = name + ',\r\n';

        fs.appendFile("arq.txt", nameNewFIle ,function(error,data){
            resp.writeHead(302, {
                Location: '/',
            });
            return resp.end()
        })
    }
}  )

server.listen(port, () => {
    console.log("servidor rodadando na porta ", port)
});