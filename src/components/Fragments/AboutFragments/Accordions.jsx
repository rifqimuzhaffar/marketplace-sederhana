import { FiCamera } from "react-icons/fi";
import cards from "../../../data/dataAbout";
import { useState } from "react";

const Accordions = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);

  return (
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
  );
};
export default Accordions;
