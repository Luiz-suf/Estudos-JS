/*function produtos(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerble: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('valor invalido')
            }
        }

    })
    

}
const p1 = new produtos('camiseta', 20, 30);

p1.estoque = 40
console.log(p1.estoque);*/
let produto = {nome: 'caneca', preco: 24};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


