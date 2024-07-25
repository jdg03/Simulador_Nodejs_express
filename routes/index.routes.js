import { Router } from 'express';
import { renderHomePage } from '../controllers/index.controller.js';

const router = Router();

router.get('/home', renderHomePage);

export default router;
