import { Animal } from "./animal.model";

export class Gato extends Animal {
  constructor(
    nome: string,
    raça: string,
    nascimento: string,
    gênero: string,
    dono: string,
    endereço: string
  ) {
    super(nome, raça, nascimento, gênero, dono, endereço);
    this.species = "FELINO";
  }
}
