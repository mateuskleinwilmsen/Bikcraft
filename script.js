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