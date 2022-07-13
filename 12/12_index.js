const numeros = document.getElementById('numeros');
const msgTexto = document.querySelector('.msgTexto');
const button = document.querySelector('.button');

function adicionarNumero (){
    let numeroInput = numeros.value;
    
    numeroInput = parseInt(numeroInput);
    
    if ( numeroInput === '' ) return;
    if ( numeroInput === null ) return;
    if ( numeroInput === undefined ) return;
    
    if(numeroInput < 10){
      msgTexto.textContent = 'Insuficiente';
    } else if (numeroInput < 14){
      msgTexto.textContent = 'Bom';
    } else {
      msgTexto.textContent = 'Muito Bom';
    };
   
  }

button.addEventListener('click', function(){
  adicionarNumero();
  reset();
});

function reset(){
  numeros.value = '';
  numeros.focus();
}


