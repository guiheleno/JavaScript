import { Animal } from "./Animal";

export class Cachorro implements Animal{
   
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
        console.log("Au au");
    }

    locomocao(): void {
        console.log(`${this.nome} está correndo`)
    }
}
