const frase = document.querySelector('.frase')
const texto = document.getElementById('😃')
const botao = document.querySelector('.botao')
const botaoReset = document.querySelector('.botaoReset')

let arrayFrases = [];

// let nomes = ["Thiago Carvalho", "Renata Carvalho", "Alexandre Otoni", "Guilherme Otoni de Carvalho"];
// let filtro = nomes.filter(item => item.includes("Carvalho"));
// console.log(filtro);



botao.addEventListener('click',()=>{
  let fraseValor = frase.value;
  
  if( fraseValor == "" ) return;
  if( fraseValor == null ) return;
  if( fraseValor == undefined ) return;

  arrayFrases.push(fraseValor);
  
  function VerificarAssim(frase){
    return frase.includes('assim');
  }

  let filtrado = arrayFrases.filter(VerificarAssim);
  
  if (filtrado.indexOf('assim')){
    texto.value = ` A frase: " ${filtrado} ", possui a palavra "assim".`;
  } else {
    texto.value = `A palavra 'assim' não foi encontrada :(. Tente novamente!!`
  }
  
})

botaoReset.addEventListener('click', ()=>{
  limparInput();
  frase.focus();
  
})

function limparInput(){
  frase.value ='';
  texto.value ='';
  arrayFrases = [];
  filtrado = [];
}