import TopNavbar from "../components/Elements/topnavbar";
import Tittle from "../components/Elements/Tittle";
import CardProducts from "../components/Elements/CardProducts";
import products from "../data/dataProducts";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Product = () => {
  const {
    cart,
    addedMessage,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
  } = useCart();

  const [filteredProduts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");

    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);

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
                    image={product.image}
                    alt={product.alt}
                  />
                  <CardProducts.Body name={product.name} />
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
