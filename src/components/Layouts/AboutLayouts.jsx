import Tittle from "../Elements/Tittle";
import AboutDesc from "../Fragments/AboutFragments/AboutDesc";
import Accordions from "../Fragments/AboutFragments/Accordions";

const AboutLayouts = () => {
  return (
    <section className="bg-black bg-aboutpage min-h-screen text-slate-300 bg-cover bg-no-repeat bg-bottom flex items-center justify-center flex-col">
      <Tittle textColor="text-black" textSize="text-3xl">
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
