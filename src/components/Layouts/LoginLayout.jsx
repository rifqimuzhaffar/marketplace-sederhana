import Tittle from "../Elements/Tittle";
import FormLogin from "../Fragments/LoginFragments/FormLogin";

const LoginLayout = () => {
  return (
    <section className="bg-black bg-homepage min-h-screen text-white bg-cover object-cover bg-no-repeat bg-bottom flex items-center flex-col justify-center">
      <Tittle textSize="text-4xl">Login</Tittle>
      <h3 className="mt-3 text-lg w-2/3 text-center leading-[20px] lg:w-1/3">
        "Welcome to TCafe! Log in and start your day with a delicious cup of
        coffee"
      </h3>
      <div className="mt-4 mb-8 flex flex-col gap-8 drop-shadow-md bg-black/80 p-8 rounded-xl lg:flex-row md:w-10/12">
        <FormLogin />
      </div>
    </section>
  );
};

export default LoginLayout;
