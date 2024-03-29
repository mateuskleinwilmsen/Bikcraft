//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = window.location.href;
    const href = link.href;

    //.includes verifica se tem uma palavra em uma frase
    //exmeplo: se existe "olá" na frase "olá mundo!"
    if(url.includes(href)){
        link.classList.add("Ativo");
    }
}

links.forEach(ativarLink);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    //se o elemento existe marcar ele como ativo
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    pergunta.setAttribute("aria-expanded",resposta.classList.contains("ativa"));
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

//galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocarImagem(event){
    const img = event.currentTarget;
    const media = window.matchMedia("(min-width: 1000px)").matches;
    
    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação

if(window.SimpleAnime){
    new window.SimpleAnime();
}

//clipboard

// if(window.ClipboardJS){
//     new ClipboardJS('.introducao-conteudo p');
// }