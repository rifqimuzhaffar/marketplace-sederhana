import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";

const MenuLinks = [
  { id: 1, name: "Home" },
  { id: 2, name: "Products" },
  { id: 3, name: "About" },
  { id: 4, name: "Contact" },
];

const TopNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="bg-black/80 border-b border-[#513c28] flex justify-between items-center p-[1.4rem] fixed top-0 left-0 right-0 z-50">
        <a href="#" className="text-white font-semibold text-2xl sm:text-3xl">
          TCoffe
        </a>
        <ul className="hidden lg:flex">
          {MenuLinks.map((data) => (
            <li key={data.id}>
              <a
                href="#"
                className="inline-block px-4 font-semibold text-white hover:text-primary relative group"
              >
                {data.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transition-transform duration-300 transform scale-x-0 group-hover:scale-x-50"></span>
              </a>
            </li>
          ))}
        </ul>
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
            <ul className="space-y-4">
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href="#"
                    className="block font-semibold text-xl hover:text-primary transition-colors duration-300"
                    onClick={toggleSidebar}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
