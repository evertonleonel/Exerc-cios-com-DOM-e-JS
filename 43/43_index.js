const items = document.querySelector('.items');
const lista = document.querySelector('.lista');
const botao = document.querySelector('.botao')
const limpar = document.querySelector('.limpar')

const arrayLista = [];

botao.addEventListener('click', function enviar(){
  const nome = items.value;
  const li = document.createElement('li');

  if( nome == '' ) return;
  if( nome == null ) return;
  if( nome == undefined ) return;

  arrayLista.push(nome);
  
  arrayLista.forEach(item => {
    li.innerHTML = item;
    lista.appendChild(li);
  });

  li.classList.add('enfeite', 'lista')
  
  items.value = '';
  items.focus();
  console.log(arrayLista)
});

limpar.addEventListener('click', () =>{
  limparLista()
});

function limparLista(){
  items.value ='';
  items.focus()
  lista.innerHTML = '';
};
