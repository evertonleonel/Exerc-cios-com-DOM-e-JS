let cpfPoint = document.getElementById('cpfPoint');
let button = document.querySelector('.button');


button.addEventListener('click', function(){
  
  console.log(cpfPoint.value)
})



function mascaraCpf ()  {
  let cpf = cpfPoint.value.length;

  if(cpf === 3 || cpf === 7){
    cpf += '.';
  }else if(cpf === 11){
    cpf += '-';
  };

};



