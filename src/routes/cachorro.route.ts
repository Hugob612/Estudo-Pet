import express from 'express';
import * as cachorroController from '../controllers/cachorro.controller';

const cachorrosRoute = express.Router();

cachorrosRoute.get('/cachorros', cachorroController.list);
cachorrosRoute.get('/cachorros/:id', cachorroController.getById);
cachorrosRoute.post('/cachorros', cachorroController.create);
cachorrosRoute.put('/cachorros/:id', cachorroController.update);
cachorrosRoute.delete('/cachorros/:id', cachorroController.remove);
export default cachorrosRoute;
