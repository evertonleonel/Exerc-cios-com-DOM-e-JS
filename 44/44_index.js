
let contador = document.querySelector('.contador');

let contar = 0;

function somar(){
  ++n
}

setInterval(() => {
  
  contador.innerHTML = contar 
  ++contar;
  
}, 1000);


// var n = 0;

// function somaUm (){
// console.log('n', ++n);

// // parando o intervalo
// if (n >=5 ){
//     clearInterval(intervalo)
// }
// }

// var intervalo = setInterval( somaUm, 1000);
// console.log(intervalo)


// // colocando na div com um time maior pra mostrar o single thread


// var str = '';
// var div = document.querySelector('div')

// var timeoutTeste = setTimeout( function(){
    
//     for ( var i = 0 ; i < 100 ; i++){
//         str += 'i: ' + i + '--';
//         div.textContent += str;
//     }

// },3000);