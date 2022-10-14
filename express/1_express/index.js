const express = require("express")

//# invocando o express
const app = express()
const port = 3000 //# variavel de ambiente

const path = require("path")

//* ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

const basePAth = path.join(__dirname, "templetes")

//? MIDDLEWARES
const checkAuth = function(req,resp,next){
    req.authStatus = true

    if(req.authStatus){
        console.log("Esta logando pode continuar")
        next()
        console.log("nesx....")
    }else{
        console.log("nao esta logado fassa o logIN")        
    }
}

app.use(checkAuth)


//* rotas de metodos
app.get("/users/add", (req, resp) => {
    resp.sendFile(`${basePAth}/logIn.html`)
} )

app.post("/users/save", (req, resp) => {
    console.log(req.body)
} )


//? ABOUT router 
app.get('/users/:id', (req, resp) => {
    const id =  req.params.id

    //* leitura da tabela de users, resgatar um usuario
    console.log(`Estamos buscando pelo usuario ${id}`)
    // let newId = Number(id)
    // if(newId === 5){console.log("OPa leticia ne ?")}
    resp.sendFile(`${basePAth}/users.html`)
} )

//? HOME router 
app.get('/', (req, resp) => {
    resp.sendFile(`${basePAth}/index.html`)
} )

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
} )


