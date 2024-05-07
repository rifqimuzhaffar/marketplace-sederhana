import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const MenuLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];

const TopNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
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
          className="text-white hover:text-primary transition-colors duration-300"
        >
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
    </nav>
  );
};

export default TopNavbar;
