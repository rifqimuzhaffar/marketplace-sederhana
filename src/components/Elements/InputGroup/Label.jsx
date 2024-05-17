import { FiUser } from "react-icons/fi";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="mr-5">
      {children}
      {/* <FiUser className="w-6 h-6" /> */}
    </label>
  );
};

export default Label;
