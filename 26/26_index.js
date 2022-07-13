const preco = document.getElementById('preco');
const desconto = document.getElementById('desconto');
const real = document.querySelector('.real')

preco.addEventListener('keyup', function(){
  let total = 0;
  
  let valor = preco.value;
 
  total = valor * 0.05;

  desconto.value = total.toFixed(2);

  if(total < 1){
    real.value = 'centavos'
  }else if (total === 1){
    real.value = 'real';
  }else{
    real.value = 'reais';
  }

});