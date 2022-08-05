/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
} from "../../components";
import { books } from "../../utils";
const LittleCards: NextPage = () => {
  return (
    <main>
      <section
        className={` sm:h-[868px]  lg:h-[1100px] md:h-[600px] h-[450px] `}>
        <NavigationBar />
        <div className="px-[25px] flex lg:flex-row flex-col md:h-full h-4/5 justify-center text-black ">
          <div className="flex justify-center flex-col  items-center ">
            <p>Inside Little</p>
            <h1 className="md:text-[40px] max-w-[20ch] underline text-[28px] leading-[34px ]  lg:leading-[50px] font-semibold md:text-center lg:mb-[16px] ">
              The simple money app for kids and teens!
            </h1>
            <p>June 20, 2022 - 5 mins read</p>
            <img
              src={"/images/home-background.svg"}
              className="lg:mt-[80px] lg:w-[560px]  rounded-[196px] box-shadow"
              alt={"little card hero"}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col flex-auto  md:px-5 pt-[80px] xl:max-w-[1040px] m-auto lg:pt-{200px]  bg-white">
        <h3 className="md:text-[34px] font-medium md:mb-[40px]">
          Latest releases
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
      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full  rounded-[40px]">
        <div
          className={`bg-[#F9F2B4] 
        gap-[40px]  py-[48px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow  
       rounded-[24px] z-30 lg:p-[100px]  
       lg:mb-[100px] mb-[12px]`}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[32px] mb-[8px]">
              {" "}
              Want updates straight to your inbox?
            </h3>
            <p className="text-[18px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              lobortis pulvinar amet, tristique cursus elit. Mi tortor dui
              aenean sit sed in.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col mt-[20px] md:w-[400px] md:mt-[0px] justify-center items-center">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter your email address"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  px-[20px] h-[56px] rounded-[32px]"
            />

            <Button className="my-2 whitespace-nowrap flex w-full items-center justify-center ">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      <DownloadCard className="lg:max-w-[1200px] md:w-full  lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  xl:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContact className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </main>
  );
};

export default LittleCards;
