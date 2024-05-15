import Tittle from "../components/Elements/Tittle";
import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";

const Contact = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <div>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex">
        <Tittle>Contact Us</Tittle>
      </section>
    </div>
  );
};
export default Contact;
