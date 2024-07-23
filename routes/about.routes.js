import { Router } from 'express';
import { renderAboutPage } from '../controllers/about.controller.js';

const router = Router();

router.get('/about', renderAboutPage);

export default router;
