import Image from "next/image";

export const WhatsappContact = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return title === "parents" ? (
    <div className={`${className} md:flex-row flex-col flex md:items-center`}>
      <p className="mb-[16px] lg:mb-0"> Want to know more? Chat us on</p>
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
  ) : (
    <div className={`${className} md:flex-row flex-col flex md:items-center`}>
      <p className="mb-[16px] lg:mb-0"> Talk directly with the CEO,</p>
      as a parent she’d love to hear from you and answer any questions you might
      have.{" "}
      <button className="bg-green transition ease-in-out delay-150 hover:scale-110 duration-300 md:mx-5 text-white flex w-full sm:w-[162px] text-base justify-center rounded-full h-[56px] items-center mb-[16px] lg:mb-0">
        <Image
          layout="fixed"
          src={"/images/whatsapp.svg"}
          width={20}
          alt={"whatsapp"}
          height={21}
        />
        <p className="ml-[10px] text-sm font-semibold">Whatsapp</p>
      </button>
    </div>
  );
};
