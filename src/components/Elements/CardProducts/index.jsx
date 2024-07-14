import { FiShoppingCart } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

AOS.init();
const CardProducts = (props) => {
  const { children } = props;
  return (
    <div
      className="text-center w-80 drop-shadow-md bg-black/80 px-6 py-4 rounded-xl flex flex-col justify-between gap-2"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, alt } = props;
  return <img src={image} alt={alt} className="rounded-[50%] mx-auto w-48" />;
};

const Body = (props) => {
  const { name } = props;
  return <h3 className="text-xl">-- {name} --</h3>;
};

const Footer = ({ productId, handleAddToCart, handleUpdateQuantity }) => {
  const item = productId;
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (item) {
      handleAddToCart(item);
    }
  };

  return (
    <div className="flex justify-between items-center">
      {item && item.price !== undefined && (
        <>
          <p>IDR {item.price.toLocaleString("id-ID")}</p>
          <button
            onClick={handleClick}
            className="border p-2 rounded-full bg-black hover:bg-white"
          >
            <FiShoppingCart className="h-5 w-5 text-primary" />
          </button>
        </>
      )}
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
