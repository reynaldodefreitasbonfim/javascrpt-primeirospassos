// ---DECLARAÇÃO DE VARIÁVEIS
let nome = prompt("Como você se chama?")
var altura
var alturaHomemAlto = 2.51
let anoNascimento
var cidadeNatal

// ---PROCESSAMENTO
//parseInt(valor) vai converter o valor para numero inteiro
anoNascimento = parseInt(prompt(nome+", em que ano você nasceu?"));

cidadeNatal = prompt("Onde você nasceu?");

//parseFloat(valor) vai fazer o que?
altura = parseFloat(prompt("Quanto você mede?"))

// ---SAÍDA DE DADOS
document.write("Olá, meu nome é " + nome + ". ");
document.write('Eu tenho ' + (2026-anoNascimento) + ' anos, nasci em ');
document.write(cidadeNatal+` e sou ${(alturaHomemAlto - altura)} metros
    menor que o homem mais alto vivo`);

document.write('Uma vez disseram:"Não construa uma casa no terreno dos seus sogros."')

 