import express from 'express';
import contato from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/', contato);

export default router