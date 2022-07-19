const alturaUsuario = document.getElementById('alturaUsuario');
const checkboxMasculino = document.getElementById('masculino');
const totalM = document.getElementById('totalM');
const checkboxFeminino = document.getElementById('feminino');
const totalF = document.getElementById('totalF');
const mostrarAlturaMaior = document.getElementById('mostrarAlturaMaior');
const mostrarAlturaMenor = document.getElementById('mostrarAlturaMenor');
const btnEnviar = document.querySelector('.btnEnviar');
const resultadoAlturaMaior = document.querySelector('.resultadoAlturaMaior')
const resultadoAlturaMenor = document.querySelector('.resultadoAlturaMenor')
const mediaAlturaMulheres = document.getElementById('mediaAlturaMulheres')
const limparCampos = document.querySelector('.limparCampos');

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

    mostrarAlturaMaior.value = maiorAltura;

    let menorAltura = arrayAltura.reduce(function (a,b){
      return Math.min(a,b).toFixed(2);
    })

    mostrarAlturaMenor.value = menorAltura;

    compararAlturas();

    
    function somarAlturaMulheres (total,numero){
      return total + numero / arrayF.length
    }

    const totalMediaAlturaMulheres = arrayF.reduce(somarAlturaMulheres,0);

    mediaAlturaMulheres.value = totalMediaAlturaMulheres

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

    let menorAlturaM = arrayM.reduce(function (a,b){
      return Math.min(a,b).toFixed(2);
      })

    let menorAlturaF = arrayM.reduce(function (a,b){
      return Math.min(a,b).toFixed(2);
      }) 

    if (maiorAlturaM > maiorAlturaF){
      resultadoAlturaMaior.innerHTML = ' A maior altura do grupo é de: Homem';
    }else{
      resultadoAlturaMaior.innerHTML = ' A maior altura do grupo é de: Mulher';
    }

    if (menorAlturaM < menorAlturaF){
      resultadoAlturaMenor.innerHTML = ' A menor altura do grupo é de: Homem';
    } else {
      resultadoAlturaMenor.innerHTML = ' A menor altura do grupo é de: Mulher';
    }

  }

  alturaUsuario.value = '';
  alturaUsuario.focus();
};


limparCampos.addEventListener('click', limparTudo)

function limparTudo(){
  alturaUsuario.value = '';
  alturaUsuario.focus();
  mostrarAlturaMaior.value = '';
  mostrarAlturaMenor.value = '';
  totalM.value = '';
  totalF.value = '';
  mediaAlturaMulheres.value = '';
  checkboxMasculino.checked = false;
  checkboxFeminino.checked = false;
}
