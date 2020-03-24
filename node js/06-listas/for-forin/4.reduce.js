const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index = 0; index < this.length; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main() {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        //[20.2, 30.3, 40.5] = um_valor_só
        // const total = pesos.reduce( (anterior, proximo) => {
        //     return anterior + proximo
        // }, 0)
        const minhaLista = [
            ['Andre', 'Felipe'],
            ['NodeBr', 'PythonBr']
        ]
        const total = minhaLista.meuReduce( (anterior, proximo) => {
            return anterior.concat(proximo)
        }, []).join(',')
        // console.log(pesos)
        console.log(`total: ${total}`)
    } catch (error) {
        console.error('Deu ruim: ', error)
    }
}

main()