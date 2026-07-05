import React, { createContext, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { api } from "../config/api";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("auth-token"));
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("auth-user");
    return stored ? JSON.parse(stored) : null;
  });

  const [cartItems, setCartItems] = useState(() => {
    const localCart = localStorage.getItem("cartItems");
    return localCart ? JSON.parse(localCart) : {};
  });

  // Track if changes come from user input to stop endless loop
  const isLocalUpdate = useRef(false);

  // Fetch Products
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .get("/api/products?limit=100")
      .then((data) => {
        if (!cancelled) setAllProduct(data.products || []);
      })
      .catch((error) => console.error("Failed to fetch products:", error))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch Remote Cart on Login
  useEffect(() => {
    if (!authToken) return;
    api
      .get("/api/users/cart", authToken)
      .then((data) => {
        isLocalUpdate.current = false; 
        setCartItems(data || {});
      })
      .catch((error) => console.error("Failed to fetch cart:", error));
  }, [authToken]);

  // Sync state to local storage and remote server safely
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    if (authToken && isLocalUpdate.current) {
      api.post("/api/users/cart", { cartData: cartItems }, authToken)
        .catch((error) => console.error("Failed to sync cart:", error))
        .finally(() => { isLocalUpdate.current = false; });
    }
  }, [cartItems, authToken]);

  const login = useCallback((token, user) => {
    localStorage.setItem("auth-token", token);
    localStorage.setItem("auth-user", JSON.stringify(user));
    setAuthToken(token);
    setCurrentUser(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-user");
    localStorage.removeItem("cartItems");
    setAuthToken(null);
    setCurrentUser(null);
    setCartItems({});
  }, []);

  const addToCart = useCallback((itemId) => {
    isLocalUpdate.current = true;
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    isLocalUpdate.current = true;
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(0, (prev[itemId] || 0) - 1) }));
  }, []);

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => String(product.id) === String(item) || String(product._id) === String(item)
        );
        if (itemInfo) {
          totalAmount += (itemInfo.new_price || 0) * cartItems[item];
        }
      }
    }
    return totalAmount;
  }, [cartItems, all_product]);

  const getTotalCartItems = useCallback(() => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) totalItem += cartItems[item];
    }
    return totalItem;
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({
      getTotalCartItems,
      getTotalCartAmount,
      all_product,
      loading,
      cartItems,
      addToCart,
      removeFromCart,
      authToken,
      currentUser,
      login,
      logout,
    }),
    [getTotalCartItems, getTotalCartAmount, all_product, loading, cartItems, addToCart, removeFromCart, authToken, currentUser, login, logout]
  );

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;