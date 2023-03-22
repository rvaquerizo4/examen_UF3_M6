export let canvas = document.getElementById('joc');
export let context = canvas.getContext('2d');
export let graella = 15;
export let alçadaPala = graella * 5; 
export let maximPalaY = canvas.height - graella - alçadaPala;

export var paddleSpeed = 6;
export var velocitatPilota = 5;

export let palaEsquerra = {
  x: graella * 2,
  y: canvas.height / 2 - alçadaPala / 2,
  amplada: graella,
  alçada: alçadaPala,
};

export let palaDreta = {
  x: canvas.width - graella * 3,
  y: canvas.height / 2 - alçadaPala / 2,
  amplada: graella,
  alçada: alçadaPala,
};

export let pilota = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  amplada: graella,
  alçada: graella,

  reset: false,

  dx: velocitatPilota,
  dy: -velocitatPilota
};

export function collides(obj1, obj2) {
  return obj1.x < obj2.x + obj2.amplada &&
         obj1.x + obj1.amplada > obj2.x &&
         obj1.y < obj2.y + obj2.alçada &&
         obj1.y + obj1.alçada > obj2.y;
}




export function mover(e) {
  palaEsquerra = {
      x: graella * 2,
      y: e.clientY,
      amplada: graella,
      alçada: alçadaPala,
    };
  
}


//Mover con scroll no funciona, por eso lo comento

// export function moverScroll() {
//   palaEsquerra = {
//       x: graella * 2,
//       y: window.scrollY,
//       amplada: graella,
//       alçada: alçadaPala,
//       };
// };
  

// window.addEventListener("scroll", moverScroll);

