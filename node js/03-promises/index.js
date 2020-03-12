//importar um modulo interno para resolver promisses
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
                ddd: 11
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


//para manipular o sucesso usamos a função .then, já que retorna promisse
//para manipular erros usamos o .catch
//usuario -> telefone -> consola telefone
const usuarioPromisse = obterUsuario()
usuarioPromisse
.then( resultado => {
    return obterTelefone(resultado.id)
    .then( function resolverTelefone(result) {
        return Object.assign(resultado, {contato : result })
    })
})
.then( function resultadoAnterior (resultado) {
    return obterEnderecoAsync(resultado.id)
    .then( function resolver(result) {
        return Object.assign(resultado, {endereco : result})
    })
})  
.then( resultado => {
    console.log(resultado)
})
.catch( (erro) => {
    console.error('Deu ruim', erro)
})
