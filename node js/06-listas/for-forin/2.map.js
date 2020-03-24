const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let indice = 0; indice < this.length; indice++){
        const resultado = callback(this[indice], indice)
        console.log('corona vairus')
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main(){
    try {
        const response = await service.obterPessoas('a')
        //const names = []
        // response.results.forEach(function (item) {
        //     names.push(item.name)
        // })

        // const names = response.results.map( function(pessoa) {
        //     return pessoa.name
        // })

        // const names = response.results.map( pessoa => pessoa.name )
        const names = response.results.meuMap( (pessoa, indice) => `[${indice}] : ${pessoa.name}` )
        console.log(names)
    } catch (error) {
        console.error('Deu ruim', error)
    }
}

main()