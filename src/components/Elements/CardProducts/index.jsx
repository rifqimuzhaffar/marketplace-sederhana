import { FiShoppingCart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "-- Espresso --",
    image: "/images/espresso.jpg",
    price: "IDR 15K",
  },
  {
    id: 2,
    name: "-- Cappuccino --",
    image: "/images/cappuccino.jpg",
    price: "IDR 20K",
  },
  {
    id: 3,
    name: "-- Espresso Romano --",
    image: "/images/Espresso-Romano.jpg",
    price: "IDR 18K",
  },
  {
    id: 4,
    name: "-- Vanilla Latte --",
    image: "/images/vanilla-latte.jpg",
    price: "IDR 20K",
  },
  {
    id: 5,
    name: "-- Sweet Mocha--",
    image: "/images/Sweet-Mocha.jpg",
    price: "IDR 20K",
  },
  {
    id: 6,
    name: "-- Caramel --",
    image: "/images/caramel.jpg",
    price: "IDR 20K",
  },
];

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-wrap mt-[1.5rem] justify-center gap-4 md:px-[5px] lg:px-[11rem]">
      {products.map((product) => (
        <div
          key={product.id}
          className="text-center drop-shadow-md bg-black/80 px-6 py-4 rounded-xl flex flex-col justify-between gap-2"
        >
          {children}
          <CardProducts.Header image={product.image} />
          <CardProducts.Body name={product.name} />
          <CardProducts.Footer price={product.price} />
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return <img src={image} alt="Espresso" className="rounded-[50%] w-48" />;
};

const Body = (props) => {
  const { name } = props;
  return <h3 className="text-xl">{name}</h3>;
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center">
      <p>{price}</p>
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
