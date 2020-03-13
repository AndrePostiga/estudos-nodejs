function nomeDaFuncao(parametro1){
    //bloco
}

function queDiaEHoje(){
    const data = new Date()
    return `Hoje é dia: ${data.getDate()}`
}

console.log(queDiaEHoje())



const funcionario1 = {
    nome:'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome:'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}


function calculaDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto*desconto)
}

funcionario1.salarioLiquido =  calculaDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)
funcionario2.salarioLiquido =  calculaDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(`
    Salario descontado ${funcionario1.nome} : ${funcionario1.salarioLiquido}
    Salario descontado ${funcionario2.nome} : ${funcionario2.salarioLiquido}
`)