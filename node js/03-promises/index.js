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

const usuarioPromisse = obterUsuario()
usuarioPromisse
    .then( resultado => {
        return obterTelefone(resultado.id)
        .then( result => {
            return 
        })
    })  
    .then(resultado => {
        return Object.assign(resultado, obterEndereco(resultado.id))
    })  
    .then( resultado => {
        console.log(resultado)
    })
    .catch( (erro) => {
        console.error('Deu ruim', erro)
    })
//para manipular o sucesso usamos a função .then, já que retorna promisse
//para manipular erros usamos o .catch
