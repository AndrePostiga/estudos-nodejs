class JogoDaMemoria {

    //se mandar um obj = { tela:1 , idade : 2 , etc:3 ...}
    //vai ignorar e pegar somente a propriedade tela
    constructor({tela}) {
        this.tela = tela

        //caminho sempre relativo ao index.html
        //Pensar q ta no index
        this.heroisIniciais = [
            { img: './assets/andre.jpg' , name:'andre'},
            { img: './assets/kamilly.jpg' , name:'kamilly'},
            { img: './assets/vitor.jpg' , name:'vitor'},
            { img: './assets/breno.jpg' , name:'breno'},
            { img: './assets/tavares.jpg' , name:'tavares'},
            { img: './assets/leal.jpg' , name:'leal'},
            { img: './assets/suzana.jpg' , name:'suzana'},
            { img: './assets/raiane.jpg' , name:'raiane'},
            { img: './assets/julianna.jpg' , name:'julianna'},
            { img: './assets/alicia.jpg' , name:'alicia'},
        ]
    }

    //para usar o this, não podemos usar static
    inicializar() {
        //pega todas as funções da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        //duplicar itnes
        .concat(this.heroisIniciais)
        //mapear com um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id : Math.random() / 0.5})
        })
        //ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }
}