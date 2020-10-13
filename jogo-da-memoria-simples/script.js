const cartas = document.querySelectorAll('.carta');

function virarCarta() {
  this.classList.toggle('virar');
}

cartas.forEach( carta => carta.addEventListener('click', virarCarta))