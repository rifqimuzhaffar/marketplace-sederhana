import TopNavbar from "../components/Elements/topnavbar";
import Tittle from "../components/Elements/Tittle";
import CardProducts from "../components/Elements/CardProducts";

const Products = () => {
  return (
    <div>
      <TopNavbar />
      <section className="bg-black bg-homepage min-h-screen text-white bg-cover object-cover bg-no-repeat bg-bottom flex">
        <div className="mx-auto">
          <Tittle />
          <CardProducts />
        </div>
      </section>
    </div>
  );
};
export default Products;
