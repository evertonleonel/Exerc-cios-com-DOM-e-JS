const nome_input = document.querySelector('.nome_input');
const idade_input = document.querySelector('.idade_input');
const btn_enviar = document.querySelector('.btn_enviar');
const corpo_tabela = document.querySelector('.corpo_tabela');

// let numArray = [];


  // nome_input.addEventListener('keyup',function(e){
  //   //Se teclou ENTER (13)
  //   if(e.keyCode === 13){
  //     e.preventDefault(); //Impede qualquer cagada do enter
      
  //   }
  // })

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
    
    
    
    celula1.innerHTML = nome;
    celula2.innerHTML = idade;
    celula3.innerHTML = (idade >= 18) ? 'Sim' : '';
    celula4.innerHTML = (idade < 18) ?  'Sim' : '';
    
    //pega_Idade()
    //pegar_nome()
 
    //criarTabela();
    console.log(linha.tr[th])
  })
  
 
  
  // totalMaior(celula3)

  // function criarTabela(infoUsuario) {

  //       function Usuario (){

  //         this.nome = nome;
  //         this.idade = idade;

  //         this.mudarNome = function (nomePessoa){
  //           nome = nomePessoa;
  //         } 

  //         this.pegarNome = function (pegaNome){
  //           return nome;
  //         }
  //       }

  //       let novoUsuario = new Usuario;
        
  //       novoUsuario.mudarNome('user_name');
  //       novoUsuario.pegarPegar()

  //       novoUsuario.mudarNome(pegar_nome_e_idade_Users);
  
  //   listarConteudoUsuario(users);
  // }
     

