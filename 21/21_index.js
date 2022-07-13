const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const button = document.querySelector('button');

button.addEventListener('click', function(){
  let nomes = nome.value;
  let sobrenomes = sobrenome.value;

  if(nomes == '') return;
  if(sobrenomes == '') return;
  if(nomes && sobrenomes == null) return;
  if(nomes && sobrenomes == undefined) return;
  alert(` Olá ${nomes} ${sobrenomes} !`)

  resetarCampos();
  
})

function resetarCampos (){
  nome.value = '';
  sobrenome.value = '';
  nome.focus();
};

