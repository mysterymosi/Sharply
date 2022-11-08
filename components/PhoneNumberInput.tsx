import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import { PhoneNumberInputProps } from "../types";

const PhoneNumberInput = ({
  country = "NG",
  value,
  onChange,
  placeholder = "Enter phone number",
}: PhoneNumberInputProps) => {
  return (
    <PhoneInput
      country={country}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
    />
  );
};

export default PhoneNumberInput;
