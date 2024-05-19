import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import ContactLayouts from "../components/Layouts/ContactLayout";

const Contact = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <ContactLayouts />
    </>
  );
};
export default Contact;
