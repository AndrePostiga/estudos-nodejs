const readline = require('readline')

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual é seu nome?\n', nome => {
//     terminal.question('Qual é seu telefone?\n', telefone => {
//         console.log(`
//         nome: ${nome}
//         telefone: ${telefone}
//         `)

//         terminal.close()
//     })
// })

function questaoAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""

Promise.resolve()
       .then(() => questaoAsync('Qual é seu nome?'))
       .then(respostaNome => { 
           if(!respostaNome) throw new Error('campo vazio!')
           nome = respostaNome 
       })
       .then(() => questaoAsync('Qual é seu telefone?'))
       .then((respostaTelefone => { 
           if(!respostaTelefone) throw new Error('campo vazio!')
           telefone = respostaTelefone 
       }))
       .then(() => {
           console.log(`
                nome: ${nome}
                telefone: ${telefone}
            `)
       })
       .catch((error) => {console.log('Deu ruim :(', error)})
       .finally(() => terminal.close())