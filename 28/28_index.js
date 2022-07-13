const repeticao = document.getElementById('repeticao');
const frases = ['forEach', ' forEach','forEach', 'forEach','forEach' ];
let contador = 0;
let qtdContar= 10;

function loop1x(){
  for (let i = 0; i < 1; i++ ){
    repeticao.innerHTML = 'Repetição ' +  'loop1'
  }
};

// loop1();

function loop2x(){
  for (let i = 0; i < 2; i++ ){
    repeticao.innerHTML += 'Repetição <br>' 
  }
};

// loop2();

function loop20x(){
  for (let i = 0; i < 20; i++ ){
    repeticao.innerHTML += 'Repetição <br>'
  }
};

// loop20x();

function imprimirMensagem (msg){
  repeticao.innerHTML += msg + '<br>'
}

// frases.forEach(imprimirMensagem);


while (contador < qtdContar){
  repeticao.innerHTML += 'Repetição while' + '<br>'; 
  contador++;
}




