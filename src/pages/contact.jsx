import Tittle from "../components/Elements/Tittle";
import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import Button from "../components/Elements/Button";
import InputGroup from "../components/Elements/InputGroup";
import { FiAtSign, FiMail, FiUser } from "react-icons/fi";

const Contact = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <div>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center flex-col justify-center">
        <Tittle textSize="text-3xl">Contact Us</Tittle>
        <h3 className="mt-3 text-lg w-2/3 text-center leading-[20px] lg:w-1/3">
          Feel free to contact us if you have any questions or would like to
          make a reservation !
        </h3>
        <div className="mt-4 mb-8 flex flex-col gap-8 drop-shadow-md bg-black/80 p-8 rounded-xl lg:flex-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.6563897278!2d106.6647014985571!3d-6.2293795879813905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1715943658720!5m2!1sid!2sid&output=embed"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:w-[500px] h-96"
          ></iframe>

          <form action="" className="flex flex-col justify-center">
            <InputGroup
              label={<FiUser className="w-6 h-6" />}
              placeholder="Insert your name"
              type="text"
              name="name"
            />
            <InputGroup
              label={<FiAtSign className="w-6 h-6" />}
              placeholder="example@mail.com"
              type="email"
              name="email"
            />
            <InputGroup
              label={<FiMail className="w-6 h-6" />}
              placeholder="Insert your message"
              type="text"
              name="message"
            />
            <div className="flex justify-center mt-6">
              <Button color="bg-primary" textSize="text-xl">
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
