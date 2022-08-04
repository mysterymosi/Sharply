import { ButtonTypes } from "../../types";

export const Button = ({
  onClick,
  className,
  children,
  disabled,
}: ButtonTypes) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${className} cursor-pointer bg-primary py-2.5 rounded-full px-7 text-white font-semibold `}>
    {children}
  </button>
);
