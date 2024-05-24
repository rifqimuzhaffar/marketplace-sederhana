import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import LoginLayout from "../components/Layouts/LoginLayout";

const Contact = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <LoginLayout />
    </>
  );
};
export default Contact;
