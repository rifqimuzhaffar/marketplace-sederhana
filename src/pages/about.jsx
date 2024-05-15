import { useState } from "react";
import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import cards from "../data/dataAbout";
import { FiCamera } from "react-icons/fi";

const About = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover bg-no-repeat bg-bottom flex items-center justify-center">
        <div className="flex gap-2 cursor-pointer mt-20">
          {cards.map((card, index) => {
            const isActive = active === index;
            return (
              <article
                key={card.image}
                className={`${
                  isActive ? "w-[400px] opacity-100" : "w-16 opacity-90"
                } relative overflow-hidden bg-white h-[500px] rounded-[36px] flex items-end transition-all duration-500`}
                onClick={() => handleToggle(index)}
              >
                <img
                  src={card.image}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full filter grayscale-[50%] z-0 object-cover"
                />
                <div
                  className={`absolute bottom-0 left-0 w-[400px] z-10 p-[100px_0_20px_20px] flex items-center gap-3.5 bg-gradient-to-b from-[rgba(0,0,0,0%)] to-[rgba(0,0,0,80%)] transition-opacity duration-250 ${
                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <span className="material-symbols-outlined grid place-items-center w-12 h-12 bg-white/80 rounded-full text-2xl hover:bg-primary">
                    <FiCamera className="text-black" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-normal text-white/90">
                      {card.header}
                    </h2>
                    <p className="text-white/66">{card.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
