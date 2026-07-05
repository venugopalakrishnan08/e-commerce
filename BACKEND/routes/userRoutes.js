// routes/userRoutes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { getUserCart, updateUserCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validateRegister, validateLogin, validateCartPayload } from "../middleware/validator.js"; // Fixed path typo here!
import { validateUser } from '../middleware/validator.js';

const router = express.Router();
router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);
router.get("/cart", protect, getUserCart);
router.post("/cart", protect, validateCartPayload, updateUserCart);

export default router;