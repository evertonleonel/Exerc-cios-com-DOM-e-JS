let cpfPoint = document.getElementById('cpfPoint');
let mostrarCpf = document.getElementById('mostrarCpf');
let button = document.querySelector('.button');
let btnClear = document.querySelector('.btnClear');

cpfPoint.addEventListener("input", () => {
  mascaraCpf();
});

function mascaraCpf()  {

  // let tamanhoCpf = cpfPoint.value.length;
  // let novoCpf = cpfPoint.value;

  if (cpfPoint.value.length === 3){
    cpfPoint.value += '.'
  } else if (cpfPoint.value.length == 8){
    cpfPoint.value += '.';
  } else if (cpfPoint.value.length == 11){
    cpfPoint.value += '-';
  }

  let novoCpf = cpfPoint.value;
  mostrarCpf.value = novoCpf;
}


//   switch(tamanhoCpf){
//     case 3:
//       novoCpf += '.';
//       break;
//     case 7:
//       novoCpf += '.';
//       break;
//     case 11:
//       novoCpf += '-';
//       break;
//   }

//   cpfPoint.value = novoCpf;
// };

btnClear.addEventListener('click', ()=>{
  cpfPoint.value = '';
  mostrarCpf.value = '';
  cpfPoint.focus;
})
