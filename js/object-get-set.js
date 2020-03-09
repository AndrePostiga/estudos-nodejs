
const pessoa = {
    _nome : "",
    _idade : 20,

    get nome() {
        return this._nome
    },
    set nome(valor){
        this._nome = valor.toUpperCase()
    },

    get podeDirigir(){
        return this._idade > 18
    },
    set idade(valor){
        this._idade = valor
    },
    get idade(){
        return 'trollei'
    }
}

pessoa.nome = "maria do céu"
pessoa.idade = 99
console.log(pessoa.idade)