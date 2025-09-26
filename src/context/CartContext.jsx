// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const normalizeProduct = (product) => ({
  ...product,
  id: product.id,
  title: product.title,
  image: product.image || "/images/placeholder.png",
  price: parseFloat(
    typeof product.price === "string"
      ? product.price.replace("$", "")
      : product.price
  ),
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Cart functions
  const addToCart = (product) => {
    const normalized = normalizeProduct(product);
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === normalized.id);
      if (exists) {
        return prev.map((item) =>
          item.id === normalized.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...normalized, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  // ✅ Wishlist functions
  const addToWishlist = (product) => {
    const normalized = normalizeProduct(product);
    setWishlist((prev) =>
      prev.find((item) => item.id === normalized.id)
        ? prev
        : [...prev, normalized]
    );
  };

  const removeFromWishlist = (id) =>
    setWishlist((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
