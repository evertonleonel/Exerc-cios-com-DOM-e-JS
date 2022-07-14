let contador = document.querySelector('.contador');
let contar = 0;

contador.innerHTML = contar;

contador.innerHTML.setInterval(() => {
  for (i = 0; i < 1000; i++){
    contador.innerHTML = i;
  }
}, 1000);