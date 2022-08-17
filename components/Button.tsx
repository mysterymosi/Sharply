import { ButtonTypes } from "../types";

export const Button = ({
  onClick,
  className,
  children,
  disabled,
}: ButtonTypes) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${className} min-w-[148px] cursor-pointer bg-primary py-2.5 rounded-full px-[21px] h-[56px] text-white font-semibold
    transition ease-in-out delay-150 hover:scale-110 duration-300 justify-center items-center `}>
    {children}
  </button>
);
