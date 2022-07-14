const array = document.querySelector('.array');
const arrayDecrescente = document.querySelector('.arrayDecrescente');

const numbers =  [5, 7, 1, 8, 9];
const numberDecrescente = numbers;

array.textContent = numbers;
arrayDecrescente.textContent = numberDecrescente.sort((a,b) => b-a);;

