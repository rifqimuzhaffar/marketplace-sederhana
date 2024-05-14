import { navItems } from "../topnavbar";
import { useState } from "react";

let toggleSidebarFn;

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar((prevState) => !prevState);
  };

  toggleSidebarFn = toggleSidebar;

  return (
    <div
      className={`absolute top-full w-[15rem] h-screen bg-black/80 text-white z-20 ${
        showSidebar ? "right-0" : "right-[100%]"
      }`}
    >
      <div className="px-4 py-8 text-center">
        <ul className="space-y-4">{navItems}</ul>
      </div>
    </div>
  );
};

export { Sidebar, toggleSidebarFn };
