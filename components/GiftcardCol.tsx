import { GiftCardColProps } from "../types";

export const GiftCardCol = ({ children, className }: GiftCardColProps) => (
  <div
    className={` ${className ? className : ""} 

gap-[40px]
mx-[12px] md:mx-[0]
flex  md:flex-row   justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow lg:pt-[80px] rounded-[24px] z-30 lg:px-[100px]  
lg:mb-[212px] mb-[20px] `}>
    {children}
  </div>
);
