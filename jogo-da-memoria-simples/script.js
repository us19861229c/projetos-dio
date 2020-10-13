const cartas = document.querySelectorAll('.carta');
let cartaVirada = false;
let primeiraCartaVirada, segundaCartaVirada; 
let travaTabuleiro = false;


function virarCarta() {
  if(travaTabuleiro) return;

  if(this === primeiraCartaVirada) return;

  this.classList.add('virar');
  if(!cartaVirada){
    cartaVirada = true;
    primeiraCartaVirada = this;
    return;
  }

  segundaCartaVirada = this;
  cartaVirada = false;
  checarSeCombina();
}

function checarSeCombina() {
  if(primeiraCartaVirada.dataset.card === segundaCartaVirada.dataset.card) {
    desabilitarCartas();
    return;
  }
  desvirarCartas();
}

function desabilitarCartas() {
  primeiraCartaVirada.removeEventListener('click', virarCarta);
  segundaCartaVirada.removeEventListener('click', virarCarta);

  resetarTabuleiro()
}

function desvirarCartas() {
  travaTabuleiro = true;
  setTimeout(() => {
    primeiraCartaVirada.classList.remove('virar');
    segundaCartaVirada.classList.remove('virar');

    resetarTabuleiro();
  }, 1000);
}

function resetarTabuleiro() {
  [cartaVirada, travaTabuleiro] = [false, false];
  [primeiraCartaVirada, segundaCartaVirada] = [null, null];
}

cartas.forEach( carta => carta.addEventListener('click', virarCarta))