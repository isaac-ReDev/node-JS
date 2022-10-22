const express = require('express')
const { create ,engine} = require('express-handlebars')

const app = express()

//? partial
const hdsPartiel = create({
    pertialDir
})

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get("/login", (req, respon) => {
    respon.render('login')
} )

app.get("/post", (req, respon) => {
    const post = {
        title:"learn node.js",
        category:"javascript",
        body:"learn node.js ...",
        commnets:4,
    }

    respon.render("post", {post})
} )

app.get("/dashbord", (req, respon)  => {
    const abilities = {
        frontend:["javascript",  "html", "css", "react","ruby on rails", ],
        backend:["node.js", "javascript", "express", "template-engine"]
    }
    respon.render("dashbord", {abilities})
})

app.get('/', (req, respon) =>{
    const user = {
        name:"isaac",
        age:"19",
        student:true,
        profession: "programmers",
        searchWork: true,
    }
    const auth = true

    respon.render('home', {user : user, auth  })
})

app.listen((3000), () => {
    console.log("rodando na porta 3000...")
})
