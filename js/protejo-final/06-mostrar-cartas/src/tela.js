const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_DA_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const MENSAGENS = {
    sucesso : {
        texto: 'Combinação correta',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }

}
class Tela {
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 40%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">        
            </div>
            <br />
        </div>
        `
    }

    static alterarConteudoHtml(codigoHtml){
        let elemento = document.getElementById(ID_CONTEUDO)
        elemento.innerHTML = codigoHtml
    }

    static getStringHtmlPelaImagem(itens){
        //para cada item da lista, vai exetucar a função e ao final concatenar tudo em uma unica string
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens){
        const codigoHtml = Tela.getStringHtmlPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }

    static exibirCartas(nomeDaCarta, img) {
        const elementosHtml = document.getElementsByName(nomeDaCarta)
        //alterar o src para cada elemento do html com aquele nome
        elementosHtml.forEach(item => (item.src = img))
    }

    static exibirMensagem(sucesso = true){
        const elemento = document.getElementById(ID_DA_MENSAGEM)
        if (sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerHTML = MENSAGENS.sucesso.texto
        }else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerHTML = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
    }
}