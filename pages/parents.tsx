/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { Star, Zap } from "react-feather";
import {
  Button,
  Footer,
  NavigationBar,
  WhatsappContactCEO,
} from "../components";
import { PhoneInput } from "../components/Input/PhoneInput";
import { SuspenseContainer } from "../components/Loader";
import { TwoColLayout } from "../components/TwoColLayout";
import { featuresParentsLove, parentFeatures } from "../libs";

const Parents: NextPage = () => {
  return (
    <SuspenseContainer>
      <section className={`bg-[#CCF4A5]  md:h-[1100px] h-[900px] `}>
        <NavigationBar />
        <div className="flex justify-between flex-col lg:flex-row lg:max-w-[1000px]  mt-16 md:mt-0 h-3/4 m-auto items-center md:w-full xl:max-w-[1040px]">
          <div className=" px-[25px] md:px-[0] flex flex-col flex-auto justify-center col-4 max-w-[48ch]">
            <h1 className="md:text-xxl text-[28px] leading-[34px] font-semibold ">
              A better way to give your child pocket money.
            </h1>
            <PhoneInput
              placeholder="Enter phone number"
              text="Download Link"
              className="mt-[40px]"
            />
            <p className="text-sm mt-6">For the future you want to see</p>
          </div>

          <img
            src="/images/parents-hero.svg"
            className="md:w-[480px] md:h-[434px] mt-9 md:mt-0"
            alt={"parent hero"}
          />
        </div>
      </section>
      {parentFeatures.map(
        ({ title, showButton, description, image, position }) => (
          <TwoColLayout
            key={title}
            title={title}
            showButton={showButton}
            description={description}
            image={image}
            position={position}
          />
        )
      )}
      <section className="flex flex-col  px-[20px]  lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto   md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <h3 className="font-semibold md:text-[40px] text-[20px] text-center">
          Features Parents love
        </h3>
        <div className="mt-[24px] md:mt-[40px] grid  grid-cols-1 md:grid-cols-3 mb-[64px] gap-5 gap-y-6">
          {featuresParentsLove.map(
            ({ title, description, color, image }, i) => (
              <div
                key={title}
                className={`${
                  i !== 0 ? "hidden" : "flex"
                } md:bg-white box-shadow  sm:flex  flex-col justify-start min-h-[325px] border-[antiquewhite] rounded-[24px] px-[24px] py-[40px] border-[0.1px] `}>
                <div
                  className={`
                 ${
                   color === "#5BAB0A"
                     ? "bg-[#5BAB0A]"
                     : color === "#FF991B"
                     ? "bg-[#FF991B]"
                     : "bg-[#35AFF7]"
                 }
                  flex  mb-[16px] h-[40px] justify-center items-center rounded-[48px] w-[50px] `}>
                  {image}
                </div>

                <h4 className="font-semibold lg:text-[24px] text-[20px] lg:mt-[40px]  ">
                  {title}
                </h4>
                <p className="text-[14px] lg:text-[15px] mt-[8px]">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </section>
      <section
        className="flex flex-col  px-[20px] 
      lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto  
       md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <h3 className="font-semibold  md:text-[40px] text-[20px]  text-center">
          Get started in <span className="text-[#757575]"> 3 easy steps</span>
        </h3>
        <div className="flex justify-between flex-col md:flex-row h-[1100px]  sm:h-[660px] md:mt-[82px]">
          <div className="bg-[#C7F797] basis-[49%] h-[400px]  md:h-full   px-[48px] pt-[64px] rounded-[16px]">
            <p className="font-semibold md:text-[18px] leading-[31px]">
              Step 1
            </p>
            <p className="md:mt-[21px] font-semibold md:text-[32px] ">
              Download App
            </p>
            <div className="flex flex-col items-center mt-[40%] md:mt-[50%] lg:mt-[35%]">
              <button
                className="font-semibold text-base bg-white w-[145px] 
               sm:w-[162px] lg:w-[172px] h-[52px] sm:h-14 rounded-full flex  justify-center items-center">
                <Image
                  src="/images/appleLogo.svg"
                  width={18}
                  alt="app store"
                  height={19}
                  layout="fixed"
                />{" "}
                <p className="ml-[15px] text-sm">App Store</p>
              </button>
              <button
                className="font-semibold text-base bg-white  w-[145px] mt-[22px] 
               sm:w-[162px] lg:w-[172px] h-[52px] sm:h-14 rounded-full flex items-center justify-center">
                <Image
                  src="/images/playStore.svg"
                  width={18}
                  alt="play store"
                  height={19}
                  layout="fixed"
                />{" "}
                <p className="ml-[15px] text-sm">Playstore</p>
              </button>
            </div>
          </div>
          <div className="bg-[#C5E8FC] basis-[49%] px-[48px] pt-[64px] rounded-[16px] mt-[12px] md:mt-0">
            {" "}
            <p className="font-semibold md:text-[18px] leading-[31px]">
              Step 2
            </p>
            <p className="md:mt-[21px] font-semibold md:text-[32px] ">
              Create account
            </p>
            <img
              alt="grid of parents avatars"
              className="w-full md:w-[400px] h-[80px] mt-[40px]"
              src="/images/avatar-grid.svg"
            />
            <img
              alt="grid of parents avatars"
              className="w-fit mt-[65px] md:mt-[47px] flex justify-center items-center mx-auto"
              src="/images/create-account-half.svg"
            />
          </div>
        </div>
      </section>
      <section
        className={`
    gap-[30px]
       flex  md:flex-row  flex-col justify-around items-center shadow-inner box-shadow py-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
       lg:max-w-[1000px] lg:mb-[100px] md:w-full  m-auto  px-[25px] h-full  bg-white`}>
        <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <p className="text-[18px] mb-[13px]">Step 3</p>
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            Start nurturing your child into a financially responsible adult
          </h3>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <img src={"/images/nutuing-image.svg"} alt={"family"} />
        </div>
      </section>
      <section className="flex flex-col  px-[20px]  lg:max-w-[1000px] lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto   md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <div>
          <h3 className="font-semibold text-[20px] md:text-[40px] md:mb-[16px] mb-[24px]">
            What Happy Parents are saying
          </h3>
          <p className="text-[15px]">
            🎁 Freebies: We are giving 50% off to first 1000 card purchases.
          </p>
          <Button className="my-2 whitespace-nowrap mt-12 w-full sm:w-auto md:flex">
            Get your Card Now!
          </Button>
        </div>
        <div className="mt-[24px] md:mt-[40px] grid   grid-cols-1 md:grid-cols-3 mb-[64px] gap-5 gap-y-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`${
                  i !== 0 ? "hidden" : "flex"
                } md:bg-white box-shadow  sm:flex  flex-col justify-center min-h-[235px] border-[antiquewhite] rounded-[24px] p-[24px] border-[0.1px] `}>
                <div className="flex mb-[16px]">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        fill="#FFCF25"
                        color="#FFCF25"
                        key={i}
                        size={16}
                        className="mr-[6px]"
                      />
                    ))}
                </div>

                <h4 className="font-semibold md:text-[16px] text-[14px]  ">
                  Little is awesome
                </h4>
                <p className="text-[14px] lg:text-[15px] mt-[8px]">
                  I love Little!!!! It`s easy to use, very convenient and so
                  much more exciting for my kids being able to use their full
                  control 🤣 Thanks!!!
                </p>
                <p className="font-semibold text-[14px] lg:text-[15px] mt-[16px]">
                  Oluwafemi Fashikun
                </p>
              </div>
            ))}
        </div>
      </section>

      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  xl:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContactCEO className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </SuspenseContainer>
  );
};

export default Parents;
