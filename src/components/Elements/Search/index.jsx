import { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";

let toggleSearchFn;

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = (e) => {
    e.preventDefault();
    setShowSearch((prevState) => !prevState);
  };
  toggleSearchFn = toggleSearch;

  const { query, search } = useSearch();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div
      className={`flex items-center justify-between -mx-10 px-4 absolute top-0 w-full h-full bg-white text-black z-20 transition-transform duration-300 ease-in-out ${
        showSearch ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <button
        id="title"
        className="text-primary font-semibold text-2xl sm:text-3xl"
      >
        <Link to="/">TCoffee</Link>
      </button>
      <div className="flex items-center gap-1 sm:w-2/3 md:w-1/2">
        <input
          type="text"
          defaultValue={query}
          onKeyPress={handleKeyPress}
          placeholder="Search"
          className="w-full h-8 bg-slate-300 px-2 rounded-lg"
        />
        <button onClick={toggleSearch}>
          <FiX className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export { Search, toggleSearchFn };
