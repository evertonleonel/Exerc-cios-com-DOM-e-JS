let lampada = document.querySelector('.lampada');

lampada.addEventListener('click', trocarImagem)

function trocarImagem(){
    let minhaImagem = lampada.getAttribute('src');
    
    if(minhaImagem === '/19/imagens/lampada.jpg'){
        lampada.setAttribute('src', '/19/imagens/lampada-on.jpg');
    }else{
        lampada.setAttribute('src', '/19/imagens/lampada.jpg');
    }
};