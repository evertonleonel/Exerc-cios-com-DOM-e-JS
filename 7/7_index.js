const data = document.getElementById('data');
const dia = document.querySelector('.dia');
const mes = document.querySelector('.mes');
const ano = document.querySelector('.ano');



window.addEventListener('change', () => {
  if(data == undefined) return;

  const dataSplitada = data.value.split('-')

  dataSplitada.reverse();

  dia.innerHTML = 'Dia: ' + dataSplitada[0];
  mes.innerHTML = 'Mês: ' + dataSplitada[1];
  ano.innerHTML = 'Ano: ' + dataSplitada[2];

} )