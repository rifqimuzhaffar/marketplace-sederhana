import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-44" : "w-9"
      } bg-gray-200 h-screen py-5 px-2 transition-width duration-300`}
    >
      <div className="flex items-center justify-between mb-4 gap-2">
        <h3 className={`text-lg font-bold ${!isOpen && "hidden"}`}>TCoffee</h3>
        <button onClick={toggleSidebar} className="self-center">
          {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
      <ul className="list-none mx-auto">
        <li className="mb-2">
          <Link to="dashboard" className="text-blue-500 hover:underline">
            <span className={`${!isOpen && "hidden"}`}>Dashboard</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="product" className="text-blue-500 hover:underline">
            <span className={`${!isOpen && "hidden"}`}>Product</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="order" className="text-blue-500 hover:underline">
            <span className={`${!isOpen && "hidden"}`}>Order</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
