let botao = document.querySelector('.botao');
const url = '/8/8_janela.html'

function abrirLink(url){
  const link = window.open(url, '_blank');
  link.focus(); 
}

botao.addEventListener('click', () =>
  abrirLink(url)
  );