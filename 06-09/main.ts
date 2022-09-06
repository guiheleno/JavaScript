import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

console.log("Veja os belos animais desta fazenda correndo e brincando, enquanto a preguiça procura" +
"uma arvore para escalar\n")

let dog1 = new Cachorro ("Max", 7)

dog1.locomocao
dog1.emitirSom

let horse1 = new Cavalo ("Pegasus", 13)

horse1.locomocao
horse1.emitirSom

let sloth1 = new Preguica ("Sid", 25)

sloth1.locomocao
sloth1.emitirSom


