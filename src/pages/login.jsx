import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import LoginLayout from "../components/Layouts/LoginLayout";

const Login = () => {
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
export default Login;
