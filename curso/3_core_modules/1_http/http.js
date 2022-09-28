const http = require("http");

const port = 3000;

const server = http.createServer((req, resp) => {
    resp.write("Servidor http");
    resp.end();
} )

server.listen(port, () => {
    console.log("escutando na porta ", port)
})