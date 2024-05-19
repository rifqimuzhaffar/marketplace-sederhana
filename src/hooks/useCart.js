import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      setAddedMessage(`${item.name} Already at cart`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setAddedMessage(`${item.name} Add to cart`);
    }
    setTimeout(() => {
      setAddedMessage("");
    }, 2000);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
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
