const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
  let numerosRandom = () => { return Math.floor(Math.random() * 100)}
  
  alert(numerosRandom());
})