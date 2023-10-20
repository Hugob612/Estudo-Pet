import { Gato } from "../models/gato.model";

let gatos: Gato[] = [];

export class GatosRepository {

    add = (gato:Gato) =>  gatos.push(gato);

    list = () => gatos;

    update = (id: string, gato:Gato) => {
        this.remove(id);
        this.add(gato);
        return gato;
    }

    remove = (id : string) =>
        gatos = gatos.filter((gato) => gato.id !== id);

    findById = (id: string)  => 
        gatos.find((cachorro) => cachorro.id === id);

}