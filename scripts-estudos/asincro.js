/*function primeiraFuncao(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('espera ai po')
            resolve()
        },1000)
    })
}

async function segundaFuncao(){
    console.log('segunda funcao')


   await primeiraFuncao()

    console.log('fim da segunda funcao')
}

segundaFuncao()*/

/*function getUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(data => data.json())
    .catch(err =>console.log(err))
}

async function showUser(id){
    try{
           const user = await getUser(id)
    console.log(`O nome do usuario é ${user.data.first_name}`)
    }catch(err){
        console.log('usuario nao encontrado')
    }

}
showUser(3)*/

/*async function esperar(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('2 segundos se passaram')
            resolve()
        },2000)
        
    })
}
esperar()*/
/*fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "post",
    headers:{
        'content-type': "application/json; "
    },
    body: JSON.stringify({
        userId: 1,
        id: 195,
        title: "titulo de teste",
    })
})
.then(reposta => {
    
    if(reposta.ok){
        return reposta.json()
    }else{
        throw new Error('deu ruim manin')
    }
    
    
    
    
    })





.then((json) => console.log(json))
.catch((err) => console.log(err))*/

