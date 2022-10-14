const express = require("express")

//# invocando o express
const app = express()
const port = 3000 //# variavel de ambiente
const users = require('./users')


const path = require("path")

//* ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

const basePAth = path.join(__dirname, "templetes")

app.use("/users", users )

//? HOME router 
app.get('/', (req, resp) => {
    resp.sendFile(`${basePAth}/index.html`)
} )


// //? about 
// app.use(function(req, resp, next){
//     resp.sendFile(`${basePAth}/about.html`)
// })

//? page 404
app.use(function(req, resp, next){
    resp.status(404).sendFile(`${basePAth}/404.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
} )


