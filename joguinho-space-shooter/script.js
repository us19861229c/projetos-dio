const suaNave = document.querySelector('.heroi-alien');
const palcoJogo = document.querySelector('#area-principal-jogo');

// movimento e tiro da nave
function naveVoadora(event) {
  if(event.key === 'ArrowUp') {
    event.preventDefault();
    movePraCima();
  } else if(event.key === 'ArrowDown') {
    event.preventDefault();
    movePraBaixo();
  } else if (event.key === " ") {
    event.preventDefault();
    dispararLaser();
  }
}
