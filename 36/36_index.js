let  array = document.querySelector('.array');

const deuses = ['Aegir', 'Aud', 'Balder'];

array.textContent = deuses;

deuses.forEach( (item) => alert (item + '...forEach') );

for ( let nomes of deuses){
  alert (nomes + '...forOf')
}


