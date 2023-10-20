import { Animal } from "./animal.model";

export class Cachorro extends Animal {
  
  constructor(
    name: string,
    race: string,
    birthdate: string,
    gender: string,
    owner: string,
    address: string
  ) {
    super(
      name,race,birthdate,gender,owner,address
    );
    this.species = "CANINO";
  } 
}

