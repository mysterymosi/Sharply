import { useRouter } from "next/router";
import { ChevronsRight } from "react-feather";
import { TwoColLayoutProps } from "../types";
import { FadeInWhenVisible } from "../utils";

export const TwoColLayout = ({
  showButton,
  title,
  description,
  image,
  position,
}: TwoColLayoutProps) => {
  const router = useRouter();
  return (
    <section
      className={`
      ${showButton ? "lg:mt-[-207px]" : ""}
       ${position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}
      } flex lg:gap-[120px]   flex-col justify-around items-center shadow-inner box-shadow py-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
      lg:max-w-[1000px] md:w-full xl:max-w-[1350px]  lg:mb-[100px] md:w-full xl:max-w-[1100px] m-auto  px-[25px] h-full  bg-white`}
    >
      <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
        <FadeInWhenVisible>
          {" "}
          <h3 className="font-semibold text-[24px] lg:text-[38px]">{title}</h3>
          <p className="text-[18px]">{description}</p>
          {showButton && (
            <p
              onClick={() => router.push("/little-cards")}
              className="text-primary items-center  gap-2 lg:justify-start justify-center  font-semibold cursor-pointer hidden lg:w-[172px]  mt-12 w-fill md:w-fit sm:w-auto md:flex md:mb-0 mb-[48px] text-[20px]"
            >
              Learn More
              <ChevronsRight />
            </p>
          )}
        </FadeInWhenVisible>
      </div>
      <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
        <FadeInWhenVisible>
          <img src={image} alt={title} className="w-[420px] h-[492]" />
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
