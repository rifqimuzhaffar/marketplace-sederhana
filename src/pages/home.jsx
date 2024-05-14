import TopNavbar from "../components/Elements/topnavbar";
import HomeHero from "../components/Elements/HomeHero";
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
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center">
        <HomeHero />
      </section>
    </>
  );
};

export default Home;
