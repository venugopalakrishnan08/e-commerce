import express from 'express';
import { registerUser, authUser } from '../controllers/userController.js';

const router = express.Router();

// Route: POST /api/users/register
router.post('/register', registerUser);

// Route: POST /api/users/login
router.post('/login', authUser);

export default router;