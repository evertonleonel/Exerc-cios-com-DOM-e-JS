const numeros = document.querySelector('.numeros');
const mediaNotas = document.querySelector('.mediaNotas');
const paragrafos = document.querySelectorAll('.pNumeros');
const botao = document.querySelector('.button');
const msgNumero = document.querySelector('.msgNumero');
const mostraNum = document.querySelector('.mostraNum');
const numerosDigitados = document.querySelector('.todosNumerosDigitados');
const btnTentar = document.querySelector('.tentar');

const numArray = [];

function addNumero(){
  const valorInput = numeros.value;

  if( numArray.length >= 5 ) {
    console.log('Você pode informar apenas 5 números.')
    return;
  }

  if( valorInput == "" ) return;
  if( valorInput == null ) return;
  if( valorInput == undefined ) return;

  numArray.push(parseInt(valorInput));

  switch (numArray.length) {
    case 0:
      msgNumero.textContent = 'Por favor digite seu primeiro número!';
      break;

    case 1:
      msgNumero.textContent = 'Por favor digite seu segundo número!';
      break;

    case 2:
      msgNumero.textContent = 'Por favor digite seu terceiro número!';
      break;

    case 3:
      msgNumero.textContent = 'Por favor digite seu Quarto número!';
      break;

    case 4:
      msgNumero.textContent = 'Por favor digite seu Quinto número!';
      break;

    default: msgNumero.textContent = 'Vamos ver a sua média?!'
  }

  numerosDigitados.innerHTML = '';

  numArray.forEach(function(numeros){
    numerosDigitados.innerHTML += numeros + ' ';
  })

  function mostraNaTela (num){
    mostraNum.textContent = num;
  }

  numArray.forEach(mostraNaTela);

  if (numArray.length === 5) {
    let total = 0

    function somar (item){
      total += item;
      return total;
    }

    numArray.forEach(somar);
    console.log(total);

    let mediaCinco = total / 5;

    mediaNotas.value = mediaCinco;
  }

  console.log(numArray)

  numeros.value = '';
}

botao.addEventListener('click', addNumero);

numeros.addEventListener('keyup', function(e){
  //Se teclou ENTER (13)
  if(e.keyCode === 13){
    e.preventDefault(); //Impede qualquer cagada do enter
    addNumero();
  }
})

btnTentar.addEventListener('click', resetar)

function resetar(){
  numArray = [];
  numeros.value = '';
  mediaNotas.value = '';
  focar(numeros)
}

function focar(texto){
  texto.style.background ='#eee'
}

function desfocar(texto){
  texto.style.background = false;
}
