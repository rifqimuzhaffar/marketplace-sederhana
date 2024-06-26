import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutDesc = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center px-4"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h3 className="text-3xl font-bold mb-6">
        What makes our coffee <span className="text-yellow-400">special</span> ?
      </h3>
      <p className="text-lg">
        We provide high quality coffee, freshly made. Complicated proscesses are
        involved in the production of coffee. Until we can serve it to others.
      </p>
    </div>
  );
};

export default AboutDesc;
