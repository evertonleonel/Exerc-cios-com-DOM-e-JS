const numero = document.querySelector('.numero');
const contaNumeros = document.querySelector('.contaNumeros');
const botao = document.querySelector('.botao');

function adicionarNumero (){
  let numeroInput = numero.value;
  // let i = 0;
  let i = numeroInput;
  
  if( numero === '' ) return;
  if( numero === null ) return;
  if( numero === undefined ) return;
  
  numeroInput = parseInt(numeroInput);

  while (i >= 0){
    
    contaNumeros.value =  i + ' ,' + contaNumeros.value;
    i--;
  }
  
}

botao.addEventListener('click', adicionarNumero);

