// Trocando valores

let a = 'vermelho';
let b = 'azul';

console.log('A: ' + a);
console.log('B: ' + b);

// aux = vermelho
let aux = a;

// a = azul
a = b;

// b = vermelho
b = aux;

console.log('A: ' + a);
console.log('B: ' + b);