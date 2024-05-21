import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/dataProducts";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const search = () => {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResult(filteredProducts);
    };
    search();
  }, [query]);

  const search = (newQuery) => {
    setQuery(newQuery);
    navigate(`/product?search=${newQuery}`);
  };

  const resetSearch = () => {
    setQuery("");
    navigate("/product");
  };

  const memoizedResults = useMemo(() => searchResult, [searchResult]);

  return { query, searchResults: memoizedResults, search, resetSearch };
};

export default useSearch;
