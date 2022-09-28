const https = require("http")
const url   = require("url");

const port = 3000;

const server = https.createServer( (req, resp) => {
    const urlInfo = url.parse(req.url,true);
    const name    = urlInfo.query.name;
    const age    = urlInfo.query.age;
 
    resp.statusCode = 200;
    resp.setHeader("contenty-type", "text/html");

    if(!name){
        resp.end(`<div>
            <h1>Prencah o formulario</h1>
            <form method="get">
                <label>Your Name</label>
                <input type="text" name="name"/>
                <label>Your Age</label>
                <input type="number" name="age"/>
                <input type="submit" value="send"/>
            </form>
        </div>`);
    }else{
        resp.end(` <div>
            <h1>seja bem-vindo! ${name} ${age}</h1>
        </div>`);

    }

} );

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});