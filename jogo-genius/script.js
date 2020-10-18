let ordem = [];
let ordemClicada = [];
let placar = 0;

/* 
  0 - azul
  1 - amarela
  2 - vermelha
  3 - verde
*/

// aqui atribui-se cada div a sua respectiva variável de cor:
const azul = document.querySelector('.azul');
const amarela = document.querySelector('.amarela');
const vermelha = document.querySelector('.vermelha');
const verde = document.querySelector('.verde');


// aqui cria a ordem aleatória das cores que devem ser repetidas pelo usuário:
let sortearOrdem = () => {
  let numeroCor = Math.floor(Math.random() * 4);
  console.log('qual numero da cor (0 a 3):', numeroCor )
  ordem[ordem.length] = numeroCor;
  console.log('qual a ordem:', ordem[ordem.length])
  ordemClicada = [];

  for(let itemCor in ordem) {
    console.log('o que é itemCor:', itemCor)
    let elementoCor = criarElementoCor(ordem[itemCor]);
    console.log('quem é o elementoCor:', elementoCor);
    ativarCor(elementoCor, Number(itemCor) + 1);
  }
}

// aqui a cor sorteada é ativada, a partir das informações de sortearOrdem:
let ativarCor = (divCor, tempo) => {
  console.log('quem é esse tempo antes:', tempo)
  tempo = tempo * 500;
  console.log('quem é esse tempo agora:', tempo)
  setTimeout(() => {
    divCor.classList.add('selecionada')
    console.log('quem é essa divCor:', divCor)
    setTimeout(() => {
      divCor.classList.remove('selecionada')
    }, 250);
  }, tempo - 250);
}

// aqui checa se a divCor clicada é a mesma que foi sorteada aleatoriamente:
let checarCliqueCombinado = () => {
  for(let item in ordemClicada) {
    if(ordemClicada[item] != ordem[item]) {
      perdeu();
      break;
    }
  }
  if(ordemClicada.length == ordem.length) {
    alert(`Pontuação: ${placar}\nVocê acertou! :) \nIniciando próximo nível!`);
    proximoNivel();
  }
}

// aqui é atribuída a classe que indica a cor selecionada ao clicar:
let clicar = (cor) => {
  ordemClicada[ordemClicada.length] = cor;
  criarElementoCor(cor).classList.add('selecionada');

  setTimeout(() => {
    criarElementoCor(cor).classList.remove('selecionada');
    checarCliqueCombinado();
  }, 250)  
}


// aqui a cor é retornada de acordo com a ordem e seu índice:
let criarElementoCor = (cor) => {
  if(cor == 0) {
    return azul;
  } else if (cor == 1) {
    return amarela;
  } else if (cor == 2) {
    return vermelha;
  } else if (cor == 3) {
    return verde;
  }
}

// aqui chama o próximo nível (quando se inicia o jogo, ou quando se pontua e avança):
let proximoNivel = () => {
  placar += 1;
  sortearOrdem();
}

// aqui se o usuário erra o clique e perde, podendo reiniciar o jogo do zero:
let perdeu = () => {
  alert(`Pontuação: ${placar}\nVocê perdeu :(\nClique em Ok para reiniciar`);
  ordem = [];
  ordemClicada = [];

  iniciarJogo();
}


// aqui inicia o jogo:
let iniciarJogo = () => {
  alert('Iniciando novo jogo!')
  placar = 0;

  proximoNivel();
}

// eventos de clique na div: 
azul.onclick = () =>  clicar(0);
amarela.onclick = () => clicar(1);
vermelha.onclick = () => clicar(2);
verde.onclick = () => clicar(3);

// inicia o jogo:
iniciarJogo()
