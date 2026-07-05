// BACKEND/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js'; // Added notFound import

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// ⚠️ MUST BE PLACED IN THIS EXACT ORDER BELOW YOUR ROUTES:
app.use(notFound);      // Catches unmatched routes and funnels them down
app.use(errorHandler);  // Catches all thrown database/server errors

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));