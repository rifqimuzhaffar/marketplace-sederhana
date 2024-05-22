import Tittle from "../Elements/Tittle";
import AboutDesc from "../Fragments/AboutFragments/AboutDesc";
import Accordions from "../Fragments/AboutFragments/Accordions";

const AboutLayouts = () => {
  return (
    <section className="bg-black bg-aboutpage min-h-screen text-white bg-cover bg-no-repeat bg-bottom flex justify-center items-center flex-col">
      <Tittle textColor="text-white" textSize="text-3xl">
        About Us
      </Tittle>
      <div className="flex gap-8 mt-14 flex-wrap lg:flex-nowrap pb-5 lg:px-14">
        <Accordions />
        <AboutDesc />
      </div>
    </section>
  );
};

export default AboutLayouts;
