const parametro1 = document.getElementById('parametro1');
const parametro2 = document.getElementById('parametro2');
const resultado = document.getElementById('resultado');
const botao = document.querySelector('.botao')


botao.addEventListener('click', () => {
  let param1 = parametro1.value;
  let param2 = parametro2.value;
  
  if( param1 == "" ) return;
  if( param2 == "" ) return;
  if( param1 && param2 === null ) return;
  if( param1 && param2 === undefined ) return;
  
  param1 = (parseInt(param1));
  param2 = (parseInt(param2));
  
  let multiplicar = (a,b) => { return a * b};
  
  multiplicar(param1,param2);
  resultado.value = multiplicar(param1, param2);

  resetar();
});

const resetar = () => {
  parametro1.value = '';
  parametro2.value = '';
  parametro1.focus();
};

