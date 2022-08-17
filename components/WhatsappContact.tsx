import Image from "next/image";
import { ClassNameProps } from "../types";

export const WhatsappContact = ({ className }: ClassNameProps) => {
  return (
    <div className={`${className} md:flex-row flex-col flex md:items-center`}>
      <p className="text-base mb-[16px] lg:mb-0">
        {" "}
        Want to know more? Text us on
      </p>
      <button className="bg-green transition ease-in-out delay-150 hover:scale-110 duration-300 md:mx-5 text-white flex w-full sm:w-[162px] text-base justify-center rounded-full h-[56px] items-center mb-[16px] lg:mb-0">
        <Image
          layout="fixed"
          src={"/images/whatsapp.svg"}
          width={20}
          alt={"whatsapp"}
          height={21}
        />{" "}
        <p className="ml-[15px] text-sm font-semibold">Whatsapp</p>
      </button>
      we promise to respond within 5 minutes
    </div>
  );
};
