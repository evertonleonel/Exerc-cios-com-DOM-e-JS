const item = document.querySelectorAll('.item');

const content = '';

for ( let i = 0; i < item.length; i++){
  
  item[i].addEventListener('click', function(e){
    return item[i].innerHTML = `Caixa ${ i + 1} Ativada!!! `
  });
  
};


