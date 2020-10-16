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

// função de subida 
function movePraCima() {
  let topoPosicionamento = getComputedStyle(suaNave).getPropertyValue('top');

  if(topoPosicionamento === "50px") {
    return;
  } else {
    let posicionamento = parseInt(topoPosicionamento);
    posicionamento -= 50;
    suaNave.style.top = `${posicionamento}px`;
  }
}

// função de descida 
function movePraBaixo() {
  let topoPosicionamento = getComputedStyle(suaNave).getPropertyValue('top');

  if(topoPosicionamento === "500px") {
    return;
  } else {
    let posicionamento = parseInt(topoPosicionamento);
    posicionamento += 50; // como está descendo , aumenta a distância do topo;
    suaNave.style.top = `${posicionamento}px`;
  }
}

// função de disparo do laser 
function dispararLaser() {
  let laser = criarElementoLaser();
  palcoJogo.appendChild(laser);
  movimentoLaser(laser);
}

function criarElementoLaser() {
  let eixoHorizontalPosicionamento = parseInt(window.getComputedStyle(suaNave).getPropertyValue('left'));
  let eixoVerticalPosicionamento = parseInt(window.getComputedStyle(suaNave).getPropertyValue('top'));
  let novoLaser = document.createElement('img');
  novoLaser.src = './img/shoot.png';
  novoLaser.classList.add('laser');
  novoLaser.style.left = `${eixoHorizontalPosicionamento}px`;
  novoLaser.style.top = `${eixoVerticalPosicionamento - 10}px`;
  return novoLaser
}

function movimentoLaser(laser) {
  let intervaloDeLaser = setInterval(() => {
    let eixoHorizontalPosicionamento = parseInt(laser.style.left);

    if(eixoHorizontalPosicionamento === 340) {
      laser.remove();
    } else {
      laser.style.left = `${eixoHorizontalPosicionamento + 8}px`
    }
  }, 10)
}

window.addEventListener('keydown', naveVoadora)