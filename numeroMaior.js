// Escreva uma função que recebe 2 números e retorna o maior entre eles

let resultado = max(10, 9);
console.log(resultado);

function max(numero1, numero2) {
    if (numero1 > numero2)
        return numero1;
    return numero2;
}