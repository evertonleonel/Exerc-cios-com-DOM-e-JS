const idade = document.getElementById('idade');
const chk_otimo = document.getElementById('otimo');
const chk_bom = document.getElementById('bom');
const chk_regular = document.getElementById('regular');
const mediaOtimo = document.getElementById('mediaOtimo');
const numRegular = document.getElementById('numRegular');
const porcemBom = document.getElementById('porcemBom');
const btnAvaliar = document.getElementById('btnAvaliar');
const btnLimpar = document.getElementById('btnLimpar');

const arrayIdade = [];
const arrayIdadeOtimo = [];
const arrayBom = [];
let qtdReggular =0;
let qtdBom = 0;

function checado(ele){
  return ele.checked;
};

chk_otimo.addEventListener('click', function(){
  if (checado(chk_otimo)) {
    chk_bom.checked = false;
    chk_regular.checked = false;
  }
  habilitarBotao();
});

chk_bom.addEventListener('click', function(){
  if (checado(chk_bom)) {
    chk_otimo.checked = false;
    chk_regular.checked = false;
  }
  habilitarBotao();
});

chk_regular.addEventListener('click', function(){
  if (checado(chk_regular)) {
    chk_otimo.checked = false;
    chk_bom.checked = false;
  }
  habilitarBotao();
});

function habilitarBotao(){
  if ( checado(chk_otimo) || checado(chk_bom) || checado(chk_regular)){
    btnAvaliar.disabled = false;
  } else {
    btnAvaliar.disabled = true;
  };
};

btnAvaliar.addEventListener('click', ()=>{
  let idades = Number(idade.value);
  
  if (idades === "") return;
  if (idades === null) return;
  if (idades === undefined) return;
  
  console.log(idades, 'entrou idades')

  arrayIdade.push(idades);
  console.log(arrayIdade, 'array de Idade')

  if(checado(chk_otimo)){
    arrayIdadeOtimo.push(idades);
    
   }else if (checado(chk_regular)){
    qtdReggular++;
    
   }else if(checado(chk_bom)){
    qtdBom++;
   }

   function somar (a,b){
    return a + b;
   }

   const totalSomaOtimo = arrayIdadeOtimo.reduce(somar,0);
   const mediaIdadesOtimo = totalSomaOtimo / arrayIdadeOtimo.length;
  
   function porcentagem(qtd){
    return qtd / 15;
   }

   if (arrayIdade.length === 15) {
    const porcentagemBom = porcentagem(qtdBom).toFixed(2);

    porcemBom.value = `${porcentagemBom}%`;

    mediaIdadesOtimo > 0 ? mediaOtimo.value = `${mediaIdadesOtimo.toFixed(1)} anos` :  mediaOtimo.value = 0;

    numRegular.value = qtdReggular;

    alert('Obrigado pela avaliação, confira o resultado!!')
  }

  idade.value ='';
  idade.focus();

});

btnLimpar.addEventListener('click', limparTodosInputs);

function limparTodosInputs(){
  idade.focus();
  idade.value ='';
  porcemBom.value = '';
  mediaOtimo.value = '';
  numRegular.value = '';
  chk_otimo.checked = false;
  chk_bom.checked = false;
  chk_regular.checked = false;
};
