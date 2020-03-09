const Matematica = require('./Matematica/matematica')
const readline = require('readline')

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor \n', valor1 =>{
    terminal.question('Insira o segundo valor \n', valor2 =>{
        terminal.question('Insira o operador valor \n', operador =>{
            console.log(`Ao ${operador} ${valor1} com ${valor2} = ${Matematica[operador](valor1, valor2)}`)
            terminal.close()
        })
    })    
})