const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
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
}