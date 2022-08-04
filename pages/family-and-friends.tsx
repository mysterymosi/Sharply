/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  SuspenseContainer,
  Accordion,
  WhatsappContact,
} from "../components";

import { giftLinkFaqs, giftlinkOptions, shareGiftlinkOptions } from "../utils";

const FamilyAndFriends: NextPage = () => {
  return (
    <SuspenseContainer>
      <section
        className={`  sm:h-[868px] lg:h-[800px] md:h-[600px] h-[950px] `}>
        <NavigationBar />
        <div className="  px-[25px] flex lg:flex-row flex-col  h-5/6 justify-center text-black ">
          <div className="flex justify-center flex-col">
            <h1 className="md:text-xxl  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              Get family & friends to send money for special occasions
            </h1>
            <div className="max-w-[440px]">
              <p className="mt-6 text-black font-normal text-sm  ">
                Birthday coming up? Graduation? Or your child just really wants
                that latest game? Create giftlinks to receive money from family
                & friends for any and everything
              </p>
              <Button className="my-2 whitespace-nowrap w-full mt-12 md:w-fit sm:w-auto md:flex">
                See how it works
              </Button>
            </div>
          </div>

          <img
            src={"/images/family-hero.svg"}
            className="w-[480px]"
            alt={"family"}
          />
        </div>
      </section>

      <section className="lg:max-w-[1200px] md:w-full  m-auto  h-full ">
        <p className="font-semibold lg:text-[24px] text-[16px] text-[#424242} mb-[24px] text-center">
          Step 1
        </p>
        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Create a Giftlink on Little
        </h3>
        <div
          className={`
        bg-[#E1E4FE]
        gap-[40px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow lg:pt-[80px] rounded-[24px] z-30 lg:px-[100px]  
      lg:mb-[100px] mb-[20px] `}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[38px]">
              {" "}
              Create Giftlink
            </h3>
            <p className="text-[18px] mb-[13px]">
              Creating a giftlink is really easy on Little. You can add the
              title, a description of what the gift money is for and include
              pictures.
            </p>

            <ul className="flex flex-col mt-[40px]">
              {giftlinkOptions.map(({ name, icon }) => (
                <li className="flex items-center mb-[24px]" key={name}>
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full mr-[20px]">
                    <img src={icon} alt="name" />
                  </div>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <img src={"/images/giftlink.svg"} alt={"family"} />
          </div>
        </div>
      </section>
      <section className="  lg:max-w-[1200px] md:w-full  m-auto mb-[80px] md:mb-0  h-full">
        <p className="font-semibold lg:text-[24px] text-[16px] text-[#424242} mb-[24px] text-center">
          Step 2
        </p>
        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Share secure giftlink with family & friends
        </h3>
        <div
          className={`
        bg-[#F9F2B4]
        gap-[40px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow pb-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
      lg:mb-[100px]  `}>
          <div className="max-w-[40ch] flex justify-center  pt-[100px]  md:px-0 flex-col order-last md:order-1  sm:mb-[48px] lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[38px]">
              {" "}
              Share Giftlink
            </h3>
            <p className="text-[18px] mb-[13px]">
              Share the giftlink with family & friends for them to easily send
              your child money and even add a personal message.
            </p>

            <ul className="flex flex-col mt-[40px]">
              {shareGiftlinkOptions.map(({ name, icon }) => (
                <li className="flex items-center mb-[24px]" key={name}>
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full mr-[20px]">
                    <img src={icon} alt="name" />
                  </div>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:mt-[0px] mb-[34px] justify-center items-center order-2">
            <img src={"/images/share-giftlink.svg"} alt={"family"} />
          </div>
        </div>
      </section>
      <section className="  lg:max-w-[1200px] md:w-full  m-auto  h-full">
        <p className="font-semibold lg:text-[24px] text-[16px] text-[#424242} mb-[24px] text-center">
          Step 3
        </p>
        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Receive & track gift money.
        </h3>
        <div
          className={`
        bg-[#E1F7FE]
        gap-[40px]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner 
       md:px-0 px-[25px] box-shadow pb-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
      lg:mb-[100px]  `}>
          <div className="max-w-[40ch] flex justify-center  lg:pt-[100px]  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[38px]">
              {" "}
              Receive Gifts
            </h3>
            <p className="text-[18px] mb-[13px]">
              Every amount sent with the giftlink is automatically credited to
              your child’s Little account and you’ll be notified immediately.
            </p>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <img src={"/images/gift.svg"} alt={"family"} />
          </div>
        </div>
      </section>
      <section className="  lg:max-w-[1200px] md:w-full  m-auto  h-full">
        <div
          className={`
        md:gap-[100px]
       flex  md:flex-row  flex-col-reverse md:justify-around items-center  md:px-0 px-[25px]  pb-[80px] rounded-[24px] z-30 lg:px-[50px] lg:mt-[100px]  lg:my-[80px] 
    `}>
          <div className="lg:max-w-[40ch] flex   md:px-0 flex-col order-last md:order-1 sm:mb-[48px]">
            <img
              src={"/images/faq.svg"}
              alt={"family"}
              className="md:flex justify-center hidden"
            />
            <h3 className="font-semibold text-[20px] lg:text-[38px] lg:mt-[40px]">
              Frequently Asked Questions
            </h3>
            <p className="text-[18px] mb-[13px] md:flex  hidden">
              Need more answers? Click here
            </p>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center lg:w-1/2 order-2 w-full">
            <Accordion list={giftLinkFaqs} />
          </div>
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

export default FamilyAndFriends;
