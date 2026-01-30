/*function rand(min,max){
    min *= 100;
    max *= 100;
    return Math.floor(Math.random() * (max - min) + min) / 100;
}

function esperaAi(msg,tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(typeof msg !== 'string'){
                reject('cai no errro')
            }

            resolve(msg.toUppercase()+ ' - passei na promise');
            return;
            

        },tempo)
    })
}
const promises = [
    'primeiro Valor'
]*/
const recebe = prompt('Digite algo:')
console.log(recebe)


