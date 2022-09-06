import { Animal } from "./Animal";

export class Preguica implements Animal{
    
    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){

    this.nome = nome,
    this.idade = idade 
    
    }
    
    emitirSom(): void {
        console.log("Zzzzzzzzzz")
    }
    locomocao(): void {
        console.log("Preguiça escalando a árvore")
    }
    
}