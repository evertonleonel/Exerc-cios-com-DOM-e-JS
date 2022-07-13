const texto = document.querySelector('.texto');
const msgTexto = document.querySelector('.msgTexto');
const botao = document.querySelector('.botao');

botao.addEventListener('click', function(){
  let textos = texto.value;

  if (textos === '') return;
  if (textos === null) return;
  if (textos === undefined) return;
  
  msgTexto.value = 'AIA ' + textos;

  reset(texto);
  focar(texto);
})

function focar(elem){
  elem.focus();
}

function reset(texto){
  texto.value = '';
}

