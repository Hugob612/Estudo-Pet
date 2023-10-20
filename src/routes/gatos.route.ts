import express from 'express';
import * as cachorroController from '../controllers/cachorro.controller';

const gatoRoute = express.Router();

gatoRoute.get('/gatos', cachorroController.list);
gatoRoute.get('/gatos/:id', cachorroController.getById);
gatoRoute.post('/gatos', cachorroController.create);
gatoRoute.put('/gatos/:id', cachorroController.update);
gatoRoute.delete('/gatos/:id', cachorroController.remove);

export default gatoRoute;  
