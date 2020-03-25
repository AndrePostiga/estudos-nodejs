const EventEmitter = require('events')

class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor()

const nomeEvento = 'usuario:click'

// meuEmissor.on(nomeEvento, function(click){
//     console.log('Um usuario clicou', click)
// })

// meuEmissor.emit(nomeEvento, 'Na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let cont = 0
// setInterval(function() {
//     meuEmissor.emit(nomeEvento, 'no ok' + (cont++))
// },1000)

const stdin = process.openStdin()
stdin.addListener('data', function(value) {
    console.log(`você digitou : ${value.toString().trim()}`)
})

