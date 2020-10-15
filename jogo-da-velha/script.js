let jogador = null;
let jogadorAtual = document.querySelector('#jogador-selecionado') ;
const botaoReiniciarJogo = document.querySelector('#reiniciar')

jogadorXouO('X')

function jogadorXouO(valor) {
  jogador = valor
  jogadorAtual.innerHTML = jogador; 
}

const quadrado1 = document.querySelector('#q1');
const quadrado2 = document.querySelector('#q2');
const quadrado3 = document.querySelector('#q3');
const quadrado4 = document.querySelector('#q4');
const quadrado5 = document.querySelector('#q5');
const quadrado6 = document.querySelector('#q6');
const quadrado7 = document.querySelector('#q7');
const quadrado8 = document.querySelector('#q8');
const quadrado9 = document.querySelector('#q9');

function escolherQuadrado(id) {
  let quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== '-') {
    alert('esse quadrado já foi escolhido!')
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';

  if(jogador === 'X') {
    jogador = "O";
  } else {
    jogador = "X";
  }

  jogadorXouO(jogador);
}

function reiniciaJogo() {

  for (let pos = 1; pos <= 9; pos += 1) {
      let quadrado = document.querySelector(`#q${pos}`);
      quadrado.style.background = '#eee';
      quadrado.style.color = '#eee';
      quadrado.innerHTML = '-';
  }
  jogadorXouO('X');
}

quadrado1.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado2.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado3.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado4.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado5.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado6.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado7.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado8.onclick = (event) => escolherQuadrado(event.srcElement.id);
quadrado9.onclick = (event) => escolherQuadrado(event.srcElement.id);
botaoReiniciarJogo.onclick = () => reiniciaJogo();