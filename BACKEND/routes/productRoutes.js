import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// Route: GET /api/products
router.get('/', getProducts);

// Route: GET /api/products/:id
router.get('/:id', getProductById);

export default router;