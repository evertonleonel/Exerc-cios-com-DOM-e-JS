const nomeInput = document.getElementById('nomeInput');
const botao = document.getElementById('botao');
const listaInput = document.querySelector('.listaInput');

const listaDeuses = [ {name:'Aegir', power:10}, {name:'Aud', power: 5} ,{name:'Balder', power:7},
                   {name:'Bragi', power:4}, {name:'Búri', power:9},   {name: 'Dag', power:10},
                   {name:'Dellingr', power: 3} ];

botao.addEventListener('click',() =>{
  let nomeDeuses = [];
  const nomes = nomeInput.value;

  if( nomes == '' ) return;
  if( nomes == null ) return;
  if( nomes == undefined ) return;

  
  for ( let deuses of listaDeuses){
    nomeDeuses.push(deuses.name)
  }
  
  // De formar feia
  // const filtradoNomes = listaDeuses.filter( deuses =>  deuses.name.toLowerCase().includes(nomes));
  // listaInput.value = JSON.stringify(filtradoNomes)
  
  // De forma bonita e cheirosa :)
  const nomesFiltrados =  nomeDeuses.filter( (nome) => {return nome.toLowerCase().includes(nomes)});

  listaInput.value = nomesFiltrados

  limparInput(nomeInput);
});
  
function limparInput(input){
  input.value ='';
  input.focus()
};
