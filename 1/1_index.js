let numeros = document.querySelector('.numeros');
let mediaNotas = document.querySelector('.mediaNotas');
let paragrafos = document.querySelectorAll('.pNumeros');
let botao = document.querySelector('.button')
let msgNumero = document.querySelector('.msgNumero')
let mostraNum = document.querySelector('.mostraNum')
let btnTentar = document.querySelector('.tentar')

let numArray = [];



function addNumero (){

  let valorInput = numeros.value;

  if( (valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {
    numArray.push(parseInt(valorInput));
    

    switch (numArray.length <= 5) {

      case numArray.length === 0: msgNumero.textContent = 'Por favor digite seu primeiro número!';

      case numArray.length === 1: msgNumero.textContent = 'Por favor digite seu segundo número!';
      break;

      case numArray.length === 2: msgNumero.textContent = 'Por favor digite seu terceiro número!';
      break;

      case numArray.length ===  3: msgNumero.textContent = 'Por favor digite seu Quarto número!';
      break;

      case numArray.length === 4: msgNumero.textContent = 'Por favor digite seu Quinto número!';
      break;

      default: msgNumero.textContent = 'Vamos ver a sua média?!'
      break;
    }

     function mostraNaTela (num){
      mostraNum.textContent =  num;
     }

    let mostrarNumerosDigitados = numArray.forEach(mostraNaTela);

    
    
     if (numArray.length === 5) {
        let total = 0
        function somar (item){
          total += item;
          return total;
        }

        numArray.forEach(somar);
        console.log(total);

        let mediaCinco = total / 5
      
          mediaNotas.value = mediaCinco;

    }
    console.log(numArray) 
    
  }

  numeros.value = '';

}


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
  mediaNotas.value = '';
  focar(numeros)
}

  function focar(texto){
    texto.style.background ='#eee'
  }

  function desfocar(texto){
    texto.style.background = false;
  }