let cpfPoint = document.getElementById('cpfPoint');
let mostrarCpf = document.getElementById('mostrarCpf');
let button = document.querySelector('.button');
let btnClear = document.querySelector('.btnClear');

cpfPoint.addEventListener("blur", () => {
  // mascaraCpf();
});

function mascaraCpf()  {
  const tamanhoCpf = cpfPoint.value.length;
  let novoCpf = cpfPoint.value;

  switch(tamanhoCpf){
    case 3:
      novoCpf += '.';
      break;
    case 7:
      novoCpf += '.';
      break;
    case 11:
      novoCpf += '-';
      break;
  }

  cpfPoint.value = novoCpf;
};

// btnClear.addEventListener('click', ()=>{
//   cpfPoint.value = '';
//   mostrarCpf.value = '';
//   cpfPoint.focus;
// })
