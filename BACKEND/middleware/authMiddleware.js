// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { asyncHandler } from "./errorMiddleware.js";

export const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("_id");
    if (!user) {
      return res.status(401).json({ message: "Not authorized, user no longer exists" });
    }

    req.user = { id: user._id };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
});