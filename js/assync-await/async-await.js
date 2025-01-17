const readline = require('readline')

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questaoAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O Campo está vazio'))
        })
    })
}

async function main(){
    try {
        const nome = await questaoAsync('Qual é o seu nome?')
        const telefone = await questaoAsync('Qual é seu telefone?')
        console.log(`Nome: ${nome}\nTelefone: ${telefone}`)
    } catch (error) {
        console.log('Deu ruim :(', error.stack)
    } finally {
        terminal.close()
    }
}

main()