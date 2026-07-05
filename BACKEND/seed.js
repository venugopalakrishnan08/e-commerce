// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import { seedProducts } from "./seedData.js"; // Fixed path layout here!

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    
    await Product.deleteMany({});
    console.log("Cleared existing products");
    
    await Product.insertMany(seedProducts);
    console.log(`✅ Successfully seeded ${seedProducts.length} products!`);
    
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();