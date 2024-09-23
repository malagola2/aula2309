/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.
Passos:
Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicação e divisão.
Exibir os resultados das operações em um formato claro.
tem menu de contexto
*/

// solicitar ao usuário para inserir os números
let numero1 = Number(prompt("insira o primeiro número: "));
let numero2 = Number(prompt("insira o primeiro número: "));

// Calcular as operaçãoes
let soma = numero1 + numero2;
let subtração = numero1 - numero2;
let multiplicação = numero1 * numero2;
let divisão = numero1 / numero2;

// Exibir os resultados
// console.log("A soma entre ", numero1, " e ", numero2, "é: ", soma);
// console.log("A subtração entre:", numero1, " e ", numero2, "é:", subtração);
// console.log("A multiplicação entre:", numero1, " e ", numero2, "é", multiplicação);
// console.log("A divisão entre:", numero1, " e ", numero2, "é", divisão);

// Exibir os resultados usando template strings
console.log(`A soma entre ${numero1} e ${numero2} é: ${soma}`);
console.log(`A subtração entre ${numero1} e ${numero2} é: ${subtração}`);
console.log(`A multiplicação entre ${numero1} e ${numero2} é: ${multiplicação}`);
console.log(`A divisão entre ${numero1} e ${numero2} é: ${divisão}`);