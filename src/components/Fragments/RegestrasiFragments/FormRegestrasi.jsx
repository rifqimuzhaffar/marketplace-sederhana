import { FiKey, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import InputGroup from "../../Elements/InputGroup";
import Button from "../../Elements/Button";

const FormRegestrasi = () => {
  return (
    <form action="" className="flex flex-col justify-center w-full">
      <h1>Fullname</h1>
      <InputGroup
        label={<FiUser className="w-6 h-6" />}
        placeholder="Insert your name here ..."
        type="text"
        name="name"
      />
      <h1>Email/Username</h1>
      <InputGroup
        label={<MdOutlineMail className="w-6 h-6" />}
        placeholder="Username/email"
        type="email"
        name="email"
      />
      <h1>Password</h1>
      <InputGroup
        label={<FiKey className="w-6 h-6" />}
        placeholder="*********"
        type="password"
        name="password"
      />
      <h1>Confrim Password</h1>
      <InputGroup
        label={<FiKey className="w-6 h-6" />}
        placeholder="*********"
        type="password"
        name="confrimPassword"
      />
      <div className="flex justify-center mt-6">
        <Button color="bg-primary" textSize="text-xl">
          Register
        </Button>
      </div>
    </form>
  );
};
export default FormRegestrasi;
