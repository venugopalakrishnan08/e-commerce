// controllers/cartController.js
import User from "../models/User.js";
import { asyncHandler } from "../middleware/errorMiddleware.js";

export const getUserCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("cartData");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user.cartData || {});
});

export const updateUserCart = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { cartData: req.body.cartData },
    { new: true, select: "cartData" }
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ message: "Cart updated", cartData: user.cartData });
});