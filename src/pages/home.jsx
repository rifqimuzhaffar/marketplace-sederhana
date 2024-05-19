import TopNavbar from "../components/Elements/topnavbar";
import HomeHero from "../components/Fragments/HomeFragments";
import useCart from "../hooks/useCart";

const Home = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();

  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <HomeHero />
    </>
  );
};

export default Home;
