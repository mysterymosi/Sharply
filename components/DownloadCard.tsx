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

      <p className="mt-12 font-semibold text-lg lg:text-[40px] lg:min-w-[1px] text-center lg:max-w-[26ch] lg:leading-[44px]">
        Good money habits for your child starts here. Empower your child to
        financial responsibility.{" "}
      </p>
    </div>
  );
};
