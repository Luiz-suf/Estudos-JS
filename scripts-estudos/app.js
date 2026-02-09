//FILTER:
/*const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numeroFiltrados = numeros.filter(valor =>{
    return valor > 10
})
console.log(numeroFiltrados)*/

/*const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const retornaNomes = pessoas.filter(valor => valor.nome.length >= 5)

const retornaIdade = pessoas.filter (valor => valor.idade >50)

const pessoaA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a') )

console.log(retornaNomes)
console.log(retornaIdade)
console.log(pessoaA)*/

//MAP:
/*const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobrado = numeros.map(valor=>{
    return valor * 2
})


const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const nomes = pessoas.map(valor => valor.nome)
const idade = pessoas.map(valor => {
    
    return {idade:valor.idade}
})

const comIds = pessoas.map((valor,indice)=>{
   const novoObj = {...valor}
   novoObj.id = indice
    return valor
})*/

//REDUCE:
/*const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce((acumulador,valor,indice,array)=>{
    acumulador += valor
    return acumulador 
})
console.log (total)*/

/*const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const pares = numeros.filter(valor => {
    return valor % 2 ===0
}).map(valor => {return valor * 2})
.reduce((acumulador,valor) =>{
    acumulador += valor
    return acumulador
})
console.log(pares)*/

const nome = 'luiz ivan'
export{nome}

