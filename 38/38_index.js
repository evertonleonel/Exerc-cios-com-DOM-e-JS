const antigos = document.querySelector('.antigos');
const novos = document.querySelector('.novos');
const todos = document.querySelector('.todos');

const deusesAntigos = ['Aegir', 'Aud', 'Balder'];
const deusesNovos = ['Loki', 'Odin', 'Frey'];
const todosDeuses = deusesAntigos.concat(deusesNovos);

antigos.textContent = deusesAntigos;
novos.textContent = deusesNovos;
todos.textContent = todosDeuses;

todosDeuses.forEach((item) => alert(item));
