const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir  o modo de entrada via terminal
    input: process.stdin,

    //todo texto de saida sairá no terminal
    output: process.stdout
})

//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair

`
// terminal.question('Qual é o seu nome?', (msg) => {
//     console.log('Você escreveu ', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'submenu! Pressiona enter para selecionar mais opcoes...',
        fn: opcao1
    }
}

function menuInicial(msg) {
    const opcao = Number(msg)
    if (isNaN(opcao)) {
        throw new Error(`Número Inválido ${msg}`)
    }

    switch(opcao){
        case 0:
            console.log('Saindo...')
            terminal.close()
            break
        case 1:
            console.log('Menu inicial...')    
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )        
            break;
        default:
            console.log('opcao inválida!')
            terminal.close
            break
    }
}

function opcao1(msg){
    console.log('Não há mais opções')
    terminal.close()
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)