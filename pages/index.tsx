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
  ImageSlider,
} from "../components";
import {
  EnterFromLeft,
  EnterFromRight,
  FadeInWhenVisible,
  faqs,
  getValue,
  moneyItemList,
} from "../utils";
import client from "../client";
import groq from "groq";
import { ContentTypeProps } from "../types";
import { Reviews } from "../components/Reviews";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/router";
import usePhoneInput from "../utils/usePhoneInput";
import posthug from "posthog-js";
import Script from "next/script";

const Home: NextPage<ContentTypeProps> = ({ contents }) => {
  const router = useRouter();
  const { addPhoneNumber, orderCard, noNumber } = usePhoneInput();
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",
        start: "center center",
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
      <Script src="/mklb.js"></Script>
      <section
        className={` sm:bg-center bg-no-repeat sm:h-[868px] h-screen bg-cover bg-top relative`}
      >
        <div className="overlay overlay-bg"></div>
        <NavigationBar buttonText="Order a Card" />
        <div className="px-[25px] md:px-8 xl:px-0 flex flex-col md:flex-row items-center flex-auto  lg:max-w-[1070px] mx-auto justify-center md:justify-start text-white col-4 h-screen   md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0">
          <EnterFromLeft>
            <div>
              <h1 className="md:text-xxl  max-w-[20ch] text-xl   xs:text-[30px] leading-[40px] font-semibold ">
                {getValue(contents, "1", "heading")}
              </h1>
              <div className="max-w-[531px]">
                <p className="mt-6 text-white font-regular text-base leading-[33px]">
                  {getValue(contents, "1", "description")}{" "}
                </p>
                <PhoneInput
                  onChange={(e) => addPhoneNumber(e)}
                  type={"phone"}
                  placeholder="Enter your phone number"
                  text={getValue(contents, "1", "buttonText")}
                  className="mt-[40px]"
                  buttonClassName="#5BAB0A"
                  onClick={orderCard}
                  noNumber={noNumber}
                />
              </div>
            </div>
          </EnterFromLeft>

          <a href="#" className="mklbItem" data-vimeo-id="760010840">
            <img
              onClick={() => {
                posthug.capture("play_icon_clicked", {
                  location: "Home page (hero)",
                  action: "opens modal to play ad",
                });
              }}
              className="play-image w-full h-full w-[90px] mt-[50px] md:mt-[0] cursor-pointer"
              src="/images/play.svg"
              alt="play"
            />
          </a>
        </div>
        <video autoPlay loop muted playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="flex flex-auto justify-center h-full md:h-full items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-white2">
        <div className="flex justify-between lg:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] lg:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full lg:max-w-[53ch]  mb-8 lg:mb-0 ">
            <h2 className="font-semibold text-xl  xs:text-[30px] leading-[40px] lg:leading-[44px] lg:text-[40px]">
              {getValue(contents, "2", "heading")}
            </h2>
            <p className="text-base font-medium leading-[35px] lg:text-[19px] mt-6 mb-[48px] sm:mb-0">
              {getValue(contents, "2", "description")}
            </p>
            <a href="#" className="mklbItem" data-vimeo-id="760010840">
              <div
                onClick={() => {
                  posthug.capture("play_icon_clicked", {
                    location: `Home page (${getValue(
                      contents,
                      "2",
                      "heading"
                    )})`,
                    action: "opens modal to play ad",
                  });
                }}
                className="flex mt-[20px] items-center"
              >
                <div className="box-shadow w-[40px] flex inset-1/2 justify-center items-center h-[40px] bg-white cursor-pointer rounded-full">
                  <Play size={18} fill="#5BAB0A" color="#5BAB0A" />
                </div>
                <p className="ml-5 text-[16px] text-green font-semibold">
                  Play one minute video
                </p>
              </div>
            </a>
            <Button
              onClick={() => {
                router.push("/order-a-card");
                posthug.capture("get_started_clicked", {
                  location: `Home page (${getValue(contents, "2", "heading")})`,
                  action: "goes to order a card form",
                });
              }}
              className="my-2 whitespace-nowrap mt-7 hidden w-full md:flex md:w-[172px]"
            >
              {getValue(contents, "2", "buttonText")}
            </Button>
          </div>
          <div className="relative ">
            <img
              className="w-full h-full lg:h-[400px] lg:w-[460px]"
              src={getValue(contents, "2", "image")}
              alt={
                getValue(contents, "2", "imageAlt") ??
                getValue(contents, "2", "heading")
              }
            />
          </div>
          <Button
            onClick={() => {
              router.push("/order-a-card");
              posthug.capture("get_started_clicked", {
                location: `Home page (${getValue(contents, "2", "heading")})`,
                action: "goes to order a card form",
              });
            }}
            className="my-2 w-full lg:w-[172px] items-center whitespace-nowrap mt-12 md:hidden justify-center flex"
          >
            {getValue(contents, "2", "buttonText")}
          </Button>
        </div>{" "}
      </section>{" "}
      <section className="flex flex-auto justify-center md:px-8 pt-[80px] lg:mt-{200px]  bg-white2 ">
        <div className="flex justify-between flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] lg:mb-[106px]  w-full  transition-all  xl:mb-16 ">
          <h3 className="font-semibold text-[23px] lg:text-[40px] mb-[40px] lg:mb-0 ">
            {getValue(contents, "3", "heading")}
          </h3>
          <div className="mt-[24px] md:mt-[40px] grid mb-4  grid-cols-1 md:grid-cols-2  gap-5 gap-y-6">
            {moneyItemList.map(({ icon, title, description }) => (
              <div
                key={title}
                className=" bg-white flex flex-col justify-center lg:h-[335px] h-[300px] md:h-[400px] rounded-[24px] lg:p-[48px] p-[24px] "
              >
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

                <h4 className="font-semibold text-[20px] mb-[8px] lg:text-[24px] ">
                  {title}
                </h4>
                <p className="text-[17px] "> {description}</p>
              </div>
            ))}
          </div>
        </div>{" "}
      </section>{" "}
      <section className="flex flex-col flex-auto justify-center items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-white h-full">
        <div className="flex justify-between lg:flex-row flex-col-reverse pl-[22.5px] lg:pl-0 lg:pr-0 lg:max-w-[1100px] pr-[17.5px] lg:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="sm:max-w-full md:max-w-[30ch] w-full lg:max-w-[45ch]">
            <h2 className="font-semibold text-[23px] lg:text-[40px] leading-[35px]  lg:leading-[50px]">
              {getValue(contents, "4", "heading")}
            </h2>
            <p className="text-[18px] font-medium  mt-6 mb-[48px] sm:mb-0">
              {getValue(contents, "4", "description")}
            </p>
            <Button
              onClick={() => {
                router.push("/order-a-card");
                posthug.capture("get_your_little_card_now_clicked", {
                  location: `Home page (${getValue(contents, "4", "heading")})`,
                  action: "goes to order a card form",
                });
              }}
              className="my-2 whitespace-nowrap mt-12 flex lg:w-fit w-full mb-[86px] lg:mb-0"
            >
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
              className="w-full h-full lg:h-full lg:w-[493px] mb-[40px] lg:mb-0"
            />
          </FadeInWhenVisible>
        </div>
        <h4 className="text-block flex text-grey2 font-semibold text-[23px] flex-col md:flex-row text-center px-[20px] lg:px-0 md:text-[40px] mb-[48px] ">
          How it works in&nbsp;
          <span className="text-black text"></span>
        </h4>{" "}
      </section>{" "}
      <section className="bg-[#CCF4A5] px-[10px] sm:px-[40px] overflow-hidden lg:rounded-[40px] w-full relative h-screen xl:h-[800px] flex">
        <HomeStepper images={getValue(contents, "5", "images")} />
      </section>
      <section className="flex md:flex-row flex-col px-[20px] lg:max-w-[1500px] lg:mb-[100px] md:w-full m-auto justify-end flex-auto  items-center   md:px-8 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="md:basis-1/3 md:mr-[70px] ">
          <div className="max-w-[408px ]">
            <EnterFromLeft>
              <h3 className="font-semibold md:text-[40px] text-xl   xs:text-[30px] leading-[40px] md:leading-[40px] md:mb-[24px] mb-[8px] mt-2 ">
                {getValue(contents, "6", "heading")}
              </h3>
              <p className="text-base ">
                {getValue(contents, "6", "description")}
              </p>
              <br />
              <p className="text-base">
                {" "}
                {getValue(contents, "6", "footNote")}
              </p>
              <Button
                onClick={() => {
                  router.push("/order-a-card");
                  posthug.capture("get_your_card_now_clicked", {
                    location: `Home page (${getValue(
                      contents,
                      "6",
                      "heading"
                    )})`,
                  });
                }}
                className="my-2 whitespace-nowrap mt-12 hidden md:flex"
              >
                {getValue(contents, "6", "buttonText")}
              </Button>
            </EnterFromLeft>
          </div>
        </div>
        <div className="md:basis-[55%] mt-[5px] md:mt-0  overflow-x-auto w-full">
          <Reviews />
        </div>{" "}
      </section>{" "}
      <FadeInWhenVisible>
        <h4 className="flex font-semibold text-[18px] justify-center md:text-[24px] mb-[48px]">
          Schools that trust Little
        </h4>
        <div className="lg:max-w-[1450px] m-auto ">
          <ImageSlider images={getValue(contents, "7", "images")} />
        </div>{" "}
      </FadeInWhenVisible>
      <section className="flex flex-col flex-auto justify-center lg:items-center px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[176px]">
        <h3 className="font-semibold text-[23px] text-center md:text-[40px] mb-[40px] lg:mb-[80px]">
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
          <span className="underline cursor-pointer">
            <Link href={"/faqs"}>Click here</Link>
          </span>
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
