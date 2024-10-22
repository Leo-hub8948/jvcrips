let aspasSimples = 'Estamos criando uma String com aspas simples';
//String em resumo são Texto que pode ser utilizados no Javascript
// e para utiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "string com aspas Duplas";
//Exemplo de string com aspas Duplas.

let templateLiteral = `String interpolation allows  expressaions like ${1 + 1}.`;
//Essa é uma String Template, basicamente usados em casos onde há a necessidade de
// realizar uma ação aritimética(como no emxemplo) ou quando guardamos alguma variável dentro dela.
//O símbolo ${} em Javascript é usado para interpolar variáveis , ou seja para retonar o valor dela.

let name = 'Leandro';
let age = 21;

let message = `Olá, meu nome é ${name} e tenho ${age} anos`;

console.log(message);

console.log(templateLiteral);


let primeiroNome = 'Wellinton';
let ultimoNome = 'Silva';
let nomeCompleto = primeiroNome + ' ' + ultimoNome;
let valordaConta = 2;
let nomeCompletoTemplete = `olá meu nome ${primeiroNome} ${ultimoNome} tenho o valor de R$${valordaConta} em minha conta bancária.`;



console.log(nomeCompletoTemplete);