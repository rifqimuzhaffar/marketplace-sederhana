import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import AboutLayouts from "../components/Layouts/AboutLayouts";

const About = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();

  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <AboutLayouts />
    </>
  );
};

export default About;
