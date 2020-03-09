class Piloto {

    constructor(nome, dataNascimento, tempoDeVoo, temPermissaoParaVoar){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.tempoDeVoo = tempoDeVoo;
        this.temPermissaoParaVoar = temPermissaoParaVoar;
    }

    pilotar() {
        console.log(`${this.nome} vai pilotar`)
    }

    dormir() {
        console.log(`${this.nome} está dormindo`)
    }
}

const andre = new Piloto(
    'Andre',
    new Date(1997, 2, 15),
    '5 anos',
    true
)

console.log(andre.nome)
console.log(andre.dormir())