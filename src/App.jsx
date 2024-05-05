import TopNavbar from "./components/Elements/topnavbar";
import HomeHero from "./components/Elements/HomeHero";

function App() {
  return (
    <>
      <TopNavbar></TopNavbar>

      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center">
        <HomeHero></HomeHero>
      </section>
    </>
  );
}

export default App;
