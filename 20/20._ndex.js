let lampada = document.querySelector('.lampada');

lampada.addEventListener('mouseover', trocarImagem)

function trocarImagem(){
    let minhaImagem = lampada.getAttribute('src');
    
    if(minhaImagem === '/20/imagens/lampada.jpg'){
        lampada.setAttribute('src', '/20/imagens/lampada-on.jpg');
    }else{
        lampada.setAttribute('src', '/20/imagens/lampada.jpg');
    }
};