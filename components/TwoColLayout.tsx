/* eslint-disable @next/next/no-img-element */
import { Button } from "./Button";
type TwoColLayoutProps = {
  showButton?: boolean;
  title: string;
  description: string;
  image: string;
  position: string; //the position of the text
};
export const TwoColLayout = ({
  showButton,
  title,
  description,
  image,
  position,
}: TwoColLayoutProps) => {
  return (
    <section
      className={`
      ${showButton ? "lg:mt-[-207px]" : ""}
    
       ${position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}
      } flex   flex-col justify-around items-center shadow-inner box-shadow py-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
       lg:max-w-[1000px] lg:mb-[100px] md:w-full xl:max-w-[1200px] m-auto  px-[25px] h-full  bg-white`}>
      <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
        <h3 className="font-semibold text-[24px] lg:text-[38px]">{title}</h3>
        <p className="text-[18px]">{description}</p>
        {showButton && (
          <Button className="my-2 whitespace-nowrap mt-12 md:w-fit md:flex lg:mb-0 mb-[50px]">
            Learn more
          </Button>
        )}
      </div>
      <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};
