
import { Cachorro } from "../models/cachorro.model";
import { AnimalB } from "../schemas/animal.schema";
import { IAnimal } from "../schemas/interfaces/IAnimal.interface";

let cachorros: Cachorro[] = [];

export class CachorrosRepository {
  add = async (cachorro: Cachorro) => {
    const animal: IAnimal = await AnimalB.create({
      id: cachorro.id,
      name: cachorro.name,
      race: cachorro.race,
      birthdate: cachorro.birthdate,
      gender: cachorro.gender,
      owner: cachorro.owner,
      address: cachorro.address,
      species: cachorro.species,
    });
    return animal;
  };

  list = async () => await AnimalB.find({  });

  update = (id: string, cachorro: Cachorro) : any => {
    return null;
  };
  remove = (id: string) =>
    (cachorros = cachorros.filter((cachorro) => cachorro.id !== id));

  findById = (id: string) => cachorros.find((cachorro) => cachorro.id === id);
}
