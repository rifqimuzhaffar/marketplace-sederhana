const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-6 bg-black text-[1rem]"
      name={name}
    />
  );
};

export default Input;
