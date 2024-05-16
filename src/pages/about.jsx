import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import Tittle from "../components/Elements/Tittle";
import { useState } from "react";
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
      <section className="bg-black bg-aboutpage min-h-screen text-slate-300 bg-cover bg-no-repeat bg-bottom flex items-center flex-col">
        <Tittle textColor="text-black">About Us</Tittle>
        <div className="flex gap-8 mt-14 flex-wrap lg:flex-nowrap pb-5 lg:px-14">
          <div className="flex gap-2 cursor-pointer mx-auto">
            {cards.map((card, index) => {
              const isActive = active === index;
              return (
                <article
                  key={card.image}
                  className={`${
                    isActive
                      ? "w-[150px] phone:w-[200px] sm:w-[300px] opacity-100"
                      : "w-8 sm:w-16 opacity-90"
                  } relative overflow-hidden bg-white h-[200px] phone:h-[250px] sm:h-[400px] rounded-[36px] flex item-end transition-all duration-500`}
                  onClick={() => handleToggle(index)}
                >
                  <img
                    src={card.image}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full filter grayscale-[50%] z-0 object-cover"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-[400px] z-10 p-[100px_0_20px] flex items-center gap-3.5 bg-gradient-to-b from-[rgba(0,0,0,0%)] to-[rgba(0,0,0,80%)] transition-opacity duration-200 ${
                      isActive ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <span className="phone:grid hidden material-symbols-outlined invisible sm:visible place-items-center w-12 h-12 bg-white/80 rounded-full text-2xl hover:bg-primary ml-2">
                      <FiCamera className="text-black" />
                    </span>
                    <div>
                      <h2 className="text-2xl text-white text-center">
                        {card.header}
                      </h2>
                      <p className="invisible sm:visible">{card.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-3xl font-bold mb-6">
              What makes our coffee{" "}
              <span className="text-yellow-400">special</span> ?
            </h3>
            <p className="text-lg text-white">
              We provide high quality coffee, freshly made. Complicated
              proscesses are involved in the production of coffee. Until we can
              serve it to others.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
