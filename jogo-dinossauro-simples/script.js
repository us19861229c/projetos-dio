const dino = document.querySelector('.dino');
const telaDeFundo = document.querySelector('.tela-fundo');
let taPulando = false;

function lidarComTeclasDePulo({keyCode}) {
 if (keyCode === 32 || keyCode === 38) {
  if(!taPulando) {
    pulo();
  } 
 }
}

function pulo() {
  let posicionamento = 0; 
  taPulando = true;

  let dinoSobe = setInterval(() => {
    // para que o dino não suba muito
    if (posicionamento >= 150) {
      clearInterval(dinoSobe);
      taPulando = false;
      // descer
      let dinoDesce = setInterval(() => {
        // para que o dino não desça demais
        if (posicionamento <= 0) {
          clearInterval(dinoDesce);
        } else {
          posicionamento -= 20;
          dino.style.bottom = posicionamento + "px";
        }
      }, 20)
    } else {
      // subindo
      posicionamento += 20
      dino.style.bottom = posicionamento + "px";
    }
  }, 20)
}

function criarCactos() {
  const cactos = document.createElement('div');
  let cactosPosicionamento = 1000;
  let horaAleatoria = Math.random() * 6000;
  
  cactos.classList.add('cactos');
  cactos.style.left = 1000 + "px";
  telaDeFundo.appendChild(cactos);

  let cactoVemCorrendo = setInterval(() => {
    if (cactosPosicionamento < -60) {
      clearInterval(cactoVemCorrendo);
      telaDeFundo.removeChild(cactos);
    } else {
      cactosPosicionamento -= 10;
      cactos.style.left = cactosPosicionamento + "px";
    }
  }, 20);

  setTimeout(criarCactos, horaAleatoria);
}

criarCactos();

document.addEventListener('keyup', lidarComTeclasDePulo)