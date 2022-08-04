import { PhoneInputProps } from "../../types";
import { Button } from "../Button";

export const PhoneInput = ({
  placeholder,
  id,
  type,
  text,
  name,
  onChange,
  className,
}: PhoneInputProps) => (
  <div className="w-full">
    <div
      className={`${className} h-[64px] flex shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white rounded-full pl-[24px] pr-[8px]`}>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        className=" flex-1 block w-full text-base bg-[transparent] rounded-full rounded-r-md sm:text-sm border-gray-300"
        placeholder={placeholder}
      />
      <Button className="my-2 whitespace-nowrap hidden md:flex">{text}</Button>
    </div>
    <Button className="my-2 h-[56px] items-center whitespace-nowrap md:hidden flex justify-center w-full">
      {text}
    </Button>
  </div>
);
