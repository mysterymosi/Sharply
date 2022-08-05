/* eslint-disable @next/next/no-img-element */
import { HomeStepProps } from "../types";
import { FadeInWhenVisible } from "../utils";
import { Stepper } from "./Stepper";

const HomeStep = ({ step, children }: HomeStepProps) => (
  <div
    className={`grid md:grid-cols-6 grid-cols-1 gap-0 md:gap-6  ${
      step === 1 ? "" : "md:mt-[200px]"
    } `}>
    <Stepper
      steps={[1, 2, 3, 4, 5]}
      currentStep={step}
      className="hidden lg:flex"
    />
    {children}
  </div>
);
const Heading = ({ text }: { text: string }) => (
  <h4 className="font-bold text-[20px] lg:text-[48px] lg:leading-[51px] leading-[24px]">
    {text}
  </h4>
);
const Details = ({ text }: { text: string }) => (
  <h4 className="mt-[16px] text-[14px] mb-[40px] md:mb-[0]">{text}</h4>
);
const homeStepList = [
  {
    heading: "Create a parent account on Little",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
    img: (
      <img
        alt="phone with register form"
        src="/images/create-account-phone.svg"
        className="w-full mx-auto md:h-[400px] lg:h-[600px]"
      />
    ),
  },
  //
  {
    heading: "Add your child",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
    img: (
      <img
        alt="balance boxes of two parents"
        src="/images/add-child-balance.svg"
        className="w-full mx-auto md:h-[400px] lg:h-[600px]"
      />
    ),
  },
  {
    heading: "Order Little Card for your child",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
    img: (
      <img
        alt="green little card"
        src="/images/cards.svg"
        className="w-full md:w-[200px] lg:w-full m-auto"
      />
    ),
  },
  {
    heading: "Fund your child’s Little wallet",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
    img: (
      <img
        className="w-full mx-auto md:w-[300px]  md:h-[400px]  lg:h-[600px]"
        alt="fund child wallet"
        src="/images/fund-wallet-phone.svg"
      />
    ),
  },
  {
    heading: "Watch them grow into a financially responsible adult",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
    img: (
      <img
        alt="watch child grow"
        className="w-full md:w-[200px]  lg:w-full m-auto"
        src="/images/watch-grow.svg"
      />
    ),
  },
];
export const HomeStepper = () => {
  return (
    <div className="flex justify-between flex-col m-auto lg:max-w-[1000px] w-full xl:max-w-[1200px] lg:py-[120px] md:py-[100px] px-[40px] lg:pr-[60px] xl:px-[25px]">
      {homeStepList.map(({ heading, details, img }, i) => (
        <HomeStep step={i + 1} key={heading}>
          <div className="max-w-full md:max-w-[43ch] m-auto  col-span-3">
            <Heading text={heading} />
            <Details text={details} />
            <div className="hidden md:flex">
              {i === 0 && (
                <img
                  alt="grid of parents avatars"
                  className="w-full md:w-[400px] h-[80px] mt-[40px]"
                  src="/images/avatar-grid.svg"
                />
              )}
            </div>
          </div>
          <div className="md:w-[340px] w-full mx-auto flex justify-center mb-8 md:mb-0">
            <FadeInWhenVisible> {img}</FadeInWhenVisible>
          </div>
        </HomeStep>
      ))}
    </div>
  );
};
