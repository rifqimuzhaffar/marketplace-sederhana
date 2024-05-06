import Button from "../Button";

const HomeHero = () => {
  return (
    <>
      <main className="py-[1.4rem] px-[10%] max-w-[55rem]">
        <h1 className="text-slate-200 text-[3em] md:text-[4.5em] font-bold leading-[70px] [text-shadow:_1px_1px_3px_rgb(1_1_1_/_50%)]">
          Discover Your Perfect <span className="text-primary">Blend</span>
        </h1>
        <p className="text-[1.3rem] my-[2rem] leading-[25px] text-white">
          Indulge in artisanal flavors, curated for coffee aficionados like you.
          Embrace the richness of our brews and savor the moment.
        </p>
        <div className="flex justify-start gap-4 items-center">
          <Button color="bg-primary">Shop Now</Button>
          <Button color="bg-white" textColor="text-primary">
            Contact Us
          </Button>
        </div>
      </main>
    </>
  );
};
export default HomeHero;
