const frase = document.querySelector('.frase')
const texto = document.getElementById('😃')
const botao = document.querySelector('.botao')
const botaoReset = document.querySelector('.botaoReset')

let arrayFrases = [];

// let nomes = ["Thiago Carvalho", "Renata Carvalho", "Alexandre Otoni", "Guilherme Otoni de Carvalho"];
// let filtro = nomes.filter(item => item.includes("Carvalho"));
// console.log(filtro);

botao.addEventListener('click',()=>{
  const fraseValor = frase.value;
  
  if( fraseValor == "" ) return;
  if( fraseValor == null ) return;
  if( fraseValor == undefined ) return;
  if( arrayFrases.length > 0 ) arrayFrases.pop();

  arrayFrases.push(fraseValor);
 
  function verificarAssim(frase){
    return frase.includes('assim');
  }

  const filtrado = arrayFrases.filter(verificarAssim);

  if (filtrado.length > 0){
    texto.value = ` A frase: " ${filtrado} ", possui a palavra "assim".`;
  } else {
    texto.value = `A palavra 'assim' não foi encontrada :(. Tente novamente!!`
  }
  
})

//botao.addEventListener('click',()=>{
//  let novoTexto = '';
//  const fraseValor = frase.value;
//  
//  if( fraseValor == "" ) return;
//  if( fraseValor == null ) return;
//  if( fraseValor == undefined ) return;
//
//  if (fraseValor.includes('assim')){
//    novoTexto = ` A frase: " ${fraseValor} ", possui a palavra "assim".`;
//  } else {
//    novoTexto = `A palavra 'assim' não foi encontrada :(. Tente novamente!!`
//  }
//
//  texto.value = novoTexto;
//})

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