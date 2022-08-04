/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { Play, Star } from "react-feather";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
} from "../components";
import { Accordion } from "../components/Accordion";
import { HomeStepper } from "../components/HomeStepper";
import { PhoneInput } from "../components/Input/PhoneInput";
import { SuspenseContainer } from "../components/Loader";
import { faqs, moneyItemList, schools } from "../libs";

const LittleInSchools: NextPage = () => {
  const books = [
    {
      name: "From child to financially responsible adult",
      link: "https://picsum.photos",
    },
    {
      name: "Finance 101 ; Money lessons for children",
      link: "https://picsum.photos",
    },
    {
      name: "Money lessons for the child I love",
      link: "https://picsum.photos",
    },
    {
      name: "Money lessons 101; A child’s first money journey",
      link: "https://picsum.photos",
    },
    {
      name: "How to raise a financially responsible child",
      link: "https://picsum.photos",
    },
    {
      name: "Rich kids: How to raise a millionaire child",
      link: "https://picsum.photos",
    },
  ];
  const schoolBenefits = [
    "Ease of use and convenience for parents and students",
    "No middle man between students pocket money and their spending",
    "Zero complains about students misplacing pocket money ",
    "Introducing financial responsibility among students",
  ];
  return (
    <SuspenseContainer>
      <section
        className={`  sm:h-[868px] lg:h-[800px] md:h-[600px] h-[950px] bg-[#D4D3FC]`}>
        <NavigationBar />
        <div className="  px-[25px] flex lg:flex-row flex-col md:gap-[100px]  h-5/6 justify-center text-black ">
          <div className="flex justify-center flex-col">
            <h1 className="md:text-[53px] md:leading-[60px]  max-w-[13ch] text-[28px] leading-[34px] font-semibold ">
              A better way for students to spend & receive pocket money
            </h1>
            <div className="max-w-[440px]">
              <p className="mt-6 text-black font-normal text-sm  ">
                A Pocket money card for students in school
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

      <section className="flex flex-col flex-auto justify-center items-center md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1000px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full md:max-w-[35ch]">
            <h2 className="font-semibold text-[24px] lg:text-[40px] leading-[50px]">
              Our Goal
            </h2>
            <p className="text-[16px] font-normal lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              To help nurture financially responsible students in a global era.
              <br /> It takes a village to raise a child.
            </p>

            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Get your Card Now!
            </Button>
          </div>
          <img
            src="/images/home-card-hero.svg"
            className="w-full h-full md:h-[400px] md:w-[460px]"
            alt="video"
          />

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden justify-center flex">
            Get your Card Now!
          </Button>
        </div>
      </section>

      <section className="flex flex-col flex-auto justify-center items-center md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1000px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <img
            src="/images/home-card-hero.svg"
            className="w-full h-full md:h-[400px] md:w-[460px]"
            alt="video"
          />

          <div className="max-w-full md:max-w-[45ch]">
            <h2 className="font-semibold text-[24px] lg:text-[40px] leading-[50px]">
              Introducing the Little Card for Schools
            </h2>
            <p className="text-[16px] font-normal lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              The Little card for schools is a spend card that allows students
              to receive and spend pocket money with ease. This card is an NFC
              card
            </p>
            <p className="text-[16px] font-normal lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              The card is accompanied by an App where parents/guardians can get
              instant notifications, set spending limit and block card.
            </p>

            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Get your Card Now!
            </Button>
          </div>

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden justify-center flex">
            Get your Card Now!
          </Button>
        </div>
        <h4 className="flex font-semibold text-[18px] md:text-[24px] mb-[48px]">
          Schools that trust Little
        </h4>
      </section>

      <div className="flex justify-between m-auto lg:max-w-[1000px] md:w-full xl:max-w-[1040px]">
        {schools.map(({ name, image }) => (
          <Image
            key={name}
            src={image}
            width={80}
            alt={name}
            height={75}
            layout="fixed"
          />
        ))}
      </div>
      <section
        className="flex flex-col  px-[20px] 
      lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto  
       md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <h3 className="font-semibold  md:text-[40px] text-[20px]  text-center">
          How it works in Little <span className="text-[#757575]"> steps</span>
        </h3>
        <div className="flex justify-between flex-col md:flex-row h-[1100px]  sm:h-[660px] md:mt-[82px]">
          <div className="box-shadow basis-[49%] h-[400px]  md:h-full   px-[48px] pt-[64px] rounded-[16px]">
            <p className="font-semibold md:text-[18px] leading-[31px]">
              Step 1
            </p>
            <p className="md:mt-[21px] font-semibold md:text-[32px] ">
              Students get Little card
            </p>
          </div>
          <div className="box-shadow basis-[49%] px-[48px] pt-[64px] rounded-[16px] mt-[12px] md:mt-0">
            {" "}
            <p className="font-semibold md:text-[18px] leading-[31px]">
              Step 2
            </p>
            <p className="md:mt-[21px] lg:leading-[34px] font-semibold md:text-[32px] ">
              Parents/ Guardian transfer money from any bank into student’s card
            </p>
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
            Students uses card at designated sales point within the school{" "}
          </h3>
          <Button className="my-2 whitespace-nowrap mt-12 w-full sm:w-auto md:flex">
            Learn More
          </Button>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <img src={"/images/nutuing-image.svg"} alt={"family"} />
        </div>
      </section>
      <section className="flex flex-col flex-auto justify-start items-center md:px-5 pt-[80px] lg:pt-{200px]  bg-[#EBFDD9]">
        <div className="flex justify-start gap-[50px] md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1000px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <img
            src="/images/home-card-hero.svg"
            className="w-full h-full md:h-[400px] md:w-[460px]"
            alt="video"
          />

          <div className="max-w-full md:max-w-[35ch]">
            <h2 className="font-semibold text-[24px] lg:text-[32px] leading-[50px]">
              How does it benefit my school?
            </h2>
            <ul className="list-disc pl-[16px] mt-[32px]">
              {schoolBenefits.map((benefit) => (
                <li className="mb-5 text-[20px]" key={benefit}>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Invite us to your PTA
            </Button>
          </div>

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden justify-center flex">
            Invite us to your PTA
          </Button>
        </div>
      </section>

      <section className="flex flex-col flex-auto  md:px-5 pt-[80px] xl:max-w-[1040px] m-auto lg:pt-{200px]  bg-white">
        <h3 className="md:text-[34px] font-medium md:mb-[40px]">
          Get our free books
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {books.map(({ name, link }, i) => (
            <div key={name} className="mb-[48px]">
              <img
                src={`${link}/id/${i}/200`}
                alt={name}
                className="lg:w-[250px] lg:h-[240px] rounded-[24px]"
              />
              <p className="mt-[20px] mb-[16px] font-medium md:text-[18px]">
                {name}
              </p>

              <p className="underline text-[16px] leading-[24px] font-normal">
                <a href={link} rel="noreferrer" target="_blank">
                  Download Book
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col flex-auto justify-center lg:items-center px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[176px]">
        <h3 className="font-semibold text-[20px] md:text-[40px] mb-[40px] lg:mb-[80px]">
          {" "}
          Frequently Asked Questions{" "}
        </h3>
        <div className="sm:w-[627px]">
          <Accordion list={faqs} />
        </div>

        <p className=" mb-[40px] lg:mt-[80px] mt-[40px] text-[#424242]">
          Need more answers?&nbsp;
          <span className="underline cursor-pointer">Click here</span>
        </p>
      </section>
      <DownloadCard className="lg:max-w-[1000px] md:w-full xl:max-w-[1040px] lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  xl:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContact className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </SuspenseContainer>
  );
};

export default LittleInSchools;
