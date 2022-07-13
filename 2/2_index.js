const numeros = document.querySelector('.numeros');
const quadradoNotas = document.querySelector('.quadradoNotas');
const botao = document.querySelector('.button')
const msgNumero = document.querySelector('.msgNumero')
const mostraNum = document.querySelector('.mostraNum')
const btnTentar = document.querySelector('.tentar')
const numerosDigitados = document.querySelector('.todosNumerosDigitados');

let numArray = [];

function addNumero (){
  const valorInput = numeros.value;

  if(numArray.length >= 5) {
    alert('Limite de 5 números! Por favor click em tente novamente');
    return;
  }

  if (valorInput == "") return;
  if (valorInput == null) return;
  if (valorInput == undefined) return;

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

    default:
      msgNumero.textContent = 'Vamos ver o quadrado de cada número?!'
  }

  numerosDigitados.innerHTML = '';

  numArray.forEach(function(numeros){
    numerosDigitados.innerHTML += numeros + ' ';
  })

  function mostrarUmNumeroNaTela (num){
    mostraNum.textContent =  num;
  }

  let mostrarNumerosDigitados = numArray.forEach(mostrarUmNumeroNaTela);

  if (numArray.length === 5) {

    function retornaNumero(numeros){
      return numeros * numeros;
    }

    const quadradoNumeros = numArray.map(retornaNumero);

    quadradoNotas.value = quadradoNumeros;
  }

  console.log(numArray);

  numeros.value = '';
}


botao.addEventListener('click', addNumero);

  numeros.addEventListener('keyup',function(e){
    //Se teclou ENTER (13)
    if(e.keyCode === 13){
        e.preventDefault(); //Impede qualquer cagada do enter
        addNumero();
    }
});


btnTentar.addEventListener('click', resetar )

function resetar(){
  numArray = [];
  numeros.value = '';
  quadradoNotas.value = '';
  focar(numeros)
}

function focar(texto){
  texto.style.background ='#eee'
}

function desfocar(texto){
  texto.style.background = false;
}