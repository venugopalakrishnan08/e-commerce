// controllers/productController.js
import Product from "../models/Product.js";
import { asyncHandler } from "../middleware/errorMiddleware.js";

export const getProducts = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
  const skip = (page - 1) * limit;

  const filter = {};
  if (req.query.category) filter.category = req.query.category.toLowerCase();
  if (req.query.search) filter.$text = { $search: req.query.search };

  const [products, total] = await Promise.all([
    Product.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Product.countDocuments(filter),
  ]);

  res.json({
    products,
    page,
    totalPages: Math.ceil(total / limit),
    totalProducts: total,
  });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});