import { Model, Schema, model } from "mongoose";
import { IAnimal } from "./interfaces/IAnimal.interface";

const animaisSchema = new Schema<IAnimal>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  race: { type: String, required: true },
  birthdate: { type: String, required: true },
  gender: { type: String, required: true },
  owner: { type: String, required: true },
  address: { type: String, required: true },
  species: { type: String, required: true },
});

export const AnimalB: Model<IAnimal> = model("Animais", animaisSchema);
