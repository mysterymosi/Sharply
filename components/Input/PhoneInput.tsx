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
  buttonClassName,
}: PhoneInputProps) => (
  <div className="w-full">
    <div
      className={`${className} h-[64px] flex shadow-sm  bg-white rounded-full pl-[24px] pr-[8px]`}>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        className=" flex-1 focus:bg-white text-[black] focus:outline-none block w-full text-base bg-transparent focus:rounded-full rounded-full sm:text-sm border-gray-300"
        placeholder={placeholder}
      />
      <Button
        className={`my-2 lg:h-[49px]  w-[138px] whitespace-nowrap hidden md:flex items-center justify-center ${buttonClassName}`}>
        {text}
      </Button>
    </div>
    <Button
      className={`my-3 h-[56px]  items-center whitespace-nowrap md:hidden flex justify-center w-full ${buttonClassName}`}>
      {text}
    </Button>
  </div>
);
