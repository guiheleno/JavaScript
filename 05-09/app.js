const prompt = require("prompt-sync")()

console.log("-----Bem Vindo!-----")

let nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite a sua idade: "))

let altura = Number(prompt("Digite a sua altura: "))

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos de idade ` +
`e eu tenho ${altura} de altura`)