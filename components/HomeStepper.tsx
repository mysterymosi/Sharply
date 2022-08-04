/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { HomeStepProps } from "../types";
import { Stepper } from "./Stepper";

const HomeStep = ({ step, children }: HomeStepProps) => (
  <div className="flex justify-between items-center md:mt-[120px] mt-[80px] md:flex-row flex-col">
    <Stepper
      steps={[1, 2, 3, 4, 5]}
      currentStep={step}
      className="hidden lg:flex"
    />
    {children}
  </div>
);
const Heading = ({ text }: { text: string }) => (
  <h4 className="font-bold text-[20px] md:text-[42px] leading-[24px]   md:leading-[51px]">
    {text}
  </h4>
);
const Details = ({ text }: { text: string }) => (
  <h4 className="mt-[16px] text-[14px] mb-[40px] md:mb-[0]">{text}</h4>
);
export const HomeStepper = () => {
  return (
    <div className="flex justify-between flex-col m-auto lg:max-w-[1000px] w-full xl:max-w-[1250px]  px-[25px]">
      <HomeStep step={1}>
        <div className="max-w-full md:max-w-[40ch]">
          <Heading text={"Create a parent account on Little"} />
          <Details
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu."
            }
          />
          <div className="hidden md:flex">
            <img
              alt="grid of parents avatars"
              className="w-full md:w-[400px] h-[80px] mt-[40px]"
              src="/images/avatar-grid.svg"
            />
          </div>
        </div>
        <img
          alt="phone with register form"
          className="w-full md:w-[483px]  h-[400px] mt-[30px]"
          src="/images/create-account-phone.svg"
        />
      </HomeStep>
      <HomeStep step={2}>
        <div className="max-w-full md:max-w-[40ch]">
          <Heading text={"Add your child"} />
          <Details
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu."
            }
          />
        </div>
        <div className="md:w-[483px] px-[20px] md:px-0 w-full basis-4/12">
          <div className="flex flex-col justify-between bg-white w-full md:w-[320px] p-[19px]  h-[145px] rounded-[16px] mb-[8px]">
            <div className=" flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/images/henry.svg"
                  width={38}
                  alt="parent henry"
                  height={38}
                  layout="intrinsic"
                />{" "}
                <p className="font-semibold text-[15px] ml-[11px]">Henry</p>
              </div>
              <div>
                <p className="text-[#5BAB0A] font-semibold text-[17px]">
                  ₦50,000.00
                </p>
                <p className="font-normal text-[11px]">Available balance</p>
              </div>
            </div>
            <div className="h-[0.9px] bg-[#F0F0F0]"></div>
            <div className="flex justify-between">
              <p className="text-[#424242] text-[15px]"> Card balance</p>
              <p className=" text-[15px]"> ₦1,000.00</p>
            </div>
          </div>
          <div className="basis-1/4 flex flex-col justify-between bg-white w-full md:w-[320px] p-[19px]  h-[145px] rounded-[16px] relative">
            <div className=" flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/images/henry.svg"
                  width={38}
                  alt="parent stephenie"
                  height={38}
                  layout="fixed"
                />{" "}
                <p className="font-semibold text-[15px] ml-[11px]">Stephanie</p>
              </div>
              <div>
                <p className="text-[#5BAB0A] font-semibold text-[17px]">
                  ₦50,000.00
                </p>
                <p className="font-normal text-[11px]">Available balance</p>
              </div>
            </div>
            <div className="h-[0.9px] bg-[#F0F0F0]"></div>
            <div className="flex justify-between">
              <p className="text-[#424242] text-[15px]"> Card balance</p>
              <p className=" text-[15px]"> ₦5,000.00</p>
            </div>
            <div className="absolute bottom-[-20%] pb-[5px] right-[39%] md:right-[35%] bg-[#87C24C] md:w-[68px] w-[60px]  h-[60px]  md:h-[68px] flex items-center justify-center text-[white] rounded-full text-[35px]">
              {" "}
              +{" "}
            </div>
          </div>
        </div>
      </HomeStep>

      <HomeStep step={3}>
        <div className="max-w-full md:max-w-[40ch]">
          <Heading text={"Order Little Card for your child"} />
          <Details
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu."
            }
          />
        </div>
        <div className="items-center justify-center md:basis-1/4 md:w-[483px] relative flex">
          <img
            alt="green little card"
            src="/images/cards.svg"
            className="md:w-[313px] w-[140px] h-full md:h-[342px]   "
          />
        </div>
      </HomeStep>
      <HomeStep step={4}>
        <div className="max-w-full md:max-w-[40ch]">
          <Heading text={" Fund your child’s Little wallet"} />
          <Details
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu."
            }
          />
        </div>
        <div className="basis-1/4">
          <img
            alt="fund child wallet"
            className="md:w-[483px]  px-[30px] md:px-0    w-full h-[400px] md:h-[484px]"
            src="/images/fund-wallet-phone.svg"
          />
        </div>
      </HomeStep>
      <HomeStep step={5}>
        <div className="max-w-full md:max-w-[40ch]">
          <Heading
            text={"Watch them grow into a financially responsible adult"}
          />
          <Details
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu."
            }
          />
        </div>
        <img
          alt="watch child grow"
          className="lg:w-[483px] sm:w-[300px] px-[30px] md:px-0  w-full h-full md:h-[484px]"
          src="/images/watch-grow.svg"
        />
      </HomeStep>
    </div>
  );
};
