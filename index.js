const entrada = require("prompt-sync");
const prompt = entrada();

// variável
let ano;

// entrada de dados
ano = Number(prompt("Digite um ano: "));

// verificação
if (ano % 400 === 0) {
    console.log("Ano bissexto");
} else if (ano % 100 === 0) {
    console.log("Não é bissexto");
} else if (ano % 4 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Não é bissexto");
}