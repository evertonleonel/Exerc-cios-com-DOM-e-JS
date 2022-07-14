const items = document.querySelector('.items');
const lista = document.querySelector('.lista');
const botao = document.querySelector('.botao')
const limpar = document.querySelector('.limpar')

const arrayLista = [];

botao.addEventListener('click', function enviar(){
  const nome = items.value;
  let  li = document.createElement('li');

  if( nome == '' ) return;
  if( nome == null ) return;
  if( nome == undefined ) return;

  arrayLista.push(nome);
  
  li.innerHTML = arrayLista.pop();
  lista.appendChild(li);
  li.classList.add('enfeite')

  items.value = '';
  items.focus();

});

limpar.addEventListener('click', () =>{
  limparLista()
});

function limparLista(){
  items.value ='';
  items.focus()
  lista.innerHTML = '';
};
