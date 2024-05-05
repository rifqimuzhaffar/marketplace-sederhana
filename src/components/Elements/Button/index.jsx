import PropTypes from "prop-types";

const Button = (props) => {
  const { children, color = "bg-black", textColor = "text-white" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} ${textColor} hover:bg-black`}
      type="submit"
    >
      {children}
    </button>
  );
};

// Definisi propTypes untuk memvalidasi props
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
