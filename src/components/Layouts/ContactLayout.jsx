import Tittle from "../Elements/Tittle";
import ContactMaps from "../Fragments/ContactFragments/ContactMaps";
import FormContact from "../Fragments/ContactFragments/FormContact";

const ContactLayouts = () => {
  return (
    <section className="bg-black bg-homepage min-h-screen text-white bg-cover object-cover bg-no-repeat bg-bottom flex items-center flex-col justify-center">
      <Tittle textSize="text-3xl">Contact Us</Tittle>
      <h3 className="mt-3 text-lg w-2/3 text-center leading-[20px] lg:w-1/3">
        Feel free to contact us if you have any questions or would like to make
        a reservation !
      </h3>
      <div className="mt-4 mb-8 flex flex-col gap-8 drop-shadow-md bg-black/80 p-8 rounded-xl lg:flex-row md:w-10/12">
        <ContactMaps />
        <FormContact />
      </div>
    </section>
  );
};

export default ContactLayouts;
