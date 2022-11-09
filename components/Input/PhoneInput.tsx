import { useState } from "react";
import { PhoneInputProps } from "../../types";
import { Button } from "../Button";
import PhoneNumberInput from "../PhoneNumberInput";

export const PhoneInput = ({
  placeholder,
  id,
  type,
  text,
  name,
  onChange,
  className,
  buttonClassName,
  onClick,
  noNumber,
  value,
}: PhoneInputProps) => {
  return (
    <div className="w-full">
      <div
        className={`${className} h-[64px] flex shadow-sm  bg-white rounded-full pl-[24px] pr-[8px]`}
      >
        <PhoneNumberInput
          className="flex-1 border-none focus:bg-white text-[black] focus:outline-none block w-full text-base bg-transparent focus:rounded-full rounded-full sm:text-sm border-gray-300"
          value={value}
          onChange={onChange}
        />
        <Button
          onClick={onClick}
          style={{ backgroundColor: buttonClassName }}
          className={`my-2 lg:h-[49px]  w-[138px] whitespace-nowrap hidden md:flex items-center justify-center `}
        >
          {text}
        </Button>
      </div>
      {noNumber && (
        <span className="text-red text-[13px] font-semibold">
          Please enter phone number{" "}
        </span>
      )}
      <Button
        onClick={onClick}
        className={`my-3 h-[56px]  items-center whitespace-nowrap md:hidden flex justify-center w-full ${buttonClassName}`}
        style={{ backgroundColor: buttonClassName }}
      >
        {text}
      </Button>
    </div>
  );
};
