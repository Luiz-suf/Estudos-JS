const express = require('express')
const app = express() 
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(3000, () =>{
    console.log('http://localhost:3000')
    console.log("servidor rodando na rota 3000")
})
 
/*const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send(`<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button>enviar</button> 
        </form>`)
})
app.post('/', (req,res)=>{
    res.send('Trantado seu post')
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000");
    console.log("Servidor rodando na rorta 3000") 
})*/