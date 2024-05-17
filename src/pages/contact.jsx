import { FiAtSign, FiMail, FiUser } from "react-icons/fi";
import Tittle from "../components/Elements/Tittle";
import TopNavbar from "../components/Elements/topnavbar";
import useCart from "../hooks/useCart";
import Button from "../components/Elements/Button";

const Contact = () => {
  const { cart, handleUpdateQuantity, handleRemoveItem } = useCart();
  return (
    <div>
      <TopNavbar
        cart={cart}
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveItem={handleRemoveItem}
      />
      <section className="bg-black bg-homepage min-h-screen text-slate-300 bg-cover object-cover bg-no-repeat bg-bottom flex items-center flex-col">
        <Tittle>Contact Us</Tittle>
        <h3 className="mt-3 text-lg w-2/3 text-center leading-[20px]">
          Feel free to contact us if you have any questions or would like to
          make a reservation !
        </h3>
        <div className="mx-6 mt-4 flex flex-col gap-4 bg-slate-400 p-8 rounded-xl mb-8">
          <div className="">
            <img src="../images/about-1.jpg" alt="" />
          </div>
          <div className="">
            <form action="">
              <div className="flex items-center bg-black border-[3px] border-solid border-white mb-2 pl-6">
                <label htmlFor="name">
                  <FiUser className="w-6 h-6" />
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-6 bg-black text-[1.4rem]"
                  name="name"
                />
              </div>
              <div className="flex items-center bg-black border-[3px] border-solid border-white mb-2 pl-6">
                <label htmlFor="email">
                  <FiAtSign className="w-6 h-6" />
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-6 bg-black text-[1.4rem]"
                  name="email"
                />
              </div>
              <div className="flex items-center bg-black border-[3px] border-solid border-white mb-2 pl-6">
                <label htmlFor="message">
                  <FiMail className="w-6 h-6" />
                </label>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full p-6 bg-black text-[1.4rem]"
                  name="message"
                />
              </div>
              <div className="flex justify-center mt-6">
                <Button color="bg-primary" textSize="text-xl">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
