import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/dataProducts";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Menggunakan useNavigate dari React Router v6

  useEffect(() => {
    const search = () => {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    };

    search();
  }, [query]);

  const search = (newQuery) => {
    setQuery(newQuery);
    navigate(`/product?search=${newQuery}`); // Menggunakan navigate untuk navigasi
  };

  const resetSearch = () => {
    setQuery("");
    navigate("/product"); // Navigasi kembali ke URL tanpa query
  };

  const memoizedResults = useMemo(() => searchResults, [searchResults]);

  return { query, searchResults: memoizedResults, search, resetSearch };
};

export default useSearch;
