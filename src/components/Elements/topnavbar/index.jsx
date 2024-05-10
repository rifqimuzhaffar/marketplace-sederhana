import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const MenuLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Product", path: "/product" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];

const TopNavbar = ({ cart, handleUpdateQuantity, handleRemoveItem }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };

  const toggleShowShoppingCart = (e) => {
    e.preventDefault();
    setShowShoppingCart(!showShoppingCart);
  };

  const navItems = MenuLinks.map((data) => (
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

  return (
    <nav className="bg-black/80 border-b border-[#513c28] flex justify-between items-center px-10 py-[1.4rem] fixed top-0 left-0 right-0 z-50">
      <a href="#" className="text-primary font-semibold text-2xl sm:text-3xl">
        TCoffee
      </a>
      <ul className="hidden lg:flex">{navItems}</ul>
      <div className="flex gap-2">
        <a
          href="#"
          className="text-white hover:text-primary transition-colors duration-300"
        >
          <FiSearch className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="relative text-white hover:text-primary transition-colors duration-300"
          onClick={toggleShowShoppingCart}
        >
          <span className="absolute w-3 h-3 rounded-full bg-red-500 top-4 left-4 text-[8px] text-center md:w-5 md:h-5 md:text-[12px]">
            {cart && cart.length}
          </span>
          <FiShoppingCart className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="lg:hidden text-white hover:text-primary transition-colors duration-300"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </a>
      </div>
      {/* Sidebar */}
      <div
        className={`absolute top-full w-[15rem] h-screen bg-black/80 text-white z-10 ${
          showSidebar ? "right-0" : "right-[100%]"
        }`}
      >
        <div className="px-4 py-8 text-center">
          <ul className="space-y-4">{navItems}</ul>
        </div>
      </div>
      {/* Show Shopping Cart */}
      <div
        className={`absolute overflow-auto top-full w-full lg:w-[25rem] h-screen bg-white text-black z-10 ${
          showShoppingCart ? "left-0" : "left-[100%]"
        }`}
      >
        <h1 className="text-4xl text-center py-4 border-b-primary border">
          Cart
        </h1>
        {cart && cart.length > 0 ? (
          // Tampilkan tabel keranjang belanja jika ada item di dalam cart
          <table className="text-left border-separate table-auto border-spacing-x-4 mx-auto sm:border-spacing-x-10 lg:border-spacing-x-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>IDR {item.price.toLocaleString("id-ID")}</td>
                  <td className="text-center">
                    {/* Container untuk tombol +, Quantity, dan tombol - */}
                    <div className="flex items-center justify-center">
                      {/* Tombol + untuk menambah jumlah */}
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="border px-1 rounded-full bg-primary hover:bg-white mr-2"
                      >
                        +
                      </button>
                      {/* Tampilan jumlah item */}
                      <span>{item.quantity}</span>
                      {/* Tombol - untuk mengurangi jumlah */}
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="border px-1 rounded-full bg-primary hover:bg-white ml-2"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>IDR {item.price * item.quantity}</td>
                  <td>
                    {/* Tombol untuk menghapus item dari keranjang */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="border p-2 rounded-full bg-primary hover:bg-white"
                    >
                      D
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // Tampilkan pesan "Cart is empty" jika keranjang kosong
          <div className="text-center text-gray-600 mt-4">Cart is empty</div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
