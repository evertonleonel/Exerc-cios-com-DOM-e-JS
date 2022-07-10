const nome_input = document.querySelector('.nome_input');
const idade_input = document.querySelector('.idade_input');
const btn_enviar = document.querySelector('.btn_enviar');
const corpo_tabela = document.querySelector('.corpo_tabela');
const totalMaiorIdade = document.querySelector('.totalMaiorIdade');
const totalMenorIdade = document.querySelector('.totalMenorIdade');

  function pega_Idade(){
    const user_idade = idade_input.value;
    console.log(user_idade)
  }

  function pegar_nome (){
    const user_name = nome_input.value;
    console.log(user_name)
  }

  btn_enviar.addEventListener('click', function() {

    const nome = nome_input.value;
    const idade = idade_input.value;

    const row = corpo_tabela.insertRow(0);
    const celula1 = row.insertCell(0);
    const celula2 = row.insertCell(1);
    const celula3 = row.insertCell(2);
    const celula4 = row.insertCell(3);

    const tabela = corpo_tabela;
    const qtdLinhas = tabela.rows.length;
    const linha = tabela.insertRow(qtdLinhas);

    console.log(totalMaiorIdade.innerHTML);
    
    const ehMaiorDeIdade = idade >= 18;

    celula1.innerHTML = nome;
    celula2.innerHTML = idade;

    if( ehMaiorDeIdade ) {
      celula3.innerHTML = 'Sim'
      celula4.innerHTML = '-';
      totalMaiorIdade.innerHTML = parseInt(totalMaiorIdade.innerHTML)+1;
    } else {
      celula3.innerHTML = '-'
      celula4.innerHTML = ehMaiorDeIdade ? '-' : 'Sim';
      totalMenorIdade.innerHTML = parseInt(totalMenorIdade.innerHTML)+1;
    }

  })
  
 
  


