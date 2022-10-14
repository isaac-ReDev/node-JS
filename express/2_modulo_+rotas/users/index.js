const express = require('express')
const router  = express.Router()

const path = require("path")


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

router.use(checkAuth)


//* rotas de metodos
router.get("/add", (req, resp) => {
    resp.sendFile(`${basePAth}/logIn.html`)
} )

router.post("/save", (req, resp) => {
    console.log(req.body)
} )


//? ABOUT router 
router.get('/:id', (req, resp) => {
    const id =  req.params.id

    //* leitura da tabela de users, resgatar um usuario
    console.log(`Estamos buscando pelo usuario ${id}`)
    // let newId = Number(id)
    // if(newId === 5){console.log("OPa leticia ne ?")}
    resp.sendFile(`${basePAth}/users.html`)
} )


module.exports = router
