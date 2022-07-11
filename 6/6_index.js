const nomes = document.querySelector('.nomes');
const invertido = document.querySelector('.invertido');
const botao = document.querySelector('.botao')

const arrayNome = [];

botao.addEventListener('click', function enviar(){
    const nome = nomes.value;

    if( nome == '' ) return;
    if( nome == null ) return;
    if( nome == undefined ) return;

    console.log('antes do split', nome)
    const nomesSplit = nome.split(',');
    console.log('depois do split', nomesSplit)

    nomesSplit.forEach(novoNome => {
        arrayNome.push(novoNome.trim());
    })

    arrayNome.reverse()
    invertido.value = '';

    arrayNome.forEach(value => {
        invertido.value += value + '\n'
    })

    arrayNome.reverse();

     nomes.value= "";
});
