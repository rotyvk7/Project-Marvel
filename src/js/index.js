/*
OBJETIVO 1 - quando passar o mouse em cima do personage, temos que: 

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

  - retirar a classe selecionado do personagem que está selecionado
*/

//addEventListener seria como botar algo pra ficar "ouvindo" algum evento no HTML
// () => /  serve para dizermos o que vai ser executado após a ação do evento, nesse caso o CLICK

//para adicionar uma classe usamos o classList

//querySelectorALL nos permite fazer uma busca de todos os seletores que tiverem uma caracteristica em comum (uma classe por ex)

const personagens = document.querySelectorAll('.personagem')

//forEach seria 'para cada' e com isso PARA CADA personagem dessa lista, eu quero fazer alguma coisa
personagens.forEach(personagem => {
  personagem.addEventListener('click', () => {

    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === 'ultron') return; 
    


    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagem.classList.add('selecionado')

    /*

  OBJETIVO2 - quando apssar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

  - alterar a imagem do jogador 1
  - alerar o nome do jogador 1
    */

  
    
  const imagemJogador1 = document.getElementById('personagem-jogador-1')
  imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

  const nomeJogador1 = document.getElementById('nome-jogador-1')
  const nomeSelecionado1 = personagem.getAttribute('data-name')


  nomeJogador1.innerHTML = nomeSelecionado1;


  

  })


})
