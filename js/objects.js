const heroi = {
    nome : "Flash",
    idade : 100,
    sexo : "Masculino"
}

// console.log(`
//     Nome : ${heroi.nome}
//     Idade : ${heroi['idade']}
//     Sexo : ${heroi.sexo}
//     Não Existe : ${heroi.naoExiste}
// `)

heroi.id = 0001

// console.log(Object.keys(heroi))
// console.log(Object.values(heroi))


// console.log(Object.assign(heroi, pessoa))

delete heroi.tamanho
delete heroi.id

// console.log(heroi)

//Modificadores de acesso

const pessoa = {
    _nome : "",

    get nome() {
        return this._nome
    },

    set nome(n) {
        this._nome = n.toUpperCase()
    }
    
}

pessoa.nome = 'andre'
console.log(pessoa)

