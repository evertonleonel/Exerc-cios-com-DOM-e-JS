const array = document.querySelector('.array');

const deuses = ['Aegir', 'Aud', 'Balder'];

array.textContent = deuses;

// deuses.map( (item) => alert (item + '...map'));

// Filtrando e retornando todos de uma vez;
deuses.filter((item) => {
 if ( item == 'Aegir' || item == 'Aud'|| item =='Balder')  alert (item);
});

// Filtrando um por um
// let aegir = deuses.filter( (item) => {return item === 'Aegir'});
// let aud = deuses.filter( (item) => {return item === 'Aud'});
// let balder = deuses.filter( (item) => {return item === 'Balder'});

// alert (aegir);
// alert (aud);
// alert (balder);