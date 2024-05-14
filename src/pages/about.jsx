import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";

const About = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();

  return (
    <div>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center">
        <p className="m-auto font-bold text-3xl">Coming Soon</p>
      </section>
    </div>
  );
};
export default About;
