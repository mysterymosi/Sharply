/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
} from "../components";
import { PhoneInput } from "../components/Input/PhoneInput";
import { SuspenseContainer } from "../components/Loader";

const Kids: NextPage = () => {
  return (
    <SuspenseContainer>
      <section
        className={`  sm:h-[868px] lg:h-[800px] md:h-[600px] h-[950px] bg-[#F6ED97]`}>
        <NavigationBar />
        <div className="  px-[25px] flex lg:flex-row flex-col  h-5/6 justify-center text-black ">
          <div className="flex justify-center flex-col">
            <h1 className="md:text-xxl  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              Join the money-smart cool kids.
            </h1>
            <div className="max-w-[440px]">
              <p className="mt-6 text-black font-normal text-sm  ">
                There is no better time for you to start being cool. With
                Little, you get real-life experiences with money from earning
                pocket money, to spending with your own debit card.
              </p>
              <PhoneInput
                placeholder="Enter your phone number"
                text="Get Started"
                className="mt-[40px]"
              />
              <p className="text-sm mt-6 text-center md:text-start">
                For kids aged 9-18.
              </p>
            </div>
          </div>

          <img
            src={"/images/smart-money.svg"}
            className="w-[480px]"
            alt={"family"}
          />
        </div>
      </section>
      <section
        className={`
        gap-[30px]
       flex  md:flex-row  flex-col justify-around items-center  py-[80px] rounded-[24px] z-30   mb-[20px] md:px-0 px-[25px]
       lg:max-w-[1100px] lg:mb-[100px] md:w-full  m-auto   h-full `}>
        <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            Your own first debit card!
          </h3>
          <p className="text-[18px] mb-[13px]">
            With Little, you can own your own debit card that allows you to
            spend your pocket money anywhere; at a POS, ATM, and ONLINE.
          </p>
          <Button className="my-2 whitespace-nowrap w-full mt-12 md:w-fit sm:w-auto md:flex">
            Get your Card Now!
          </Button>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <img src={"/images/debit-card-phone.svg"} alt={"family"} />
        </div>
      </section>
      <section
        className={`
        gap-[30px]
       flex  md:flex-row  flex-col justify-around items-center  py-[80px] rounded-[24px] z-30 md:px-0 px-[25px]  mb-[20px]
       lg:max-w-[1100px] lg:mb-[100px] md:w-full  m-auto   h-full `}>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-last md:order-1 ">
          <img src={"/images/earn-extra.svg"} alt={"family"} />
        </div>
        <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col  mt-[48px] order-2 sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            Earn a little extra
          </h3>
          <p className="text-[18px] mb-[13px]">
            Do more and get rewarded. Completing tasks and milestones is fun
            with Little. Your parents can set up tasks for you to earn extra
            pocket money when you complete them.
          </p>
        </div>
      </section>
      <section
        className={`
        bg-[#E1E4FE]
        gap-[40px]
       flex  md:flex-row  flex-col justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow pt-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
       lg:max-w-[1200px] lg:mb-[100px] md:w-full  m-auto  px-[25px] h-full `}>
        <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            Get gift money for special days
          </h3>
          <p className="text-[18px] mb-[13px]">
            Is your birthday coming up? Mum & dad don’t have to “keep” gift
            money for you again. Create gift links for friends and family to
            send you money directly on Little. It’s your money, you should keep
            it.{" "}
          </p>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <img src={"/images/gift-money.svg"} alt={"family"} />
        </div>
      </section>

      <DownloadCard className="lg:max-w-[1200px] md:w-full  lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  xl:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContact className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </SuspenseContainer>
  );
};

export default Kids;
