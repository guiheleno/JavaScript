const prompt = require("prompt-sync")()

let contMenos = 0;
let contMais = 0

while(true){
    let idade = Number(prompt("Digite sua idade: "))

    if (idade >= 1 && idade < 21){
        contMenos++

    } else if (idade > 50){
        contMais++
    }
    if (idade == -99){
        break
    }
}

console.log(`Idades menor que 21: ${contMenos}`)

console.log(`Idades maior que 50: ${contMais}`)

