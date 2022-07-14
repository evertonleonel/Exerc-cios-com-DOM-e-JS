const array = document.querySelector('.array');
const arrayCrescente = document.querySelector('.arrayCrescente');

const numbers =  [5, 7, 1, 8, 9];
const numberCrescente = numbers;

array.textContent = numbers;
arrayCrescente.textContent = numberCrescente.sort((a,b) => a-b);;

