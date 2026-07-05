import Product from '../models/Product.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';

// @desc    Get all products with scalable pagination & search filtration
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  // Production Scaling: Fetch items matching clean keyword indexes or fallback to query all
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i', // Case-insensitive matching
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  
  // Return empty array comfortably or data collection sets 
  res.status(200).json(products);
});

// @desc    Get a single product details by database entry ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error('Product asset could not be found in active collections');
  }
});