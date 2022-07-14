const mesNum = document.querySelector('.mesNum');
const mesLetra = document.querySelector('.mesLetra');
const proxMesNum = document.querySelector('.proxMesNum');
const proxMesLetra = document.querySelector('.proxMesLetra');

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
               'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const data = new Date();

let mesAtual = data.getMonth();
let mesAtt = data.getMonth() + 1;
let mesSub= data.getMonth() + 2;

let mesAtualNome = meses[mesAtual];
let mesSubName = meses[mesAtt];

mesAtt = ( mesAtt < 10 ) ? '0' +  mesAtt : mesAtt;
mesSub = ( mesSub < 10 ) ? '0' +  mesSub : mesSub;

//Mês atual
mesNum.innerHTML =  ` Mês ${mesAtt} -`;
mesLetra.innerHTML = mesAtualNome;

//Mês Subsequente
proxMesNum.innerHTML = `Mês ${mesSub} - ` ;
proxMesLetra.innerHTML = mesSubName ;
