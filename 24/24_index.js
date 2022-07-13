const verde = document.querySelector('.verde')
const rubro = document.querySelector('.rubro')
let body = document.querySelector('body')


rubro.addEventListener('click', () => {
  body.style.backgroundColor = '#c22'
})

verde.addEventListener('click', () => {
  body.style.backgroundColor = '#4c4'
})
