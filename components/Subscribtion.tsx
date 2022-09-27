import { Button } from "./Button";

export const Subscription = () => (
  <div
    className={`bg-yellow 
lg:gap-[100px]  py-[48px]
w-full
flex  md:flex-row  flex-col justify-between items-center shadow-inner md:px-0 px-[25px] box-shadow  
lg:rounded-[24px] z-30 lg:p-[80px]  
lg:mb-[100px] mb-[12px]`}>
    <div className="max-w-[42ch] flex justify-center  md:px-0 flex-col lg:mt-0 ">
      <h3 className="font-semibold text-[24px] leading-[40px] lg:text-[32px] mb-[8px]">
        {" "}
        Want updates straight to your inbox?
      </h3>
      <p className="text-[18px]">
        Subscribe to our newsletter for tips, guides and news
      </p>
    </div>{" "}
    <div className="flex flex-col mt-[20px] md:w-[350px] md:mt-[0px] justify-center items-center w-full lg:w-fill">
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="Enter your email address"
        className="mt-1 mb-[12px]  block w-full shadow-sm sm:text-sm border-gray-300  px-[20px] h-[56px] rounded-[32px]"
      />

      <Button className="my-2 h-[56px] whitespace-nowrap flex w-full items-center justify-center ">
        Subscribe to Newsletter
      </Button>
    </div>
  </div>
);
