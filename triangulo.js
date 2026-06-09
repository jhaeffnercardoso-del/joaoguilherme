// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração das variáveis
let lado1, lado2, lado3;

// Entrada de dados
lado1 = Number(prompt("Digite o primeiro lado do triângulo: "));
lado2 = Number(prompt("Digite o segundo lado do triângulo: "));
lado3 = Number(prompt("Digite o terceiro lado do triângulo: "));

// Verifica se os lados formam um triângulo
if (
    lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2
) {

    // Verifica o tipo do triângulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo Equilátero");
    } else if (
        lado1 === lado2 ||
        lado1 === lado3 ||
        lado2 === lado3
    ) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }

} else {
    console.log("Os valores informados não formam um triângulo.");
}