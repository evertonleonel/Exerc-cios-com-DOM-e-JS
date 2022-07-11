let botao = document.querySelector('.botao');
const url = 'https://www.gx2.com.br/'

function abrirLink(url){
  const link = window.open(url, '_blank');
  link.focus(); 
}

botao.addEventListener('click', () =>
  abrirLink(url)
  );