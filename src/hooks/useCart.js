import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const useCart = () => {
  const { userId } = useAuth();
  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:8000/carts/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setCart(response.data || []);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      }
    };

    fetchCart();
  }, [userId]);

  const handleAddToCart = async (item) => {
    if (!userId) {
      console.error("User ID is undefined");
      return;
    }

    try {
      await axios.post(
        `http://localhost:8000/carts`,
        {
          userId,
          productId: item.id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const response = await axios.get(
        `http://localhost:8000/carts/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCart(response.data || []);
      setAddedMessage(`${item.title} added to cart`);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }

    setTimeout(() => {
      setAddedMessage("");
    }, 2000);
  };

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/carts/${itemId}`,
        {
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedCartItem = response.data;
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === itemId ? updatedCartItem : cartItem
        )
      );
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/carts/${itemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== itemId)
      );
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return {
    cart,
    addedMessage,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
  };
};

export default useCart;
