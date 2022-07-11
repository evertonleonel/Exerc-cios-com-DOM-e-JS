const data = document.getElementById('data');
const dia = document.querySelector('.dia');
const mes = document.querySelector('.mes');
const ano = document.querySelector('.ano');

const dataSplitada = data.value.split('-')

dataSplitada.reverse();

dia.innerHTML += ' ' + dataSplitada[0];
mes.innerHTML += ' ' + dataSplitada[1];
ano.innerHTML += ' ' + dataSplitada[2];



