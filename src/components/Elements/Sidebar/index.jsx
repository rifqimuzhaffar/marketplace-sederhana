import { navItems } from "../topnavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

let toggleSidebarFn;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar((prevState) => !prevState);
  };

  toggleSidebarFn = toggleSidebar;

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={`absolute top-full w-[15rem] h-screen bg-black/80 text-white z-20 ${
        showSidebar ? "right-0" : "right-[100%]"
      }`}
    >
      <div className="flex flex-col justify-between px-4 py-8 text-center h-full">
        <ul className="space-y-4">{navItems}</ul>
        <div className="mb-[4.5rem]">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 font-semibold text-white hover:text-primary relative group w-full border border-white p-2"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLoginClick}
              className="px-4 font-semibold text-white hover:text-primary relative group w-full border border-white p-2"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Sidebar, toggleSidebarFn };
