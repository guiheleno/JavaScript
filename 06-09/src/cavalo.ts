import { Animal } from "./Animal";

export class Cavalo implements Animal{
   
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
        console.log("Pocotó pocotó")
    }
    locomocao(): void {
        console.log("Cavalo correndo")
    }
    
    
}