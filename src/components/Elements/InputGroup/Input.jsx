const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-6 pl-2 pr-6 bg-black text-[1rem]"
      name={name}
    />
  );
};

export default Input;
