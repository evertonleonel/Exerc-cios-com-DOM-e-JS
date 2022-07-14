const data = document.querySelector('.data');

const dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtual = dataAtual.getDate();

diaAtual = ( diaAtual < 10 ) ? '0' +  diaAtual : diaAtual;
mesAtual = ( mesAtual < 10 ) ? '0' +  mesAtual : mesAtual;

data.innerHTML = `${diaAtual} / ${mesAtual} / ${anoAtual}`;

