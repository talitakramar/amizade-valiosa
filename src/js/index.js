/*
quando clicar na bolinha da listagem temos que esconder o cartao da amiga aberta e mostrar o cartao correspondente ao que foi selecionado na listagem.

pra isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartao da amiga

precisamos criar duas variaveis no JS para trabalhar com os elementos na tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de amigas

- remover a classe aberto so do cartao que esta aberto
- ao clicar em uma bolinha da listagem pegamos o id dessa amiga pra saber qual cartao mostrar
- remover a classe ativa que marca a amiga selecionada
- adicionar a classe ativo no item da lista selecionado

*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos na tela
const listaSelecaoAmizadeValiosa = document.querySelectorAll ('.amigas') 
const amizadevaliosaCard = document.querySelectorAll('cartao-amigas')

listaSelecaoAmizadeValiosa.forEach(amigas => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de amigas
    amigas.addEventListener('click', () => {
        console.log(amigas)
        //remover a classe aberto so do cartao que esta aberto
        const cartaoAmigasAberto = document.querySelector(".aberto")
        cartaoAmigasAberto.classList.remove('aberto')

        //ao clicar em uma bolinha da listagem pegamos o id dessa amiga pra saber qual cartao mostrar
        const idAmigasSelecionado = amigas.attributes.id.value

        const idDoCartaoAmigasParaAbrir = 'cartao-' + idAmigasSelecionado
        const cartaoAmigasParaAbrir = document.getElementById(idDoCartaoAmigasParaAbrir)
        cartaoAmigasParaAbrir.classList.add('aberto')

        // remover a classe ativa que marca a amiga selecionada
        const amigasAtivoNaListagem = document.querySelector('.ativo')
        amigasAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const amigasSelecionadoNaListagem = document.getElementById(idAmigasSelecionado)
        amigasSelecionadoNaListagem.classList.add('ativo')

    })
})