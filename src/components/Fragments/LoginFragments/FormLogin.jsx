import { FiKey, FiUser } from "react-icons/fi";
import InputGroup from "../../Elements/InputGroup";
import Button from "../../Elements/Button";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col justify-center w-full">
      <InputGroup
        label={<FiUser className="w-6 h-6" />}
        placeholder="Username/email"
        type="text"
        name="name"
      />
      <InputGroup
        label={<FiKey className="w-6 h-6" />}
        placeholder="*********"
        type="password"
        name="password"
      />
      <div className="flex justify-center mt-6">
        <Button color="bg-primary" textSize="text-xl">
          Login
        </Button>
      </div>
    </form>
  );
};
export default FormLogin;
