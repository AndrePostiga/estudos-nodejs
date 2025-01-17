const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
    Commander
        .version('v1')
        .option('-n --nome [value]', "Nome do Heroi")
        .option('-p --poder [value]', "Poder do Heroi")
        .option('-i --id [value]', "Id do Heroi")
        .option('-c --cadastrar', "Cadastrar um heroi")
        .option('-l --listar', "Listar um heroi")
        .option('-rm --remover', "Remove um heroi pelo id")
        .option('-a --atualizar [value]', "Atualiza um heroi pelo id")
        .parse(process.argv)

    const heroi = new Heroi(Commander)
    try {
        if (Commander.cadastrar) {
            delete heroi.id
            const resultado = await Database.cadastrar(heroi)
            if(!resultado){
                console.error('Heroi não foi cadastrado')
                return
            }
            console.log('Heroi cadastrado com sucesso!')
        }
        if(Commander.listar) {
            const resultado = await Database.listar()
            console.log(resultado)
            return
        }
        if(Commander.remover) {
            const resultado = await Database.remover(heroi.id)
            if (!resultado){
                console.error('Não foi possivel remover o heroi')
                return
            }
            console.log('Heroi removido com sucesso')
        }
        if(Commander.atualizar) {
            const idPraAtualizar = parseInt(Commander.atualizar)
            //remover todas as chaves que estiverem com undefined | null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            //na hora que transformar de string pra json ele tira as chaves desnecessárias
            const resultado = await Database.atualizar(idPraAtualizar, heroiAtualizar)

            if(!resultado) {
                console.error('Não foi possível atualizar')
                return
            }
            console.log('Seu herói foi atualizado com sucesso!')
        }

        
    } catch (error) {
        console.error('Deu ruim: ', error)
    }
}

main()