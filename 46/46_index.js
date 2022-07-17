const nomeInput = document.getElementById('nomeInput');
const botao = document.getElementById('botao');
const listaInput = document.querySelector('.listaNomes');

const listaDeuses = [ {name:'Aegir', power:10}, {name:'Aud', power: 5} ,{name:'Balder', power:7},
                   {name:'Bragi', power:4}, {name:'Búri', power:9},   {name: 'Dag', power:10},
                   {name:'Dellingr', power: 3} ];


botao.addEventListener('click',() =>{
  const nomes = nomeInput.value;

  if( nomes == '' ) return;
  if( nomes == null ) return;
  if( nomes == undefined ) return;

  // const nomesFiltrados = listaDeuses.filter((nomes) => {
  //   return nomes.nome.includes('a')
  // })



  // const filtarNomes = listaDeuses.filter(nomes => {
    
  //   return listaDeuses.includes(nomes.value);
  // })
  // console.log(filtarNomes)

 




  const retornaNomes = listaDeuses.filter(nomes =>  {return listaDeuses.includes('nomes')});
  console.log(retornaNomes, 'nome')  
  


  // for ( let deuses of listaDeuses){
  //   let nomeDeuses = deuses.name;
    
  //   if( nomes == nomeDeuses){
  //     listaNomes.value = nomeDeuses;
      
  //     console.log(listaNomes,'nomes')
      // console.log(listaDeuses, 'nomedeuses')
  //   }
  // };

  // limparInput(nomeInput);
});
  


function limparInput(input){
  input.value ='';
  input.focus()
};
