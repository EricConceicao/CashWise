import express from 'express';
import { authenticate } from '../middlewares/jsonwebtoken.js';

const router = express.Router();

router.post('/add', authenticate, (req, res) => {
	res.status(200).json({
		success: true,
		message: "Funfando!"
	});
});


export default router