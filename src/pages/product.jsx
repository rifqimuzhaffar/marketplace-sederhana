import TopNavbar from "../components/Elements/topnavbar";
import Tittle from "../components/Elements/Tittle";
import CardProducts from "../components/Elements/CardProducts";
import { useState } from "react";

export const products = [
  {
    id: 1,
    name: "Espresso",
    image: "/images/espresso.jpg",
    alt: "Espresso",
    price: 15000,
  },
  {
    id: 2,
    name: "Cappuccino",
    image: "/images/cappuccino.jpg",
    alt: "Cappuccino",
    price: 20000,
  },
  {
    id: 3,
    name: "Espresso Romano",
    image: "/images/Espresso-Romano.jpg",
    alt: "Espresso Romano",
    price: 18000,
  },
  {
    id: 4,
    name: "Vanilla Latte",
    image: "/images/vanilla-latte.jpg",
    alt: "Vanilla Latte",
    price: 22000,
  },
  {
    id: 5,
    name: "Sweet Mocha",
    image: "/images/Sweet-Mocha.jpg",
    alt: "Sweet Mocha",
    price: 21000,
  },
  {
    id: 6,
    name: "Caramel",
    image: "/images/caramel.jpg",
    alt: "Caramel",
    price: 25000,
  },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      setAddedMessage(`${item.name} already in the cart`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setAddedMessage(`${item.name} added to the cart`);
    }

    // Hapus pesan setelah 2 detik
    setTimeout(() => {
      setAddedMessage("");
    }, 2000);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Implement update quantity logic here
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-white bg-cover object-cover bg-no-repeat bg-bottom flex pb-10">
        <div className="mx-auto">
          <Tittle />
          <div className="flex flex-wrap mt-[1.5rem] justify-center gap-6 md:gap-12 md:px-[5px] lg:px-[5rem]">
            {products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header image={product.image} alt={product.alt} />
                <CardProducts.Body name={product.name} />
                <CardProducts.Footer
                  productId={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProducts>
            ))}
          </div>
          {addedMessage && (
            <div className="mt-4 text-center text-green-500">
              {addedMessage}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
