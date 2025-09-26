// src/hooks/useProductActions.js
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

export const useProductActions = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success(`${product.title} added to wishlist!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  return { handleAddToCart, handleAddToWishlist };
};
