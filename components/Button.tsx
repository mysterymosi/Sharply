import Image from "next/image";
import { ButtonTypes } from "../types";
import { whatsappLink } from "../utils";

export const Button = ({
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
    style={style}
    className={`min-w-[148px] cursor-pointer bg-primary  py-2.5 rounded-full px-[21px] h-[56px] text-white font-semibold
    transition ease-in-out delay-150 hover:scale-110 duration-300 justify-center items-center ${className} `}
    {...props}>
    {children}
  </button>
);
export const WhatsappButton = (
  <a target={"_blank"} href={whatsappLink}>
    <button className="bg-green transition ease-in-out delay-150 hover:scale-110 duration-300 md:mx-5 text-white flex w-full sm:w-[162px] text-base justify-center rounded-full h-[56px] items-center mb-[16px] lg:mb-0">
      <Image
        layout="fixed"
        src={"/images/whatsapp.svg"}
        width={20}
        alt={"whatsapp"}
        height={21}
      />{" "}
      <p className="ml-[10px] text-sm font-semibold">Whatsapp</p>
    </button>
  </a>
);
