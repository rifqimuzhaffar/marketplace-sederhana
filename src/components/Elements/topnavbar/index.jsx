import { useState } from "react";
import { FiSearch, FiMenu, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Sidebar, toggleSidebarFn } from "../Sidebar";
import { ShoppingCart, toggleShoppingCartFn } from "../ShoppingCart";
import { Search, toggleSearchFn } from "../Search";

const MenuLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Product", path: "/product" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];

export const navItems = MenuLinks.map((data) => (
  <li key={data.id}>
    <Link
      to={data.path}
      className="px-4 font-semibold text-white hover:text-primary relative group"
    >
      {data.name}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300"></span>
    </Link>
  </li>
));

const TopNavbar = ({ cart, handleUpdateQuantity, handleRemoveItem }) => {
  const [checkedOut, setCheckedOut] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const handleMenuClickSidebar = (e) => {
    e.preventDefault();
    if (toggleSidebarFn) {
      toggleSidebarFn(e);
    }
  };

  const handleMenuClickSearch = (e) => {
    e.preventDefault();
    if (toggleSearchFn) {
      toggleSearchFn(e);
    }
  };

  const handleMenuClickShoppingCart = (e) => {
    e.preventDefault();
    if (toggleShoppingCartFn) {
      toggleShoppingCartFn(e);
    }
  };

  const handleCheckout = () => {
    if (!checkedOut && cart.length > 0) {
      const currentTime = new Date().toLocaleString();
      const currentPurchase = cart.map((item) => ({
        time: currentTime,
        product: item,
      }));
      const cartCopy = [...cart];
      currentPurchase.forEach(() => {});
      setPurchaseHistory([...purchaseHistory, ...currentPurchase]);
      setCheckedOut(true);
    }
  };

  const handleBackToCart = () => {
    setCheckedOut(false);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <nav className="bg-black/80 border-b border-[#513c28] flex justify-between items-center px-10 py-[1.4rem] fixed top-0 left-0 right-0 z-50">
      <button
        id="title"
        className="text-primary font-semibold text-2xl sm:text-3xl"
      >
        <Link to="/">TCoffee</Link>
      </button>
      <ul className="hidden lg:flex">{navItems}</ul>
      <div className="flex gap-2">
        <a
          href="#"
          className="text-white hover:text-primary transition-colors duration-300"
          onClick={handleMenuClickSearch}
        >
          <FiSearch className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="relative text-white hover:text-primary transition-colors duration-300"
          onClick={handleMenuClickShoppingCart}
        >
          <span className="absolute w-3 h-3 rounded-full bg-red-500 top-4 left-4 text-[8px] text-center md:w-5 md:h-5 md:text-[12px]">
            {cart && cart.length}
          </span>
          <FiShoppingCart className="h-6 w-6" />
        </a>

        <a
          href="#"
          className="lg:hidden text-white hover:text-primary transition-colors duration-300"
          onClick={handleMenuClickSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </a>
      </div>
      <Search />
      <Sidebar />
      <ShoppingCart
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
        calculateTotalPrice={calculateTotalPrice}
        handleCheckout={handleCheckout}
        handleBackToCart={handleBackToCart}
        checkedOut={checkedOut}
        purchaseHistory={purchaseHistory}
      />
    </nav>
  );
};

export default TopNavbar;
