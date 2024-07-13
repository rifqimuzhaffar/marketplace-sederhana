import { FiKey, FiUser } from "react-icons/fi";
import InputGroup from "../../Elements/InputGroup";
import Button from "../../Elements/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../context/AuthContext";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      const { role } = response.data.data;
      toast.success("Login successful!");
      login(role);
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/product");
      }

      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error.response.data);
      toast.error("Failed to login. Please check your credentials.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-full"
    >
      <InputGroup
        label={<FiUser className="w-6 h-6" />}
        placeholder="user@example.com"
        type="email"
        name="email"
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
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register here
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
