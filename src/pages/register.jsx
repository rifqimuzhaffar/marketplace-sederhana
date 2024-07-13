import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import LoginLayout from "../components/Layouts/RegisterLayout";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <>
      <ToastContainer />
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <LoginLayout />
    </>
  );
};
export default Register;
