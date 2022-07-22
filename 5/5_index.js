const alturaUsuario = document.getElementById('alturaUsuario');
const checkboxMasculino = document.getElementById('masculino');
const totalM = document.getElementById('totalM');
const checkboxFeminino = document.getElementById('feminino');
const totalF = document.getElementById('totalF');
const mostrarAltura = document.getElementById('mostrarAltura');
const btnEnviar = document.querySelector('.btnEnviar');
const btnLimpar = document.querySelector('.btnLimpar');
const resultadoAltura = document.querySelector('.resultadoAltura')

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

let qtdMasculinho = 0;
let qtdFeminino = 0;

const arrayM = [];
const arrayF = [];

function adicionarInformacoes (){
  let altura = alturaUsuario.value;
  
  altura = parseFloat(altura);
  
  if (altura === "") return;
  if (altura === null) return;
  if (altura === undefined) return;
  if (typeof altura !== 'number') return;

  arrayAltura.push(altura);

  if (arrayAltura.length === 5) {
    let maiorAltura = arrayAltura.reduce(function (a,b){
    return Math.max(a,b).toFixed(2);
    })
    mostrarAltura.value = maiorAltura;
    compararAlturas();
    console.log(compararAlturas)
  }

  if(checkboxMasculino.checked ){
   arrayM.push(altura)
    qtdMasculinho++;
    totalM.value = qtdMasculinho;
   
  }else if (checkboxFeminino.checked){
    arrayF.push(altura)
    qtdFeminino++;
    totalF.value = qtdFeminino;
    
  }

  function compararAlturas (){
   
    let maiorAlturaM = arrayM.reduce(function (a,b){
      return Math.max(a,b).toFixed(2);
      })
     
    let maiorAlturaF = arrayF.reduce(function (a,b){
      return Math.max(a,b).toFixed(2);
      })

    if (maiorAlturaM > maiorAlturaF){
      resultadoAltura.innerHTML = ' A maior altura informada é de: Homem';
    }else{
      resultadoAltura.innerHTML = ' A maior altura informada é de: Mulher';
    }
  }

  alturaUsuario.value = '';
};

btnLimpar.addEventListener('click', () => {
  alturaUsuario.value = '';
  checkboxMasculino.checked = false;
  checkboxFeminino.checked = false;
  mostrarAltura.value = '';
  totalF.value = '';
  totalM.value = '';
})