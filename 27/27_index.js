const ano = document.getElementById('ano');
const resultado = document.getElementById('resultado');
const button = document.querySelector('.button');

const data = new Date;

ano.addEventListener('keyup',() => {
  let anoNascimento =  ano.value;
  let anoAtual = data.getFullYear();

  if (anoNascimento.length > 4) return;
  if (anoNascimento.length < 4) return;
  if (anoNascimento === '') return;
  if (anoNascimento === null) return;
  if (anoNascimento === undefined) return;
 
  anoNascimento = parseInt(anoNascimento);

  function idadeAtual(anoNascimento){
    return anoAtual - anoNascimento;
  }

  const idadePessoa = idadeAtual(anoNascimento);
  
  function verificaMaiorIdade(idade){
    if (idade < 18){
      return 'Menor de idade'
    } else {
      return 'Maior de idade'
    }
  }

  resultado.innerHTML = verificaMaiorIdade(idadePessoa);

});

button.addEventListener('click', () => {
  ano.value = '';
  resultado.innerHTML = '';
  ano.focus();
})


