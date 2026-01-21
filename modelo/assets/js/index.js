/*function somar(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('a e b precisam ser numeros');
}
return a + b;
}
try{
console.log(somar(2,3))
console.log(somar(2,3))
} catch(error){
    console.log(error)
}*/

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

setInterval(function(){
    console.log(mostraHora())
}, 1000)