import { ButtonTypes } from "../types";

export const Button = ({
  variant,
  onClick,
  className,
  children,
  disabled,
  style,
  ...props
}: ButtonTypes) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      ...style,
      backgroundColor: disabled ? "#EAEAEA" : "",
      color: disabled ? "#323243" : "",
      opacity: disabled ? "0.2" : "",
    }}
    className={`min-w-[148px] cursor-pointer ${
      variant === "primary" && "bg-blue"
    } ${variant === "secondary" && "bg-white"} ${
      variant === "default" && "bg-grey"
    } ${variant === "default" && "text-black"} ${
      variant === "default" && "opacity-60"
    }  py-2.5 rounded-[10px] px-[30px] h-[56px] text-[15px] ${
      variant === "primary" && "text-white"
    } ${variant === "secondary" && "text-blue"} ${
      variant === "black" && "bg-black"
    } ${variant === "black" && "text-white"}
     font-semibold
    transition ease-in-out delay-150 hover:scale-110 duration-300 justify-center items-center ${className} `}
    {...props}
  >
    {children}
  </button>
);
