import { Router } from 'express';
import { renderSimulatorPage } from '../controllers/simulator.controller.js';

export const simulatorRouter = Router();

simulatorRouter.get('/simulator', renderSimulatorPage);


