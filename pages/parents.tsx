import groq from "groq";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import client from "../client";
import {
  Button,
  NavigationBar,
  PhoneInput,
  TwoColLayout,
  Layout,
} from "../components";
import { Reviews } from "../components/Reviews";
import { ContentProp, ContentTypeProps } from "../types";

import {
  EnterFromLeft,
  FadeInWhenVisible,
  featuresParentsLove,
  getValue,
} from "../utils";

const Parents: NextPage<ContentTypeProps> = ({ contents }) => {
  const parentFeatures = contents
    .filter(
      (content: ContentProp) =>
        Number(content.section) > 1 && Number(content.section) < 6
    )
    .sort((a: ContentProp, b: ContentProp) => {
      return Number(a.section) - Number(b.section);
    })
    .map((content: ContentProp, i: number) =>
      Object.assign(
        {
          title: content.heading,
          description: content.description,
          position: i % 2 == 0 ? "left" : "right",
          showButton: i == 0 ? true : false,
          buttonText: content.buttonText,
          image: content.image,
        },
        {}
      )
    );
  return (
    <Layout title="Parents">
      <section
        className={`bg-[#CCF4A5] lg:h-[900px]  xl:px-[0] lg:px-[30px]  h-[850px] md:h-[1000px]  `}>
        <NavigationBar />
        <div className="flex justify-between lg:mb-[200px] lg:pb-[150px] flex-col lg:flex-row lg:h-full lg:max-w-[1100px]  mt-16 md:mt-0  m-auto items-center md:w-full">
          <div className=" mt-[50px] md:mb-[50px] md:mt-[120px] px-[25px] md:px-[0] flex flex-col flex-auto justify-center col-4 max-w-[48ch]">
            <h1 className="md:text-xxl text-xl leading-[34px] font-semibold ">
              {getValue(contents, "1", "heading")}
            </h1>
            <PhoneInput
              placeholder="Enter phone number"
              text={getValue(contents, "1", "buttonText")}
              className="mt-[40px] "
              buttonClassName="rgb(251,153,27,0.6)"
            />
            <p className="text-base  mt-6">
              {" "}
              {getValue(contents, "1", "footNote")}
            </p>
          </div>{" "}
          <img
            src={getValue(contents, "1", "image")}
            className="md:w-[480px] md:h-[434px] mt-9 md:mt-0"
            alt={getValue(contents, "1", "imageAlt")}
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
            image={image as string}
            position={position}
          />
        )
      )}
      <section className="flex flex-col  px-[20px]  lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto   md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <h3 className="font-semibold md:text-[40px] text-[24px] text-center">
          Features Parents love
        </h3>
        <div className="mt-[24px] md:mt-[40px] flex md:flex-row flex-col justify-between mb-[64px] gap-5 gap-y-6">
          {featuresParentsLove.map(({ title, description, color, image }) => (
            <div
              key={title}
              className={` md:bg-white box-shadow  basis-1/3 flex  flex-col justify-start min-h-[325px] rounded-[24px] px-[24px] py-[40px] `}>
              <div
                className={` ${
                  color === "#5BAB0A"
                    ? "bg-[#5BAB0A]"
                    : color === "#FF991B"
                    ? "bg-[#FF991B]"
                    : "bg-[#35AFF7]"
                }
                  flex   h-[40px] justify-center items-center rounded-[48px] md:mb-0 mb-[40px] w-[50px] `}>
                <FadeInWhenVisible> {image}</FadeInWhenVisible>
              </div>

              <h4 className="font-semibold text-[24px]  lg:mt-[40px]  ">
                {title}
              </h4>
              <p className="text-[16px] mt-[8px]">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/little-cards">
            <Button className="my-2 w-full lg:w-[200px] items-center whitespace-nowrap  justify-center flex">
              See Pricing and plans
            </Button>
          </Link>
        </div>
      </section>
      <section
        className="flex flex-col  px-[20px] 
      lg:mb-[100px] md:w-full xl:max-w-[1000px] m-auto justify-end flex-auto  
       md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <FadeInWhenVisible>
          {" "}
          <h3 className="font-semibold  md:text-[40px] text-[24px] mb-[53px]  text-center">
            Get started in <span className="text-grey2"> 3 easy steps</span>
          </h3>{" "}
        </FadeInWhenVisible>

        <div className="flex justify-between flex-col md:flex-row   sm:h-[660px] md:mt-[82px]">
          <div className="bg-[#C7F797] basis-[49%]  md:h-full px-[24px] pb-[100px]  lg:pb-[0] pt-[24px]   lg:px-[48px] lg:pt-[64px] rounded-[16px]">
            <FadeInWhenVisible>
              {" "}
              <p className="font-semibold md:text-[18px] leading-[31px] text-grey3">
                Step 1
              </p>
            </FadeInWhenVisible>

            <p className="md:mt-[21px] font-semibold md:text-[32px] ">
              Order card
            </p>

            <div className="flex flex-row items-center justify-between lg:mt-[20px]  mt-[50px]">
              <img
                src={"/images/rightLine.svg"}
                className="md:w-[60px] w-[36px] h-[36px]  md:h-[60px] lg:mt-2 md:mt-0"
                alt={"lines"}
              />{" "}
              <img
                src="/images/littlecard.png"
                className="md:w-[200px] w-[120px] h-[200px]  md:h-[350px] lg:mt-9 md:mt-0"
                alt={"lines"}
              />{" "}
              <img
                src={"/images/leftLine.svg"}
                className="md:w-[60px] md:h-[60px] w-[36px] h-[36px]  lg:mt-9 md:mt-0"
                alt={"lines"}
              />
            </div>
          </div>
          <div className="bg-[#C5E8FC] basis-[49%] px-[48px] pt-[64px] rounded-[16px] mt-[12px] md:mt-0">
            {" "}
            <FadeInWhenVisible>
              {" "}
              <p className="font-semibold md:text-[18px] leading-[31px] text-grey3">
                Step 2
              </p>{" "}
            </FadeInWhenVisible>
            <p className="md:mt-[21px] font-semibold md:text-[32px] ">
              Fund wallet
            </p>
            <FadeInWhenVisible>
              {" "}
              <img
                alt="grid of parents avatars"
                className="w-full md:w-[400px] h-[80px] mt-[40px]"
                src="/images/avatar-grid.svg"
              />{" "}
            </FadeInWhenVisible>
            <img
              alt="grid of parents avatars"
              className="w-fit mt-[65px] md:mt-[47px] md:h-[330px] flex justify-center items-center mx-auto"
              src="/images/fund-wallet-half.png"
            />
          </div>
        </div>
      </section>
      <section
        className={`
    gap-[30px]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner box-shadow py-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
       lg:max-w-[1250px] lg:mb-[100px] md:w-full  m-auto  px-[25px] h-full  bg-white`}>
        <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <FadeInWhenVisible>
            {" "}
            <p className="text-[18px] mb-[13px] font-semibold text-grey3">
              Step 3
            </p>
          </FadeInWhenVisible>
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            Start nurturing your child into a financially responsible adult{" "}
          </h3>
          <Button className="my-2 mt-12 w-full lg:w-[172px] items-center whitespace-nowrap  justify-center flex">
            Buy a Little card
          </Button>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <FadeInWhenVisible>
            {" "}
            <img src={"/images/nutuing-image.svg"} alt={"family"} />
          </FadeInWhenVisible>
        </div>
      </section>
      <section className="flex md:flex-row flex-col px-[20px] lg:max-w-[1500px] lg:mb-[100px] md:w-full m-auto justify-end flex-auto  items-center   md:px-8 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="md:basis-1/3  ">
          <div className="max-w-[408px ]">
            <EnterFromLeft>
              <h3 className="font-semibold md:text-[40px] text-xl   xs:text-[30px] leading-[40px] md:leading-[40px] md:mb-[24px] mb-[8px] mt-2 ">
                What Happy Parents are saying
              </h3>
              <p className="text-base ">
                🎁 Freebies: We are giving 50% off to first 1300 card purchases.
              </p>

              <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
                Get your Card Now!
              </Button>
            </EnterFromLeft>
          </div>
        </div>
        <div className="md:basis-[55%] mt-[5px] md:mt-0  overflow-x-auto w-full">
          <Reviews />
        </div>{" "}
      </section>{" "}
    </Layout>
  );
};
export async function getStaticProps() {
  const contents = await client.fetch(groq`
  *[
    _type == "parents"
  ]{
  section,
    heading,
    description,
    buttonText,
    footNote,
    imageAlt,
    "image" :image.asset->url
  }

   `);
  return {
    props: {
      contents,
    },
  };
}

export default Parents;
