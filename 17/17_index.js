const numeros = document.querySelector('.numeros');
const mostrarSoma = document.querySelector('.mostrarSoma');
const botao = document.querySelector('.botao');
const btnResetar = document.querySelector('.btnResetar');

let arrayNumeros = [];

botao.addEventListener('click',adicionarNumeros);

function adicionarNumeros(){
  let numerosDigitados = numeros.value;
  let somaNumPares = 0;
  
  if(arrayNumeros.length >= 10) {
    alert('Limite de 10 números! Por favor click em "tentar novamente"');
    return;
  }

  if ( numerosDigitados == '' ) return;
  if ( numerosDigitados == null ) return;
  if ( numerosDigitados == undefined ) return;

  numerosDigitados = parseInt(numerosDigitados);

  arrayNumeros.push(numerosDigitados);

  function retornaNumerosPares(arrayNum){
    let pares = [];
    
    for( i = 0; i <= arrayNum.length; i++){
      if( arrayNum[i] % 2 == 0){
        pares.push(arrayNum[i]);
      }
    }
    return pares;
  }

  let arrayNumPares = retornaNumerosPares(arrayNumeros);

  let resultado = arrayNumPares.reduce((a, b) =>  a +b);

  mostrarSoma.value = resultado;

  numeros.value ='';
  focar(numeros);
};

btnResetar.addEventListener('click', resetar)

function resetar(){
  arrayNumeros = [];
  numeros.value = '';
  mostrarSoma.value = '';
  focar(numeros);
}

function focar(input){
  input.focus();
}

