const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    //Quando der algum problema -> Reject(erro)
    //Quando for sucesso -> resolve
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            //return reject(new Error('Deu ruim de verdade'))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '1190265495',
                ddd: 21
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Amadeu Amaral',
                numero: '50',
                quadra: 'B',
                bairro: 'Arsenal'
            })
        }, 3000)
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Amadeu Amaral',
            numero: '50',
            quadra: 'B',
            bairro: 'Arsenal'
        })
    }, 3000);
}

main()

//1º passo adicionar a palavra async na função -> automaticamente ela retornará uma promise
async function main() {
    try {
        console.time('medida-promisse')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)        
        // const endereco = await obterEnderecoAsync(usuario.id)        
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        Object.assign(usuario, {contato : resultado[0], endereco: resultado[1]})
        console.log(usuario)
        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${usuario.endereco.rua}, ${usuario.endereco.numero}
            Telefone: (${usuario.contato.ddd}) ${usuario.contato.telefone}
        `)
        console.timeEnd('medida-promisse');
    } catch (error) {
        console.error('Deu Ruim', error)
    }
}

