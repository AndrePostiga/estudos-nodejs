function minhaFuncao1(parametro1){
    return `eeeee`
}

const minhaFuncao2 = function(parametro1) {
    return `aeeee ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aeeeee ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aeeee ${parametro1}`

const objeto1 = {
    minhaFuncao: parametro1 => console.log(`aee ${parametro1}`)
}

objeto1.minhaFuncao('test')

const objeto2 = {

    minhaFuncao (parametro1){
        console.log(`aee ${parametro1}`)
    }
}

objeto2.minhaFuncao('Andre')