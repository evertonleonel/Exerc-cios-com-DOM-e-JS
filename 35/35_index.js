let  array = document.querySelector('.array');
let  tamanhoArray = document.querySelector('.tamanhoArray');

const deuses = ['Aegir', 'Aud', 'Balder'];

function arrayLengh (array){
  return array.length;
}


array.textContent = deuses;
tamanhoArray.textContent = arrayLengh(deuses);