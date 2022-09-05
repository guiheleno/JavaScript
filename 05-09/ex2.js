const prompt = require("prompt-sync")()

    let num1 = Number(prompt("Digite o primeiro número: "))
    
    let num2 = Number(prompt("Digite o segundo número: "))
    
    let num3 = Number(prompt("Digite o terceiro número: "))

    if (num1 >= num2 && num1 >= num3){
        prompt("O maior número digitado é: " + num1) }

    else if (num2 >= num3 && num2 >= num1){
        prompt("O maior número digitado é: " + num2) }

    else if (num3 >= num1 && num3 >= num2){
        prompt("O maior número digitado é: " + num3)
    }
