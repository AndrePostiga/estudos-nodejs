class Heroi{

    atacar(){
        console.log('Atacou!')
    }

    defender(){
        console.log(`Defendeu!`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//usando construtor

class Heroi2{

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    static obterAnoNascimento(idade){
        return new Date().getFullYear() - idade
    }

    atacar(){
        console.log(`${this.nome} Atacou!`)
    }

    defender(){
        console.log(`${this.nome} Defendeu!`)
    }
}


const heroi2 = new Heroi2('Flash', 23)
heroi2.atacar()
heroi2.defender()
console.log(heroi2.idade)
console.log(Heroi2['obterAnoNascimento'](heroi2.idade))

