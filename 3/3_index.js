const numeros = document.querySelector('.numeros');
const maiorNotas = document.querySelector('.maiorNotas');
const botao = document.querySelector('.button');
const msgNumero = document.querySelector('.msgNumero');
const mostraNum = document.querySelector('.mostraNum');
const btnTentar = document.querySelector('.tentar');
const limiteNumeros = document.querySelector('.limiteNumeros');
const numerosDigitados = document.querySelector('.todosNumerosDigitados');

let numArray = [];

function addNumero (){
  let valorInput = numeros.value;

  if( numArray.length >= 5 ) {
    limiteNumeros.innerHTML = 'Você pode informar apenas 5 números. Tente Novamente!';
    return;
  }

  if ( valorInput === "" ) return;
  if (valorInput === null ) return;
  if (valorInput === undefined) return;

  numArray.push(parseInt(valorInput));

  switch (numArray.length) {
    case 0:
      msgNumero.textContent = 'Digite o primeiro Número?';
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

    default: msgNumero.textContent = 'Vamos ver qual é o maior número?!';
  }

  numerosDigitados.innerHTML = '';

  numArray.forEach(function(numeros){
    numerosDigitados.innerHTML += numeros + ' ';
  })

  function mostrar_na_Tela_1_numero (num){
    mostraNum.textContent =  num;
  }

  numArray.forEach(mostrar_na_Tela_1_numero);

  if (numArray.length === 5) {
    let maior = numArray.reduce(function (a,b){
    return Math.max(a,b);
    })

    maiorNotas.value = maior;
  }

  console.log(numArray);

  numeros.value = '';
};

botao.addEventListener('click', addNumero)

numeros.addEventListener('keyup',function(e){
//Se teclou ENTER (13)
if(e.keyCode === 13){
e.preventDefault(); //Impede qualquer cagada do enter
addNumero();
}
})

btnTentar.addEventListener('click', resetar )

function resetar(){
numArray = [];
numeros.value = '';
maiorNotas.value = '';
limiteNumeros.innerHTML = '';
focar(numeros)
}

function focar(texto){
texto.style.background ='#eee'
}

function desfocar(texto){
texto.style.background = false;
}