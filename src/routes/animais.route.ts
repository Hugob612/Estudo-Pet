import express from 'express';
import * as animaisController from '../controllers/cachorro.controller';

const animaisRoute = express.Router();

animaisRoute.get('/', animaisController.list);
export default animaisRoute;  
