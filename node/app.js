const express = require('express')
const app = express() 

app.get('/', (req,res)=>{
    res.send(`<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button>enviar</button>
        
        
        
        </form>`)
})

app.post('/', (req,res)=>{
    res.send('recebi a mensagem')
})

app.get('/contato', (req,res) =>{
    res.send('obrigaod por entrar em contato')
})



app.listen(3000,()=>{
    console.log('acessar http://localhost:3000')
    console.log('servidor rodando')
})
