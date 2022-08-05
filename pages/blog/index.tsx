/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  BookList,
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

      <BookList
        title="  Latest releases"
        books={books.filter((_, i) => i < 4)}
      />

      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full md:mt-[100px]  rounded-[40px]">
        <div
          className={`bg-[#F9F2B4] 
        gap-[40px]  py-[48px]
        w-full
       flex  md:flex-row  flex-col justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow  
       lg:rounded-[24px] z-30 lg:p-[100px]  
       lg:mb-[100px] mb-[12px]`}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col lg:mt-0 ">
            <h3 className="font-semibold text-[24px] leading-[40px] lg:text-[32px] mb-[8px]">
              {" "}
              Want updates straight to your inbox?
            </h3>
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              lobortis pulvinar amet, tristique cursus elit. Mi tortor dui
              aenean sit sed in.{" "}
            </p>
          </div>{" "}
          <div className="flex flex-col mt-[20px] md:w-[350px] md:mt-[0px] justify-center items-center">
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
