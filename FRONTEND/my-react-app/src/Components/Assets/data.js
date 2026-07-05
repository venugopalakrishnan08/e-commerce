// ==========================================
// 1. IMAGES 1-12: WOMEN'S SECTION
// ==========================================
import w1 from './product_1.png';
import w2 from './product_2.png';
import w3 from './product_3.png';
import w4 from './product_4.png';
import w5 from './product_5.png';
import w6 from './product_6.png';
import w7 from './product_7.png';
import w8 from './product_8.png';
import w9 from './product_9.png';
import w10 from './product_10.png';
import w11 from './product_11.png';
import w12 from './product_12.png';

// ==========================================
// 2. IMAGES 13-24: MEN'S SECTION (12 Products)
// ==========================================
import m1 from './product_13.png';
import m2 from './product_14.png';
import m3 from './product_15.png';
import m4 from './product_16.png';
import m5 from './product_17.png';
import m6 from './product_18.png';
import m7 from './product_19.png';
import m8 from './product_20.png';
import m9 from './product_21.png';
import m10 from './product_22.png';
import m11 from './product_23.png';
import m12 from './product_24.png';

// ==========================================
// 3. IMAGES 25-36: KIDS' SECTION
// ==========================================
import k1 from './product_25.png';
import k2 from './product_26.png';
import k3 from './product_27.png';
import k4 from './product_28.png';
import k5 from './product_29.png';
import k6 from './product_30.png';
import k7 from './product_31.png';
import k8 from './product_32.png';
import k9 from './product_33.png';
import k10 from './product_34.png';
import k11 from './product_35.png';
import k12 from './product_36.png';

// ==========================================
// 4. UNIFIED COMPREHENSIVE DATA ARRAY
// ==========================================
let all_product = [
  // --- WOMEN'S CATEGORY ---
  { id: 1, name: "Women Striped Flutter Sleeve Top", category: "women", image: w1, new_price: 50.0, old_price: 80.0 },
  { id: 2, name: "Women Elegant Summer Dress", category: "women", image: w2, new_price: 65.0, old_price: 95.0 },
  { id: 3, name: "Women Casual V-Neck Blouse", category: "women", image: w3, new_price: 40.0, old_price: 60.0 },
  { id: 4, name: "Women Luxury Designer Gown", category: "women", image: w4, new_price: 120.0, old_price: 180.0 },
  { id: 5, name: "Women Floral Print Midi Skirt", category: "women", image: w5, new_price: 45.0, old_price: 70.0 },
  { id: 6, name: "Women Classic Denim Jacket", category: "women", image: w6, new_price: 75.0, old_price: 110.0 },
  { id: 7, name: "Women Oversized Knit Sweater", category: "women", image: w7, new_price: 55.0, old_price: 85.0 },
  { id: 8, name: "Women High-Waisted Tailored Trousers", category: "women", image: w8, new_price: 60.0, old_price: 90.0 },
  { id: 9, name: "Women Pastel Casual Hoodie", category: "women", image: w9, new_price: 50.0, old_price: 75.0 },
  { id: 10, name: "Women Linen Summer Button-Up", category: "women", image: w10, new_price: 40.0, old_price: 65.0 },
  { id: 11, name: "Women Athleisure Training Tights", category: "women", image: w11, new_price: 35.0, old_price: 55.0 },
  { id: 12, name: "Women Bohemian Wrap Dress", category: "women", image: w12, new_price: 85.0, old_price: 130.0 },

  // --- MEN'S CATEGORY (12 items for your 4x3 grid) ---
  { id: 13, name: "Men Premium Casual Shirt", category: "men", image: m1, new_price: 85.0, old_price: 120.0 },
  { id: 14, name: "Men Classic Leather Jacket", category: "men", image: m2, new_price: 150.0, old_price: 210.0 },
  { id: 15, name: "Men Vintage Denim Jacket", category: "men", image: m3, new_price: 75.0, old_price: 110.0 },
  { id: 16, name: "Men Urban Sport Bomber Jacket", category: "men", image: m4, new_price: 90.0, old_price: 130.0 },
  { id: 17, name: "Men Structured Business Suit", category: "men", image: m5, new_price: 240.0, old_price: 310.0 },
  { id: 18, name: "Men Textured Crewneck Sweater", category: "men", image: m6, new_price: 55.0, old_price: 85.0 },
  { id: 19, name: "Men Regular Fit Plaid Shirt", category: "men", image: m7, new_price: 45.0, old_price: 70.0 },
  { id: 20, name: "Men Technical Waterproof Windbreaker", category: "men", image: m8, new_price: 110.0, old_price: 160.0 },
  { id: 21, name: "Men Athletic Gym Hoodie", category: "men", image: m9, new_price: 50.0, old_price: 75.0 },
  { id: 22, name: "Men Lightweight Linen Shirt", category: "men", image: m10, new_price: 60.0, old_price: 90.0 },
  { id: 23, name: "Men Minimalist Everyday Polo", category: "men", image: m11, new_price: 35.0, old_price: 55.0 },
  { id: 24, name: "Men Cargo Utility Joggers", category: "men", image: m12, new_price: 65.0, old_price: 95.0 },

  // --- KIDS' CATEGORY ---
  { id: 25, name: "Boys Orange Colourblocked Hoodie", category: "kid", image: k1, new_price: 30.0, old_price: 45.0 },
  { id: 26, name: "Kids Graphic Pullover Sweatshirt", category: "kid", image: k2, new_price: 35.0, old_price: 55.0 },
  { id: 27, name: "Girls Fleece Winter Coat", category: "kid", image: k3, new_price: 55.0, old_price: 80.0 },
  { id: 28, name: "Kids Denim Overalls Jumpsuit", category: "kid", image: k4, new_price: 40.0, old_price: 60.0 },
  { id: 29, name: "Kids Summer Cotton Shorts Set", category: "kid", image: k5, new_price: 25.0, old_price: 40.0 },
  { id: 30, name: "Kids Waterproof Rain Jacket", category: "kid", image: k6, new_price: 48.0, old_price: 70.0 },
  { id: 31, name: "Girls Striped Knit Cardigan", category: "kid", image: k7, new_price: 38.0, old_price: 55.0 },
  { id: 32, name: "Boys Cargo Everyday Shorts", category: "kid", image: k8, new_price: 28.0, old_price: 42.0 },
  { id: 33, name: "Kids Holiday Graphic Tee", category: "kid", image: k9, new_price: 18.0, old_price: 25.0 },
  { id: 34, name: "Girls Floral Pattern Sundress", category: "kid", image: k10, new_price: 34.0, old_price: 50.0 },
  { id: 35, name: "Boys Active Training Track Pants", category: "kid", image: k11, new_price: 32.0, old_price: 48.0 },
  { id: 36, name: "Kids Cozy Fleece Pajama Set", category: "kid", image: k12, new_price: 29.0, old_price: 45.0 }
];

export default all_product;