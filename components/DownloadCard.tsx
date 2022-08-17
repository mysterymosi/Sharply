import Image from "next/image";
import { ClassNameProps } from "../types";
import { FadeInWhenVisible } from "../utils";

export const DownloadCard = ({ className }: ClassNameProps) => {
  return (
    <div
      className={`${className} flex flex-col bg-blue h-[600px]  px-[30px] sm:px-0 lg:max-w-[1000px] md:w-full xl:max-w-[1350px]  sm:h-[750px] lg:rounded-[48px]`}>
      <Image
        src="/images/downloadCard.svg"
        width={241.82}
        alt="logo"
        height={240}
        priority={true}
        layout="fixed"
      />

      <FadeInWhenVisible>
        <p className="mt-12 font-semibold text-lg lg:text-[40px] lg:min-w-[1px] text-center lg:max-w-[26ch] lg:leading-[44px]">
          {" "}
          Good money habits for your child starts here/ Empower your child to
          financial responsibility.{" "}
        </p>
      </FadeInWhenVisible>

      <div className="flex mt-16">
        <button className="mr-4 font-semibold text-base bg-white w-[145px]  sm:w-[162px] lg:w-[172px] h-[52px] sm:h-14 rounded-full flex  transition ease-in-out delay-150 hover:scale-110 duration-300 justify-center items-center">
          <Image
            priority={true}
            src="/images/appleLogo.svg"
            width={18}
            alt="app store"
            height={19}
            layout="fixed"
          />{" "}
          <p className="ml-[15px] text-sm">Download</p>
        </button>
        <button className="font-semibold text-base bg-white  w-[145px]  sm:w-[162px] lg:w-[172px] h-[52px] transition ease-in-out delay-150 hover:scale-110 duration-300 sm:h-14 rounded-full flex items-center justify-center">
          <Image
            src="/images/playStore.svg"
            width={18}
            alt="play store"
            height={19}
            priority={true}
            layout="fixed"
          />{" "}
          <p className="ml-[15px] text-sm">Download</p>
        </button>
      </div>
    </div>
  );
};
