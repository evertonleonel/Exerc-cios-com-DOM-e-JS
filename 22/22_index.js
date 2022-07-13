const cpf = document.getElementById('cpf');
const mostrarCpf = document.getElementById('mostrarCpf');
const button = document.querySelector('.button');
const btnClear = document.querySelector('.btnClear');


button.addEventListener('click', function(){
  let cpfValor = cpf.value;

  if (cpfValor.length > 11) {
    alert('Apenas 11 Digitos!');
  }

  if(cpfValor == '') return;
  if(cpfValor == null) return;
  if(cpfValor == undefined) return;
  
  let novoCPF = cpfValor.substring(0,3) + '.' + cpfValor.substring(3,6) + '.' + cpfValor.substring(6,9) + '-' + cpfValor.substring(9,11);
  
  mostrarCpf.value = novoCPF;


})



btnClear.addEventListener('click', function(){
  cpf.value = '';
  mostrarCpf.value = '';
  cpf.focus();

})