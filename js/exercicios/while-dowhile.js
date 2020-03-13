// let termoDeParada = true
// let contador = 0
// while(termoDeParada){
//     termoDeParada = contador < 10
//     if(contador % 2 === 0){
//         console.log('Numero par ', contador)
//     }
//     contador += 1
// }

// do {
//     console.log('Só uma vez pois o termo de parada é ', termoDeParada)

// }while(termoDeParada)


let termoParada = true
let contador = 0

while(termoParada) {

    console.log(contador)

    if(contador++ < 3)
        continue
    else
        termoParada = false

}