import { v4 as uuid } from "uuid";
import { Vacina } from "./vacina.model";
import { BanhoTosa } from "./banhoETosa.model";
import mongoose, { Model, Schema, model } from "mongoose";
import { IAnimal } from "../schemas/interfaces/IAnimal.interface";

export class Animal {
  constructor(
    name: string,
    race: string,
    birthdate: string,
    gender: string,
    owner: string,
    address: string
  ) {
    this.name = name;
    this.race = race;
    this.birthdate = birthdate;
    this.gender = gender;
    this.owner = owner;
    this.address = address;
  }
  id: string = uuid();
  name: string;
  race: string;
  birthdate: string;
  gender: string;
  owner: string;
  address: string;
  species: string = "";

  vacinas: Vacina[] = [];
  banhos: BanhoTosa[] = [];

  aplicarVacina(vacina: Vacina) {
    this.vacinas.push(vacina);
  }
  darBanho(banho: BanhoTosa) {
    this.banhos.push(banho);
  }
  tosar(tosa: BanhoTosa) {
    this.banhos.push(tosa);
  }
}
