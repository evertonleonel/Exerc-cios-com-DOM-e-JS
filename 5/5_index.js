const alturaUsuario = document.getElementById('alturaUsuario');
const checkboxMasculino = document.getElementById('masculino');
const checkboxFeminino = document.getElementById('feminino');
const mostrarAltura = document.getElementById('mostrarAltura');
const btnEnviar = document.querySelector('.btnEnviar');

let arrayAltura = [];

function checado(ele){
  return ele.checked;
}

checkboxMasculino.addEventListener('click', function(){
  if (checkboxMasculino.checked === true) {
    checkboxFeminino.checked = false;
  } else if (checkboxFeminino.checked = true){
    checkboxMasculino.checked === false;
  }
  habilitarBotao();
});

checkboxFeminino.addEventListener('click', function(){
  if (checkboxFeminino.checked === true) {
    checkboxMasculino.checked = false;
  } else if (checkboxMasculino.checked = true){
    checkboxFeminino.checked === false;
  }
  habilitarBotao();
});

function habilitarBotao(){
  if ( checado(checkboxMasculino) || checado(checkboxFeminino)){
    btnEnviar.disabled = false;
  };
};


btnEnviar.addEventListener('click', adicionarInformacoes);

function adicionarInformacoes (){
  const qtdFeminino = 0;
  const qtdMasculinho = 0;

  let altura = alturaUsuario.value;
  
  altura = parseFloat(altura);
  
  if (altura === "") return;
  if (altura === null) return;
  if (altura === undefined) return;
  if (typeof altura !== 'number') return;

  arrayAltura.push(altura);
  console.log('array',arrayAltura)
  
  if (arrayAltura.length === 5) {
    let maiorAltura = arrayAltura.reduce(function (a,b){
    return Math.max(a,b).toFixed(2);
    })

    mostrarAltura.value = maiorAltura;
  }

  if(checkboxMasculino === true){
    qtdMasculinho + 1;
  }

  console.log(qtdMasculinho)

};

// alturaUsuario.addEventListener('keyup', function(e){
//   if(e.keyCode === 13){
//     if (checkboxMasculino.checked === true || checkboxFeminino.checked === true){
//       adicionarInformacoes();
//       alturaUsuario.focus();
//       alturaUsuario.value = '';
//     }
//   }
// })