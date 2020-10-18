let jogador, jogadorVencedor = null;
let jogadorAtual = document.querySelector('#jogador-selecionado');
let vencedorAtual = document.querySelector('#vencedor')
const botaoReiniciarJogo = document.querySelector('#reiniciar');


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
  quemVenceu();
}

function quemVenceu() {
  if (checarSeCombina(quadrado1, quadrado2, quadrado3)) {
    destacaCombinados(quadrado1, quadrado2, quadrado3);
    destacaVencedor(quadrado1);
    return;
  }

  if (checarSeCombina(quadrado4, quadrado5, quadrado6)) {
      destacaCombinados(quadrado4, quadrado5, quadrado6);
      destacaVencedor(quadrado4);
      return;
  }

  if (checarSeCombina(quadrado7, quadrado8, quadrado9)) {
      destacaCombinados(quadrado7, quadrado8, quadrado9);
      destacaVencedor(quadrado7);
      return;
  }

  if (checarSeCombina(quadrado1, quadrado4, quadrado7)) {
      destacaCombinados(quadrado1, quadrado4, quadrado7);
      destacaVencedor(quadrado1);
      return;
  }

  if (checarSeCombina(quadrado2, quadrado5, quadrado8)) {
      destacaCombinados(quadrado2, quadrado5, quadrado8);
      destacaVencedor(quadrado2);
      return;
  }

  if (checarSeCombina(quadrado3, quadrado6, quadrado9)) {
      destacaCombinados(quadrado3, quadrado6, quadrado9);
      destacaVencedor(quadrado3);
      return;
  }

  if (checarSeCombina(quadrado1, quadrado5, quadrado9)) {
      destacaCombinados(quadrado1, quadrado5, quadrado9);
      destacaVencedor(quadrado1);
      return;
  }

  if (checarSeCombina(quadrado3, quadrado5, quadrado7)) {
      destacaCombinados(quadrado3, quadrado5, quadrado7);
      destacaVencedor(quadrado3);
      return;
  }
}

function checarSeCombina( quadradoA, quadradoB, quadradoC) {
  let combinamEntreSi = false;
  if (quadradoA.innerHTML !== '-' && quadradoA.innerHTML === quadradoB.innerHTML && quadradoB.innerHTML === quadradoC.innerHTML) {
    combinamEntreSi = true;
  }
  return combinamEntreSi;
}

function destacaVencedor(quadrado) {
  jogadorVencedor = quadrado.innerHTML;
  vencedorAtual.innerHTML = jogadorVencedor;
}

function destacaCombinados(quadradoA, quadradoB, quadradoC) {
  quadradoA.style.background = '#0f0';
  quadradoB.style.background = '#0f0';
  quadradoC.style.background = '#0f0';
}

function reiniciaJogo() {
 
  for (let pos = 1; pos <= 9; pos += 1) {
      let quadrado = document.querySelector(`#q${pos}`);
      quadrado.style.background = '#eee';
      quadrado.style.color = '#eee';
      quadrado.innerHTML = '-';
  }
  vencedorAtual.innerHTML = '';
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