let lista = [0, 1, 4 , 5, 17 , 7, 8, 10, 11 ,12 ,13, 9 ,14, 15];

let i = lista.filter(e => e < 10);

console.log(i)

let l = i.map(e => Math.pow(2, e));

console.log(l)

let listaFinal = l.reduce((e, acumulador) => e + acumulador);

console.log(listaFinal)