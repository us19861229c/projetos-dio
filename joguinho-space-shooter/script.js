const suaNave = document.querySelector('.heroi-alien');
const palcoJogo = document.querySelector('#area-principal-jogo');
const inimigosImg = ['./img/monster-1.png', './img/monster-2.png', './img/monster-3.png'];

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
    let inimigos = document.querySelectorAll('.inimigo');
    
    inimigos.forEach( inimigo => {
      if(checarColisaoLaser(laser, inimigo)) {
        inimigo.src= './img/explosion.png';
        inimigo.classList.remove('inimigo');
        inimigo.classList.add('inimigo-abatido');
      }
    })

    if(eixoHorizontalPosicionamento === 340) {
      laser.remove();
    } else {
      laser.style.left = `${eixoHorizontalPosicionamento + 8}px`
    }
  }, 10)
}

// função para criar inimigos aleatórios 
function criarInimigos() {
  let novoInimigo = document.createElement('img');
  let inimigoCaminhoImagem = inimigosImg[Math.floor(Math.random()* inimigosImg.length)];
  novoInimigo.src = inimigoCaminhoImagem;
  novoInimigo.classList.add('inimigo');
  novoInimigo.classList.add('inimigo-transito');
  novoInimigo.style.left = '370px';
  novoInimigo.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
  palcoJogo.appendChild(novoInimigo);
  movimentoInimigo(novoInimigo);
}

// função para movimentar os inimigos
function movimentoInimigo(inimigo) {
  let intervaloDeInimigos = setInterval(() => {
    let eixoHorizontalPosicionamento = parseInt(window.getComputedStyle(inimigo).getPropertyValue('left'));
    if(eixoHorizontalPosicionamento <= 50) {
      if(Array.from(inimigo.classList).includes('inimigo-abatido')) {
        inimigo.remove();
      } else {
        fimDeJogo();
      }
    } else {
      inimigo.style.left = `${eixoHorizontalPosicionamento - 4}px`
    }
  }, 30)
}

//função de colisão
function checarColisaoLaser(laser, inimigo) {
  let laserPosicionamentoTopo = parseInt(laser.style.top);
  let laserPosicionamentoEsquerda = parseInt(laser.style.left);
  let laserAlcance = laserPosicionamentoTopo - 20; 


  let inimigoPosicionamentoTopo = parseInt(inimigo.style.top);
  let inimigoPosicionamentoEsquerda = parseInt(inimigo.style.left);
  let inimigoAlcance = inimigoPosicionamentoTopo - 30; 

  if(laserPosicionamentoEsquerda != 340 && laserPosicionamentoEsquerda + 40 >= inimigoPosicionamentoEsquerda) {
    if (laserPosicionamentoTopo <= inimigoPosicionamentoTopo && laserAlcance >= inimigoAlcance) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

window.addEventListener('keydown', naveVoadora);
criarInimigos();