import { Router } from 'express';
import { renderContactPage } from '../controllers/contact.controller.js';

const router = Router();

router.get('/contact', renderContactPage);

export default router;
