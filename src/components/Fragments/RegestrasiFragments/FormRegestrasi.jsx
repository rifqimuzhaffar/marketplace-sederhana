import { FiKey, FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import InputGroup from "../../Elements/InputGroup";
import Button from "../../Elements/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please check your input.");
      return;
    }

    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password,
    };

    try {
      await axios.post("http://localhost:8000/auth/register", userData);
      navigate("/login");
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to register user. Please try again later.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-full"
    >
      <h1>Fullname</h1>
      <InputGroup
        label={<FiUser className="w-6 h-6" />}
        placeholder="Insert username"
        type="text"
        name="username"
      />
      <h1>Email/Username</h1>
      <InputGroup
        label={<MdOutlineMail className="w-6 h-6" />}
        placeholder="user@example.com"
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
      <h1>Confirm Password</h1>
      <InputGroup
        label={<FiKey className="w-6 h-6" />}
        placeholder="*********"
        type="password"
        name="confirmPassword"
      />
      <div className="flex justify-center mt-6">
        <Button color="bg-primary" textSize="text-xl">
          Register
        </Button>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login here
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
