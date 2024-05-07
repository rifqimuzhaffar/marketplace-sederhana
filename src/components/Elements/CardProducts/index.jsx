import { FiShoppingCart } from "react-icons/fi";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-wrap mt-[1.5rem] justify-center gap-4">
      <div className="text-center drop-shadow-md bg-black/80 px-6 py-4 rounded-xl flex flex-col justify-between gap-2">
        {children}
        <CardProducts.Header image="/images/espresso.jpg" />
        <CardProducts.Body>-- Espresso --</CardProducts.Body>
        <CardProducts.Footer price="IDR 15K" />
      </div>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return <img src={image} alt="Espresso" className="rounded-[50%] w-48" />;
};

const Body = (props) => {
  const { children } = props;
  return <h3 className="text-xl">{children}</h3>;
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center">
      <p>{price}</p>
      <a className="border p-2 rounded-full bg-black">
        <FiShoppingCart className="h-5 w-5 text-primary" />
      </a>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
