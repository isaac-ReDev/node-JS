const http = require("http");

const port = 3000;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200
    resp.setHeader("contenty-type", "text/html");
    resp.end("<h1>servidor HTTP</h1>");
} )

server.listen(port, () => {
    console.log("escutando na porta ", port)
})