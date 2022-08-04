/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
} from "../components";
import { Accordion } from "../components/Accordion";
import { HomeStepper } from "../components/HomeStepper";
import { SuspenseContainer } from "../components/Loader";
import { giftLinkFaqs, giftlinkOptions, shareGiftlinkOptions } from "../libs";

const LittleCards: NextPage = () => {
  const cardWorkingList = [
    {
      title: "Get Instant Notification",
      description:
        "Get instant notifications for every transaction your child does that show how much and where they are spending",
      image: "/images/little-instant-notifications.svg",
    },
    {
      title: "Set spend and withdrawal limits",
      description:
        "Set weekly or monthly limits on how much your child can spend with their card. Easily enable and disable the card for use online and at ATMs or POS points. Block their cards from use at select stores & merchants",
      image: "/images/withdrawal-limit.svg",
    },
    {
      title: "Safe & secure",
      description:
        "Little Cards are fully safe & secure for transactions. You can easily block the card directly from the app if it ever goes missing.",
      image: "/images/block-card.svg",
    },
  ];
  return (
    <SuspenseContainer>
      <section
        className={` sm:h-[868px]  little-card-gradient lg:h-[1100px] md:h-[600px] h-[450px] `}>
        <NavigationBar />
        <div className="px-[25px] flex lg:flex-row flex-col md:h-full h-4/5 justify-center text-black ">
          <div className="flex justify-center flex-col  items-center ">
            <h1 className="md:text-xxl  max-w-[16ch] text-[28px] leading-[34px] font-semibold md:text-center lg:mb-[80px] ">
              A debit card... with a Little more
            </h1>
            <img
              src={"/images/little-card-hero.svg"}
              className="lg:mt-[20px] mt-[40px]"
              alt={"little card hero"}
            />
          </div>
        </div>
      </section>
      <div className="lg:max-w-[800px] md:w-full  m-auto  h-full ">
        <p className=" lg:text-[24px] text-[16px] text-[#424242] md:my-[120px] px-[24px] mt-0  font-medium mb-[58px]">
          The Little card works just like a regular debit card but for children.
          It gives an added advantage of being able to set boundaries like
          spending limits, track spending location and so much more.
        </p>
      </div>

      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full ">
        <div
          className={`
        py-[48px]
        gap-[40px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow lg:pt-[80px] rounded-[24px] z-30
        lg:p-[100px]  
      lg:mb-[100px] mb-[12px]`}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1  lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[32px]">
              {" "}
              Little Verve Card
            </h3>
            <p className="text-[18px] mb-[13px]">
              This card can be enabled for all types of debit card transactions
              like paying online, using a POS, or withdrawing from an ATM.
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 w-fit hidden md:flex  sm:w-fill ">
              Order Card
            </Button>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <img src={"/images/verve-white.svg"} alt={"family"} />
          </div>
          <Button className="my-2 whitespace-nowrap mt-12 w-fit md:hidden flex  sm:w-fill ">
            Order Card
          </Button>
        </div>
      </section>
      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full ">
        <div
          className={`
        gap-[40px]  py-[48px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow  
       rounded-[24px] z-30 lg:p-[100px]  
       lg:mb-[100px] mb-[12px]`}>
          <Button className="my-2 whitespace-nowrap mt-12 w-fit md:hidden flex  sm:w-fill ">
            Order Card
          </Button>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center">
            <img src={"/images/verve-green.svg"} alt={"green verve card"} />
          </div>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[32px]">
              {" "}
              Little Verve Card
            </h3>
            <p className="text-[18px] mb-[13px]">
              This card can be enabled for all types of debit card transactions
              like paying online, using a POS, or withdrawing from an ATM.
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 w-fit  hidden md:flex  sm:w-fill ">
              Order Card
            </Button>
          </div>
        </div>
      </section>
      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full ">
        <div
          className={`
        gap-[40px]
        md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-between items-center  md:px-0 lg:pt-[80px] rounded-[24px] z-30 
      lg:mb-[100px] mb-[20px] `}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col  lg:mt-[48px] sm:mb-[48px] px-[25px]">
            <h3 className="font-semibold text-[24px] lg:text-[38px]">
              {" "}
              Schools Trust us & Parents Love us
            </h3>
            <p className="text-[18px] mb-[13px]">
              Little can be used in school and out of school, for online and
              offline expenses Join over 15,000+ parents that are intentional
              about their children
            </p>
            <Button className="my-2 whitespace-nowrap mt-12  mb-[80px] md:mb-0 w-full md:w-fit md:flex">
              See our partner schools
            </Button>
          </div>
          <div className="flex basis-3/6 mt-[20px] md:mt-[0px]  justify-center items-center">
            <img src={"/images/school-children.svg"} alt={"family"} />
          </div>
        </div>
        <h4 className="flex font-semibold text-[20px] md:text-[40px] mb-[48px] md:mb-[80px] justify-center text-center">
          How little card works 👇🏽
        </h4>
      </section>
      <section className="bg-[#E1E4FE] min-h-full py-[80px] md:py-[150px]  lg:rounded-[40px]">
        <div className="lg:max-w-[1000px] md:w-full  m-auto h-full px-[25px]">
          {cardWorkingList.map(({ description, title, image }, i) => (
            <div
              key={title}
              className={`flex flex-col md:flex-row justify-between items-center mb-[80px] ${
                i !== 2 ? "lg:mb-[200px]" : ""
              }`}>
              <div className="max-w-[400px]">
                <h3 className="font-bold md:text-[46px] text-[20px]  lg:leading-[51px]">
                  {title}
                </h3>
                <p className="font-normal text-[18px] lg:mt-[16px]">
                  {description}
                </p>
              </div>
              <div className="flex basis-3/6 mt-[48px] md:mt-[0px] justify-center items-center">
                <img src={image} alt={"family"} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="  lg:max-w-[1200px] md:w-full  m-auto  h-full">
        <div
          className={`
       flex  flex-col md:justify-around items-center  md:px-0 px-[25px]  pb-[80px] rounded-[24px] z-30 lg:px-[50px] lg:mt-[100px]  lg:my-[80px] 
    `}>
          <h3 className="font-semibold text-[20px] lg:text-[38px] mt-[80px]  md:mt-[0] lg:mt-[40px] mb-[40px] md:mb-[80px]">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center lg:w-7/12 order-2 w-full">
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

export default LittleCards;
