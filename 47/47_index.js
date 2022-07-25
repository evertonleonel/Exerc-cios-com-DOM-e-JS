const nome = document.getElementById('nome');
const poder = document.getElementById('poder');
const botao = document.getElementById('botao');
const lista = document.querySelector('.lista');
const limpar = document.querySelector('.limpar');

const deuses = [
  { name: 'Aegir', power: 10 },
  { name: 'Aud', power: 5 },
  { name: 'Balder', power: 7 },
  { name: 'Bragi', power: 4 },
  { name: 'Búri', power: 9 },
  { name: 'Dag', power: 10 },
  { name: 'Dellingr', power: 3 }
];

const novosDeuses = [];

botao.addEventListener('click', () => {
  const name = nome.value;
  const power = parseInt(poder.value);
  const obj = {};

  if (name === '') return;
  if (name === null) return;
  if (name === undefined) return;

  obj['name'] = name;
  obj['power'] = power;

  deuses.push(obj);
  const novos = deuses.map(itens => {
    return `deus:${itens.name} , power:${itens.power}`
  })

  lista.innerHTML = '';

  novos.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    li.classList.add('lista', 'estilo')
    lista.appendChild(li);
  });

  nome.value = '';
  poder.value = '';
  nome.focus();
});

limpar.addEventListener('click', () => {
  limparLista()
});

function limparLista() {
  nome.value = '';
  poder.value = '';
  nome.focus()
  lista.innerHTML = '';
};
