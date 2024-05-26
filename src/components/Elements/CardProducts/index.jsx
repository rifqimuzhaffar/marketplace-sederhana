import { FiShoppingCart } from "react-icons/fi";
import products from "../../../data/dataProducts";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="text-center w-80 drop-shadow-md bg-black/80 px-6 py-4 rounded-xl flex flex-col justify-between gap-2">
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
  const item = products.find((product) => product.id === productId);

  const handleClick = () => {
    if (item) {
      handleAddToCart(item);
      if (typeof handleUpdateQuantity === "function") {
        handleUpdateQuantity(item.id, item.quantity + 1);
      }
    }
  };

  return (
    <div className="flex justify-between items-center">
      {item && (
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
