const item = document.querySelectorAll('.item');
const container = document.querySelector('.container')

for ( let i = 1; i < item.length; i++){
  item[i].addEventListener('click', escreverMensagem);
};

function escreverMensagem(obj){
  obj.target.innerHTML = `Perdeu o foco!!! `
}

// Remover
// for (let j = 1; j <item.length; j++){
//   item[j].removeEventListener('click', escreverMensagem);
// }
