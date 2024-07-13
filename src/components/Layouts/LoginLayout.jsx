import Tittle from "../Elements/Tittle";
import FormLogin from "../Fragments/LoginFragments/FormLogin";

const LoginLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center object-cover min-h-screen text-white bg-black bg-bottom bg-no-repeat bg-cover bg-loginpage">
      <Tittle textSize="text-4xl">Login</Tittle>
      <h3 className="mt-3 text-lg w-2/3 text-center leading-[20px] lg:w-1/3">
        "Welcome to TCafe! Log in and start your day with a delicious cup of
        coffee"
      </h3>
      <div className="flex flex-col gap-8 p-8 mt-4 mb-8 drop-shadow-md bg-black/80 rounded-xl lg:flex-row md:w-4/12">
        <FormLogin />
      </div>
    </section>
  );
};

export default LoginLayout;
