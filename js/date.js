//meses começam no zero
const dataAniversario = new Date(2020,0,1)
console.log(dataAniversario)

//hoje
const hoje = new Date()
//console.log(hoje.toString())
console.log(hoje.toString())
console.log(hoje.toLocaleDateString())
//formato global recomendado
console.log(hoje.toISOString())

//Alterar um dia no js
const dia = hoje.getDate()
console.log("dia ", dia)
hoje.setDate(dia + 5)
console.log(hoje.toISOString())

//Primeira data js
const primeiraDataJs = new Date(0)
console.log(primeiraDataJs.getTime())


hoje.setHours(10,30,0)
console.log(hoje.toISOString())


console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuto: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
    Data Completa: ${hoje.toISOString()}
`)

console.log('Comparar duas datas usando operadores')

console.log(
    new Date(2020,1,20) > new Date(2020,1,1)
)
