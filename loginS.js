// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração das variáveis
let usuario;
let senha;

// Entrada de dados
usuario = prompt("Digite o usuário: ");
senha = prompt("Digite a senha: ");

// Verificação de login
if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Usuário ou senha incorretos.");
}