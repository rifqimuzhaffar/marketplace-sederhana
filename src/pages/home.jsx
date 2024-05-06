import TopNavbar from "../components/Elements/topnavbar";
import HomeHero from "../components/Elements/HomeHero";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center">
        <HomeHero />
      </section>
    </>
  );
};
export default Home;
