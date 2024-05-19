import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const HomeLayouts = () => {
  return (
    <>
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center">
        <main className="py-[1.4rem] px-[10%] max-w-[55rem]">
          <h1 className="text-slate-200 text-[3em] md:text-[4.5em] font-bold leading-[70px] [text-shadow:_1px_1px_3px_rgb(1_1_1_/_50%)]">
            Discover Your Perfect <span className="text-primary">Blend</span>
          </h1>
          <p className="text-[1.3rem] my-[2rem] leading-[25px] text-white">
            Indulge in artisanal flavors, curated for coffee aficionados like
            you. Embrace the richness of our brews and savor the moment.
          </p>
          <div className="flex justify-start gap-4 items-center">
            <Button color="bg-primary">
              <Link to="/product">Shop Now</Link>
            </Button>
            <Button color="bg-white" textColor="text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </main>
      </section>
    </>
  );
};
export default HomeLayouts;
