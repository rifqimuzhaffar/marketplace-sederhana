import { FiAtSign, FiMail, FiUser } from "react-icons/fi";
import InputGroup from "../../Elements/InputGroup";
import Button from "../../Elements/Button";

const FormContact = () => {
  return (
    <form action="" className="flex flex-col justify-center w-full">
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
  );
};
export default FormContact;
