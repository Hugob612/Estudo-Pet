import { Request, Response } from "express";
import { Cachorro } from "../models/cachorro.model";
import { CachorrosRepository } from "../repositories/cachorros.repository";
import { Gato } from "../models/gato.model";
import { GatosRepository } from "../repositories/gatos.repository";


const cachorrosRepository = new CachorrosRepository();
const gatosRepository = new GatosRepository();

export function list(req: Request, res: Response) { 

    const cachorros = cachorrosRepository.list();
    const gatos = gatosRepository.list();
    res.status(200).json({ cachorros, gatos });
}
