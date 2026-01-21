function produtos(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerble: true,
        value : estoque,
        writable: true,
        configurable: false
    })
    
     Object.defineProperties(this,{ 
        nome : {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
     })


}
const p1 = new produtos('camiseta', 20, 30);

//delete p1.estoque;
console.log(Object.keys(p1));
for(let chave in p1){
    console.log(chave)
}