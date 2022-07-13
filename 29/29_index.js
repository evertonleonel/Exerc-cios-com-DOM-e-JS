const repeticao = document.getElementById('repeticao');
const repeticao2 = document.getElementById('repeticao2');

let contador = 0;
let qtdContar= 20;

function loop10x(){
  for (let i = 0; i <=10; i++ ){
    repeticao.innerHTML += [i] + '<br>'
  }
};

loop10x();

while (contador <= qtdContar){
  if (contador % 2 === 0){
    repeticao.innerHTML += [contador] + ', '
  }
   
  contador++;
}




