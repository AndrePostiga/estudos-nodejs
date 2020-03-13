const textoPar = 'par'
const textoImpar = 'ímpar'
// for(let index = 0; index <= 10; index++){
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Veloz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Super Força'
    }
]
//forma com contador

// for(let index = 0; index < minhaListaDeTarefas.length; index++){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//         id: ${item.id}
//         nome: ${item.nome}
//     `)
// }

// forma sem contador

// for(const index in minhaListaDeTarefas){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//         id: ${item.id}
//         nome: ${item.nome}
//     `)
// }

// forma pegando item direto sem index
for(const item of minhaListaDeTarefas){
    console.log(`
        id: ${item.id}
        nome: ${item.nome}
    `)
}