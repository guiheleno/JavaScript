const prompt = require("prompt-sync")()

    let num1 = Number(prompt("Digite o primeiro número: "))

    let num2 = Number(prompt("Digite o segundo número: "))

    let num3 = Number(prompt("Digite o terceiro número: "))

    if (num1 <= num2 && num2 <= num3)
    {
        prompt("A ordem crescente: é " + num1 + ", " + num2 + " e " + num3)
    }
    else if (num1 <= num3, num3 <= num2)
    {
        prompt("A ordem crescente: é " + num1 + ", " + num3 + " e " + num2)
    }
    else if (num2 <= num1, num1 <= num3)
    {
        prompt("A ordem crescente: é " + num2 + ", " + num1 + " e " + num3)
    }
    else if (num2 <= num3, num3 <= num1)
    {
        prompt("A ordem crescente: é " + num2 + ", " + num3 + " e " + num1)
    }
    else if (num3 <= num1, num1 <= num2)
    {
        prompt("A ordem crescente: é " + num3 + ", " + num1 + " e " + num2)
    }
    else
    {
        prompt("A ordem crescente: é " + num3 + ", " + num2 + " e " + num1)
    }