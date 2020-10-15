const dino = document.querySelector('.dino');
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

document.addEventListener('keyup', lidarComTeclasDePulo)