const idade = document.getElementById('idade');
const peso = document.getElementById('peso');
const idadeHomens = document.getElementById('idadeHomens');
const pesoMulheres = document.getElementById('pesoMulheres');
const checkboxMasculino = document.getElementById('masculino');
const checkboxFeminino = document.getElementById('feminino');
const totalHomens = document.getElementById('totalHomens');
const totalMulheres = document.getElementById('totalMulheres');
const btnEnviar = document.querySelector('.btnEnviar');
const limparCampos = document.querySelector('.limparCampos');

let arrayPessoas = []
let arrayIdade = [];
let arrayPesos = []

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

let arrayM = [];
let arrayF = [];

function adicionarInformacoes (){
  let idades = idade.value;
  let pesos = peso.value;
  
  idades = parseInt(idades);
  pesos = parseInt(pesos);

  arrayPessoas.push(idades);
  
  if (idades === "") return;
  if (idades === null) return;
  if (idades === undefined) return;
  if (idades == 'string') return;
  
  if(checkboxMasculino.checked ){
    arrayIdade.push(idades);
    arrayM.push(idades)
    qtdMasculinho++;
    totalHomens.value = qtdMasculinho;

  }else if (checkboxFeminino.checked){
    arrayF.push(idades);
    arrayPesos.push(pesos);
    qtdFeminino++;
    totalMulheres.value = qtdFeminino;
  }

  if (arrayPessoas.length === 10) {

    function somarIdadeHomens (total,numero){
      return total + numero / arrayIdade.length
    }

    const totalMediaIdadeHomens = arrayIdade.reduce(somarIdadeHomens,0);
    idadeHomens.value = totalMediaIdadeHomens;

    function somarPesoMulheres (total,numero){
      return total + numero / arrayPesos.length
    }

    const totalMediaPesoMulheres = arrayPesos.reduce(somarPesoMulheres,0);
    pesoMulheres.value = totalMediaPesoMulheres
  }

  idade.value = '';
  peso.value = '';
  idade.focus();
};


limparCampos.addEventListener('click', limparTudo)

function limparTudo(){
  idade.value = '';
  idade.focus();
  peso.value = '';
  
  checkboxMasculino.checked = false;
  checkboxFeminino.checked = false;
  idadeHomens.value = '';
  pesoMulheres.value = '';
  totalHomens.value = '';
  totalMulheres.value = '';
}