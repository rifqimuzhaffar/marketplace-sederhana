import TopNavbar from "../components/Elements/topnavbar";
import HomeLayouts from "../components/Layouts/HomeLayouts";
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
      <HomeLayouts />
    </>
  );
};

export default Home;
