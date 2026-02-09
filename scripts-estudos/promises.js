const p = new Promise((resolve, reject)=> {
    let a = 1+1;
    if(a ==2){
        setTimeout(()=>{
            resolve('sucesso bb')
        },2000)
    }else{
        setTimeout(()=>{
            reject('falha BB')
        },1000)
    }
})

p.then((mensagem)=>{
    console.log(mensagem)
})
p.catch((err)=>{
    console.log(err)
})

function verificarNumeros(numero){
    const p1 = new Promise((resolve, reject)=>{
       if(numero > 10){
        resolve(`numero ${numero} é maior que 10`)
       }else{ 
        reject(`numero ${numero} é menor ou igual a 10`)
       }
    })
    p1.then((mensagem) =>{
        console.log(mensagem)
    })
    p1.catch((err)=> {
        console.log(err)
    })
}
verificarNumeros(20)


function buscarUsuario(nome, id){
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(nome === 'joao' && id === 10960343){
                resolve({nome: 'joao', id: 10960343})
            }else{
                reject('usuario nao encontrado')
            }
        }, 2000)
    })


    p2.then((usuario)=>{
        console.log(usuario)
    })
    p2.catch((err)=>{
        console.log(err)
    })
}
buscarUsuario('joao', 10960343)
buscarUsuario('benedito', 2422746)

const encad = new Promise((resolve, reject)=>{
    let a = 2;
    resolve(a)
})

encad.then((resultado)=>{
    const b = resultado + 2
    return b
})
.then((resultado2)=>{
    const c = resultado2 +2
    console.log(c)
})
.catch((err)=>{
    console.log('Erro:',err)
})








