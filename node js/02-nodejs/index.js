/*
0 - Obter um usuário
1 - Obter o número de telefone de um usuário a partir de seu ID
2 - Obter o endereço do usuário pelo ID
*/
function obterUsuario(callback) {
    setTimeout( () => {
        return callback(null,{
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null,{
            telefone: '1190265495',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Amadeu Amaral',
            numero: '50',
            quadra: 'B',
            bairro: 'Arsenal'
        })
    }, 3000)
}



obterUsuario(function (erro, usuario){
    if(erro){
        console.error('Deu ruim em usuario', erro)
        return
    }
    console.log('Usuario', usuario)

    obterTelefone(usuario.id, function (erroTelefone, telefone) {
        if (erroTelefone) {
            console.error('Deu ruim em telefone', erroTelefone)
        }
        console.log('Telefone', telefone)

        obterEndereco(usuario.id , (erroEndereco, endereco) => {
            if (erroEndereco){
                console.error('Deu ruim em endereco', erroEndereco)
                return
            }
            console.log('Endereco', endereco)
            Object.assign(usuario, {contato : telefone})
            Object.assign(usuario, {endereco: endereco})
            console.log(usuario)
        })
    })
    
})

//const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

// console.log('Telefone', telefone)