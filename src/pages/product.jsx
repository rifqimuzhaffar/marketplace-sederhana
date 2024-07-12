import TopNavbar from "../components/Elements/topnavbar";
import Tittle from "../components/Elements/Tittle";
import CardProducts from "../components/Elements/CardProducts";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const {
    cart,
    addedMessage,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
  } = useCart();

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProduts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products/");
        setAllProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchQuery =
      new URLSearchParams(location.search).get("search") || "";
    let filtered = [...allProducts];

    if (searchQuery.trim() !== "" && filtered.length > 0) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter((product) => product.available === true);

    setFilteredProducts(filtered);
  }, [location.search, allProducts]);

  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />

      <section className="bg-black bg-productpage min-h-screen text-white flex justify-center">
        <div className="relative mx-auto">
          {addedMessage && (
            <div className="fixed z-40 top-20 p-1 rounded-lg right-1 text-center text-white bg-red-600">
              {addedMessage}
            </div>
          )}
          <Tittle textColor="text-white" textSize="text-3xl">
            Our Product
          </Tittle>
          <div className="flex flex-wrap mt-[1.5rem] justify-center gap-6 md:gap-12 md:px-[5px] lg:px-[5rem] mb-5">
            {filteredProduts.length > 0 ? (
              filteredProduts.map((product) => (
                <CardProducts key={product.id}>
                  <CardProducts.Header
                    image={product.img_url}
                    alt={product.title}
                  />
                  <CardProducts.Body name={product.title} />
                  <CardProducts.Footer
                    productId={product.id}
                    handleAddToCart={handleAddToCart}
                  />
                </CardProducts>
              ))
            ) : (
              <Link to="/product" className="hover:text-primary">
                Back to Product
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
