class JogoDaMemoria {

    //se mandar um obj = { tela:1 , idade : 2 , etc:3 ...}
    //vai ignorar e pegar somente a propriedade tela
    constructor({tela}) {
        this.tela = tela

        //caminho sempre relativo ao index.html
        //Pensar q ta no index
        this.cartas = [
            { img: './assets/andre.jpg' , nome:'andre'},
            { img: './assets/kamilly.jpg' , nome:'kamilly'},
            { img: './assets/vitor.jpg' , nome:'vitor'},
            { img: './assets/breno.jpg' , nome:'breno'},
            { img: './assets/tavares.jpg' , nome:'tavares'},
            { img: './assets/leal.jpg' , nome:'leal'},
            { img: './assets/suzana.jpg' , nome:'suzana'},
            { img: './assets/raiane.jpg' , nome:'raiane'},
            { img: './assets/julianna.jpg' , nome:'julianna'},
            { img: './assets/alicia.jpg' , nome:'alicia'},
        ]

        this.iconePadrao = './assets/padrao.png'

        this.cartasEscondidas = []
        this.cartasSelecionadas = []
    }

    //para usar o this, não podemos usar static
    inicializar() {
        //pega todas as funções da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.cartas)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

    embaralhar() {
        const copias = this.cartas
        //duplicar itnes
        .concat(this.cartas)
        //mapear com um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id : Math.random() / 0.5})
        })
        //ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconder(copias)
        }, 1000);
    }

    esconder(cartas) {
        //trocar as imagens pelo icone padrao
        const cartasEscondidas = cartas.map( ({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        this.tela.atualizarImagens(cartasEscondidas)
        this.cartasEscondidas = cartasEscondidas
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        //verificar quantidade de selecionados
        const cartasSelecionadasContador = this.cartasSelecionadas.length
    }

    jogar() {
        this.embaralhar()
    }
}