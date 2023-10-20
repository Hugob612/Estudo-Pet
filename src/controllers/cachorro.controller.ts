import { Request, Response } from "express";
import { Cachorro } from "../models/cachorro.model";
import { CachorrosRepository } from "../repositories/cachorros.repository";

const cachorrosRepository = new CachorrosRepository();

export async function create(req: Request, res: Response) {
  console.log(req.body);
  const { name, race, birthdate, gender, owner, address } = req.body;
  let cachorro = new Cachorro(name, race, birthdate, gender, owner, address);

  console.log(cachorro);
  await cachorrosRepository.add(cachorro);
  res.status(201).json(cachorro);
}
export function list(req: Request, res: Response) {
  return res.status(200).json(cachorrosRepository.list());
}
export function update(req: Request, res: Response) {
  const { name, race, birthdate, gender, owner, address } = req.body;

  const findedCachorro = cachorrosRepository.findById(req.params.id);

  console.log(findedCachorro);

  if (!findedCachorro) {
    res.status(404).json({ message: "Cachorro não encontrado" });
    return 0;
  }
  findedCachorro.name = name;
  findedCachorro.address = address;
  findedCachorro.birthdate = birthdate;
  findedCachorro.owner = owner;
  findedCachorro.race = race;
  findedCachorro.gender = gender;

  cachorrosRepository.update(req.params.id, findedCachorro);
  res.status(200).json(cachorrosRepository.list());
}
export function remove(req: Request, res: Response) {
  cachorrosRepository.remove(req.params.id);
  res.status(200).json(cachorrosRepository.list());
}
export function getById(req: Request, res: Response) {
  res.status(200).json(cachorrosRepository.findById(req.params.id));
}
