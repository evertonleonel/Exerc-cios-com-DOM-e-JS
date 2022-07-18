const selecionarOrdem = document.getElementById('selecionarOrdem');
const listaInput = document.querySelector('.listaInput');
const p = document.querySelector('.p');

function ListarDeuses (){

  this.lista = [  {name:'Aegir', power:10}, {name:'Aud', power: 5} ,{name:'Balder', power:7},
                  {name:'Bragi', power:4}, {name:'Búri', power:9},   {name: 'Dag', power:10},
                  {name:'Dellingr', power: 3} ];                  
}

 function menorParaMaior(a,b) {
    if(a.power < b.power) return -1;
    if(a.power > b.power) return 1;
    return 0;
  };

function maiorParaMenor(a,b) {
  if(a.power > b.power) return -1;
  if(a.power < b.power) return  1;
  return 0;
};

const listaCrescente = new ListarDeuses();
listaCrescente.lista.sort(menorParaMaior);

const novaListaCrescente = listaCrescente.lista.map((itens) =>{
  return itens.name +  ' poder:' +  itens.power + " ";
});

//Com For OF  = muito klanke ;x
// for (let itens of listaCrescente.lista){
//   novosItens += itens.name + ' power: ' + itens.power +'\n'
//   console.log(novosItens)
// }

const listaDecrescente = new ListarDeuses();
listaDecrescente.lista.sort(maiorParaMenor);

const novaListaDecrescente = listaDecrescente.lista.map((itens) =>{
  return itens.name +  ' poder:' +  itens.power + " "
});

function selecionou(){
  const selectOrder = selecionarOrdem.value

  if (selectOrder == 'select'){
    p.innerHTML = '';
  }else if (selectOrder == 'crescente'){
    p.innerHTML =  novaListaCrescente;
  }else if (selectOrder == 'decrescente'){
    p.innerHTML = novaListaDecrescente;
  }
}
