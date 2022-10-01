const http  = require("http");
const url  = require("url");
const fs    = require("fs");

const port = 3000;

const server = http.createServer((req, resp) => {
    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1);

    if(fileName.includes("html")){
        //# chegar se o arquivo existe
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, function(error ,data){
                // try{
                    resp.writeHead(200, {"Content-Type": "text/html"})
                    resp.write(data);
                    return resp.end();
                // }catch{
                    // console.error(error);
                // }

            })
        }else{
            fs.readFile("404.html", function(error ,data){
                    resp.writeHead(404, {"Content-Type": "text/html"})
                    resp.write(data);
                    return resp.end();
            })
        }
    }


} )

server.listen(port, () => {
    console.log("Openning in the port: ", port);
})