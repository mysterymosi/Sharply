/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { Play } from "react-feather";
import {
  Button,
  NavigationBar,
  Accordion,
  PhoneInput,
  Layout,
  HomeStepper,
} from "../components";
import {
  EnterFromLeft,
  EnterFromRight,
  FadeInWhenVisible,
  faqs,
  getValue,
  moneyItemList,
  urlFor,
} from "../utils";
import client from "../client";
import groq from "groq";
import { ContentTypeProps } from "../types";
import { Reviews } from "../components/Reviews";
import HomeModal from "../components/Modal";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Home: NextPage<ContentTypeProps> = ({ contents }) => {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${getValue(
      contents,
      "1",
      "image"
    )})`,
  };
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",

        start: "top bottom",
      },
      text: {
        value: "little steps",
      },
      duration: 0.3,
      delay: 0.5,
      ease: "none",
    });
  }, []);

  return (
    <Layout title="Home" showDownloadCard>
      <HomeModal />
      <section
        style={backgroundImage}
        className={` sm:bg-center bg-no-repeat sm:h-[868px] h-screen bg-cover bg-top`}>
        <NavigationBar />

        <div className=" px-[25px] md:px-8 xl:px-0 flex flex-col flex-auto  lg:max-w-[1070px] mx-auto justify-center text-white col-4 h-full mt-[50px] lg:mt-0">
          <EnterFromLeft>
            <h1 className="md:text-xxl  max-w-[20ch] text-[28px] leading-[34px] font-semibold ">
              {getValue(contents, "1", "heading")}
            </h1>
            <div className="max-w-[531px]">
              <p className="mt-6 text-white font-regular text-sm  ">
                {getValue(contents, "1", "description")}{" "}
              </p>
              <PhoneInput
                type={"phone"}
                placeholder="Enter your phone number"
                text={getValue(contents, "1", "buttonText")}
                className="mt-[40px]"
              />
              <p className="text-sm mt-6">
                {getValue(contents, "1", "footNote")}{" "}
              </p>
            </div>
          </EnterFromLeft>
        </div>
      </section>
      <section className="flex flex-auto justify-center h-full items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-white2">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] lg:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full md:max-w-[53ch]">
            <h2 className="font-semibold text-[24px] lg:leading-[44px] lg:text-[40px]">
              {getValue(contents, "2", "heading")}
            </h2>
            <p className="text-[16px] font-medium lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              {getValue(contents, "2", "description")}
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 hidden w-full md:flex lg:w-[172px]">
              {getValue(contents, "2", "buttonText")}
            </Button>
          </div>

          <div className="relative">
            <img
              className="w-full h-full md:h-[400px] md:w-[460px]"
              src={getValue(contents, "2", "image")}
              alt={
                getValue(contents, "2", "imageAlt") ??
                getValue(contents, "2", "heading")
              }
            />
            <div className="w-[48px] flex absolute top-[45%] left-[46%] inset-1/2 justify-center items-center h-[48px] bg-white cursor-pointer rounded-full">
              <Play fill="#5BAB0A" color="#5BAB0A" />
            </div>
          </div>

          <Button className="my-2 w-full lg:w-[172px] items-center whitespace-nowrap mt-12 md:hidden justify-center flex">
            {getValue(contents, "2", "buttonText")}
          </Button>
        </div>{" "}
      </section>{" "}
      <section className="flex flex-auto justify-center md:px-8 pt-[80px] lg:mt-{200px]  bg-white2 ">
        <div className="flex justify-between flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] lg:mb-[106px]  w-full  transition-all  xl:mb-16 ">
          <h3 className="font-semibold text-[24px] lg:text-[40px] mb-[40px] lg:mb-0 ">
            {getValue(contents, "3", "heading")}
          </h3>
          <div className="mt-[24px] md:mt-[40px] grid mb-4  grid-cols-1 md:grid-cols-2  gap-5 gap-y-6">
            {moneyItemList.map(({ icon, title, description }) => (
              <div
                key={title}
                className=" bg-white flex flex-col justify-center lg:h-[335px] h-[300px] md:h-[400px] rounded-[24px] lg:p-[48px] p-[24px] ">
                <FadeInWhenVisible>
                  <div className="w-[80px] md:w-[70px] h-[56px] md:h-[64px] rounded-full bg-[#F0F0F0] flex items-center justify-center mb-[32px]">
                    <Image
                      src={icon}
                      width={30}
                      alt={title}
                      priority={true}
                      height={30}
                      layout="fixed"
                    />{" "}
                  </div>{" "}
                </FadeInWhenVisible>

                <h4 className="font-semibold text-[20px] lg:text-[24px] ">
                  {title}
                </h4>
                <p className="text-[16px] lg:text-[18px] "> {description}</p>
              </div>
            ))}
          </div>
        </div>{" "}
      </section>{" "}
      <section className="flex flex-col flex-auto justify-center items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-white h-full">
        <div className="flex justify-between md:flex-row flex-col-reverse pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full sm:max-w-[30ch] lg:max-w-[45ch]">
            <h2 className="font-semibold text-[24px] lg:text-[40px] leading-[30px]  lg:leading-[50px]">
              {getValue(contents, "4", "heading")}
            </h2>
            <p className="text-[16px] font-medium lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              {getValue(contents, "4", "description")}
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 flex lg:w-fit w-full mb-[86px] lg:mb-0">
              {getValue(contents, "4", "buttonText")}
            </Button>
          </div>

          <FadeInWhenVisible>
            <img
              src={getValue(contents, "4", "image")}
              alt={
                getValue(contents, "4", "imageAlt") ??
                getValue(contents, "4", "heading")
              }
              className="w-full h-full md:h-full lg:w-[493px] md:w-[460px] mb-[40px] lg:mb-0"
            />
          </FadeInWhenVisible>
        </div>
        <h4 className="text-block flex font-semibold text-[20px] md:text-[40px] mb-[48px] ">
          How it works in&nbsp;
          <span className="text-grey2 text"></span>
        </h4>{" "}
      </section>{" "}
      <section className="bg-[#CCF4A5]  lg:rounded-[40px] w-full relative">
        <HomeStepper images={getValue(contents, "5", "images")} />
      </section>
      <section className="flex md:flex-row flex-col px-[20px] lg:max-w-[1500px] lg:mb-[100px] md:w-full m-auto justify-end flex-auto  items-center   md:px-8 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="md:basis-1/3 md:mr-[70px] ">
          <div className="max-w-[408px ]">
            <EnterFromLeft>
              <h3 className="font-semibold md:text-[40px] text-[20px] leading-[21px] md:leading-[40px] md:mb-[24px] mb-[8px] ">
                {getValue(contents, "6", "heading")}
              </h3>
              <p>{getValue(contents, "6", "description")}</p>
              <br />
              <p> {getValue(contents, "6", "footNote")}</p>
              <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
                {getValue(contents, "6", "buttonText")}
              </Button>
            </EnterFromLeft>
          </div>
        </div>
        <div className="md:basis-1/2 overflow-x-auto w-full">
          <Reviews />
        </div>{" "}
      </section>{" "}
      <FadeInWhenVisible>
        <div className="flex justify-between m-auto lg:max-w-[1100px] h-full md:w-full overflow-y-auto bg-white">
          {getValue(contents, "7", "images").map((img: string, i: number) => (
            <img
              key={i}
              src={urlFor(img) as any}
              className="md:w-[80px] hover:scale-[0.9] md:h-[75px] mx-[25px] md:mx-0"
              alt={img}
            />
          ))}
        </div>{" "}
      </FadeInWhenVisible>
      <section className="flex flex-col flex-auto justify-center lg:items-center px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[176px]">
        <h3 className="font-semibold text-[20px] md:text-[40px] mb-[40px] lg:mb-[80px]">
          {" "}
          Frequently Asked Questions{" "}
        </h3>
        <EnterFromRight>
          <div className="sm:w-[627px]">
            <Accordion list={faqs} />
          </div>
        </EnterFromRight>

        <p className=" mb-[40px] lg:mt-[80px] mt-[40px] text-grey">
          Need more answers?&nbsp;
          <span className="underline cursor-pointer">Click here</span>
        </p>
      </section>
    </Layout>
  );
};
export async function getStaticProps() {
  const contents = await client.fetch(groq`
  *[
    _type == "home"
  ]{
  section,
    heading,
    description,
    buttonText,
    footNote,
    imageAlt,
   images,
    "image" :image.asset->url
  }

   `);
  return {
    props: {
      contents,
    },
  };
}

export default Home;
