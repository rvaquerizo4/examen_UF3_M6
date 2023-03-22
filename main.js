import {mover, canvas, context, graella, alçadaPala, maximPalaY, paddleSpeed, velocitatPilota, palaEsquerra, palaDreta, pilota, collides} from './modules/pong.js';


export default function loop() {
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);
  
  
    if (palaEsquerra.y < graella) {
      palaEsquerra.y = graella;
    }
    else if (palaEsquerra.y > maximPalaY) {
      palaEsquerra.y = maximPalaY;
    }
  
    if (palaDreta.y < graella) {
      palaDreta.y = graella;
    }
    else if (palaDreta.y > maximPalaY) {
      palaDreta.y = maximPalaY;
    }
  
    context.fillStyle = 'white';
    context.fillRect(palaEsquerra.x, palaEsquerra.y, palaEsquerra.amplada, palaEsquerra.alçada);
    context.fillRect(palaDreta.x, palaDreta.y, palaDreta.amplada, palaDreta.alçada);
  
    pilota.x += pilota.dx;
    pilota.y += pilota.dy;
  
    if (pilota.y < graella) {
      pilota.y = graella;
      pilota.dy *= -1;
    }
    else if (pilota.y + graella > canvas.height - graella) {
      pilota.y = canvas.height - graella * 2;
      pilota.dy *= -1;
    }
  
    if ( (pilota.x < 0 || pilota.x > canvas.width) && !pilota.reset) {
      pilota.reset = true;
  
      setTimeout(() => {
        pilota.reset = false;
        pilota.x = canvas.width / 2;
        pilota.y = canvas.height / 2;
      }, 400);
    }
  
    if (collides(pilota, palaEsquerra)) {
      pilota.dx *= -1;
  
      pilota.x = palaEsquerra.x + palaEsquerra.amplada;
    }
    else if (collides(pilota, palaDreta)) {
      pilota.dx *= -1;
  
      pilota.x = palaDreta.x - pilota.amplada;
    }
  
    context.fillRect(pilota.x, pilota.y, pilota.amplada, pilota.alçada);
  
    context.fillStyle = 'lightgrey';
    context.fillRect(0, 0, canvas.width, graella);
    context.fillRect(0, canvas.height - graella, canvas.width, canvas.height);
  
    for (let i = graella; i < canvas.height - graella; i += graella * 2) {
      context.fillRect(canvas.width / 2 - graella / 2, i, graella, graella);
    }

    mover();

    //Mover con scroll no funciona, por eso lo comento
    // moverScroll();


    

  }
// window.addEventListener("scroll", moverScroll);
document.addEventListener("mousemove", mover);
requestAnimationFrame(loop);