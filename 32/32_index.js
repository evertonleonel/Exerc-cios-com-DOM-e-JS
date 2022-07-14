const numeros = document.getElementById('numeros');
const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
  let numero = numeros.value;
  
  if (numero >= 10) return;
  if (numero === "") return;
  if (numero === null) return;
  if (numero === undefined) return;

  numero = (parseInt(numero));
  
  let numerosSorteado = () => { return Math.floor(Math.random() * 10)}

  let sorteado = numerosSorteado()
  
  if( numero === sorteado){
    alert(`PARABÉNS VOCÊ ACERTOU O NÚMERO SORTEADOO !!! 🎉✨🎉✨🎉`);
  }

})