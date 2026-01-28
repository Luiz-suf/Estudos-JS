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
console.log(p1.estoque);
let produto = {nome: 'caneca', preco: 24};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))*/

/*function Produto(nome,preco){
this.nome = nome;
this.preco = preco;
}
Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}
const p1 = new Produto('camisa', 40);
p1.aumento(20)
console.log(p1)*/;
/*const _velocidade = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }
    acelerar(){
        if(this[_velocidade] >=100)return;
        this[_velocidade]++
    }
    frear(){
        if(this[_velocidade] <=0)return;
        this[_velocidade]--
    }

    get _velocidade(){
        return this[_velocidade]
    }
    set _velocidade (valor){
        if(typeof valor !== 'number') return;
        if(valor >=100 || valor <=0) return;
        this[_velocidade] = valor 
    }
}
const c1 = new Carro('fusca')
for(let i = 0; i<=200; i++){
    c1.acelerar()
}

console.log(c1._velocidade)*/
/*class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log('dispositivo ja ligado')
        }
        this.ligado = true
    }
    desligar(){
        if(!this.ligado){
            console.log('dispositivo ja desligado')
        }
       this.ligado = false
    }
}
const d1 = new DispositivoEletronico('smartphone')

class smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome)
        this.cor = cor
    }
}
const s1 = new smartphone('iphone', 'preto')
s1.ligar()
console.log(s1)*/

/*class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
    this.volume +=2
}
    diminuirVolume(){
        this.volume -=2
    }
    static trocaPilha(){
        console.log('ok, vou trocar')
    }
}
const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)*/
// 705.484.450-52 070.987.720-03
class ValidaCpf{
    constructor(cpfValido){
       Object.defineProperty(this, 'cpfLimpo',{
        value: cpfValido.replace(/\D+/g, ''),
        enumerable: false,
        configurable: false,
        writable:false
       })
    }

    eSequencia(){
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
}

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.Slice(0, -2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemdigitos){
            total += reverso * Number(StringNumerica)
        }
    }



    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        return 'cheguei aqui'
    }
}
const validacpf = new ValidaCpf('070.987.720-03')
console.log(validacpf)
