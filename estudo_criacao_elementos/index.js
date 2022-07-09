let div = document.querySelector('div')
let teste = document.querySelector('h1')
const btnImg = document.querySelector('.btnImg');
const imgs = document.querySelector('.imagens');
// let textos = document.createTextNode('salve')

// teste.appendChild(textos);
// teste.createTextNode('oi')

// div.innerText = 'olá';



function blocos (texto){
  let span = document.createElement('span');
  span.innerText = texto
  return   div.appendChild(span)
}

let coisas = blocos('Como que cria um button??? ;-;');


function criarBotão(){
  let button = document.createElement('button');
  // let textoButton = document.createTextNode('Click Aqui');
  button.innerText = 'Click Aqui';

  // button.appendChild(textoButton);
  button.onclick = function (){
    window.history.go(0);
  }
  div.appendChild(button);
}

criarBotão()


// O createTextNode('texto')  e o appendChild(variavel) concatenam no conteúdo onde forem incluidos.
// O innerContet substitui somente o texto.
// O innerHtml modifica o texto e permite modificar a estrutura HTML.


btnImg.addEventListener('click', function(){
  imgs.src ='/estudo_criacao_elementos/img/d2.jpg' 
})

