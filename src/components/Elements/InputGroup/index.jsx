import Input from "./Input";
import Label from "./Label";

const InputGroup = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="flex items-center bg-black border-[3px] border-solid border-white mb-4 pl-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};
export default InputGroup;
