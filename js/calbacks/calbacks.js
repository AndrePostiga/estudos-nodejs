const fs = require('fs')
// fs.readFile('./arq1.txt', (error, resposta) => {
//     if(error) { 
//         console.error('Deu ruim***', error.stack)
//         return
//     }

//     console.log('resposta', resposta.toString())
// })

fs.readFile('./arq1.txt', (error, respArq1) => {
    if(error){
        console.error('Deu ruim no arquivo1***', error)
        return
    }
    fs.readFile('./arq2.txt', (error, respArq2) => {
        if(error){
            console.error('Deu ruim no arquivo2***', error)
            return
        }
        
        fs.readFile('./arq3.txt', (error, respArq3) => {
            if(error){
                console.error('Deu ruim no arquivo3***', error)
                return
            }
            const conteudo = `${respArq1.toString()}\n${respArq2.toString()}\n${respArq3.toString()}\n`
            console.log(conteudo)
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite) {
                    console.log('Deu ruim na gravação', errorWrite)
                    return
                }
                console.log('Arquivo salvo!')
            })
        })        
    })
})

