const cartas = document.querySelectorAll('.carta');
let cartaVirada = false;
let primeiraCartaVirada, segundaCartaVirada; 


function virarCarta() {
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
}

function desvirarCartas() {
  setTimeout(() => {
    primeiraCartaVirada.classList.remove('virar');
    segundaCartaVirada.classList.remove('virar');
  }, 1000);
}

cartas.forEach( carta => carta.addEventListener('click', virarCarta))