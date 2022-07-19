const idade = document.getElementById('idade');
const chk_otimo = document.getElementById('otimo');
const chk_bom = document.getElementById('bom');
const chk_regular = document.getElementById('regular');
const mediaOtimo = document.getElementById('mediaOtimo');
const qtdRegular = document.getElementById('qtdRegular');
const porcemBom = document.getElementById('porcemBom');
const btnAvaliar = document.getElementById('btnAvaliar');

const arrayIdade = [];
const arrayIdadeOtimo = [];
const arrayBom = [];

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


idade.addEventListener('uppress', (e)=> {
  const keyCode = (e.keyCode ? e.keyCode : e.wich);

  if(keyCode >= 65 && keyCode <= 90){
    e.preventDefault;
  }else{
    console.log(e.keyCode,'e.keyCode')
  }
})

// btnAvaliar.addEventListener('click', ()=>{
//   let idades = idade.value;
  
//   idades = Number(idades);
//   console.log( typeof idades);
  
//   if (idades === "") return;
//   if (idades === null) return;
//   if (idades === undefined) return;
//   if (idades === 'string') return;

// });
