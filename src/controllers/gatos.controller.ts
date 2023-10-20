import { Request, Response } from 'express';
import { Gato } from '../models/gato.model';
import { GatosRepository } from '../repositories/gatos.repository';

const gatosRepository = new GatosRepository();

export function create (req: Request, res: Response) {
    
    console.log(req.body);
    const { name, race, birthdate, gender, owner, address } = req.body;
    let gato = new Gato(name, race, birthdate, gender, owner, address);
  
    console.log(gato);
    gatosRepository.add(gato);
    res.status(201).json(gato);
}

export function list (req: Request, res: Response) {
    return res.status(200).json(gatosRepository.list());
}

export function update (req: Request, res: Response) {
    const { name, race, birthdate, gender, owner, address } = req.body;
  
  //Encontrando o objeto a ser atualizado
  //A Pesquisa pode não retornar nada, por isso é tipar ela como Cachorro
  const findedGato = gatosRepository.findById(req.params.id);

  console.log(findedGato);
  
  //retornando 404 se não encontrar o Gato
  if (!findedGato) {
    res.status(404).json({ message: "Gato não encontrado" }); 
    return 0;
  }

  findedGato.name = name;
  findedGato.address = address;
  findedGato.birthdate = birthdate;
  findedGato.owner = owner;
  findedGato.race = race;
  findedGato.gender = gender;

  //Atualizando o gato
  //
  gatosRepository.update(req.params.id, findedGato);
   
  //devolvendo o cachorros atualizado
  res.status(200).json(gatosRepository.list());
}

export function remove (req: Request, res: Response) {
    gatosRepository.remove(req.params.id);
    res.status(200).json(gatosRepository.list());
}

export function getById (req: Request, res: Response) {
    res.status(200).json(gatosRepository.findById(req.params.id));
}