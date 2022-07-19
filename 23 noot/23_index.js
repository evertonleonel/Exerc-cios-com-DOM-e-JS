let cpfPoint = document.getElementById('cpfPoint');
let mostrarCpf = document.getElementById('mostrarCpf');
let button = document.querySelector('.button');
let btnClear = document.querySelector('.btnClear');


cpfPoint.addEventListener("blur", () => {
let value = cpfPoint.value.replace(/\./g, "");

mostrarCpf.value = value;
});

function mascaraCpf ()  {
  let cpf = cpfPoint.value.length;

  if(cpf === 3 || cpf === 7){
    cpf += '.';
  }else if(cpf === 11){
    cpf += '-';
  };

};

btnClear.addEventListener('click', ()=>{
  cpfPoint.value = '';
  mostrarCpf.value = '';
  cpfPoint.focus;
})



