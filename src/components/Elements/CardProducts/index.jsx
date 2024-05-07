import { FiShoppingCart } from "react-icons/fi";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="text-center drop-shadow-md bg-black/80 px-6 py-4 rounded-xl flex flex-col justify-between gap-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, alt } = props;
  return <img src={image} alt={alt} className="rounded-[50%] w-48" />;
};

const Body = (props) => {
  const { name } = props;
  return <h3 className="text-xl">{name}</h3>;
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center">
      <p>IDR 15000</p>
      <a className="border p-2 rounded-full bg-black hover:bg-white">
        <FiShoppingCart className="h-5 w-5 text-primary" />
      </a>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
