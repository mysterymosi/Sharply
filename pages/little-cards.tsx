/* eslint-disable @next/next/no-html-link-for-pages */

import groq from "groq";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import client from "../client";
import { Button, NavigationBar, Accordion, Layout } from "../components";
import { CardStepper } from "../components/CardStepper";
import { ContentTypeProps } from "../types";
import {
  EnterFromLeft,
  FadeInWhenVisible,
  getValue,
  giftLinkFaqs,
} from "../utils";

const LittleCards: NextPage<ContentTypeProps> = ({ contents }) => {
  const [openCard, setOpenCard] = useState({
    verveCard: false,
    schoolableCard: false,
  });

  const { verveCard, schoolableCard } = openCard;
  const cardData = [
    {
      title: getValue(contents, "2", "heading"),
      description: getValue(contents, "2", "description"),
      closedImage: getValue(contents, "2", "image"),
      openImage: getValue(contents, "2", "imageOpen"),
      alt: getValue(contents, "2", "imageAlt"),
      openCard: verveCard,
      setOpenCard: () => setOpenCard({ ...openCard, verveCard: !verveCard }),
    },
    {
      title: getValue(contents, "3", "heading"),
      description: getValue(contents, "3", "description"),

      closedImage: getValue(contents, "3", "image"),
      openImage: getValue(contents, "3", "imageOpen"),
      alt: getValue(contents, "3", "imageAlt"),
      openCard: schoolableCard,
      setOpenCard: () =>
        setOpenCard({ ...openCard, schoolableCard: !schoolableCard }),
    },
  ];
  return (
    <Layout title="Little Cards" showDownloadCard>
      <section
        className={`sm:h-[868px] little-card-gradient  lg:h-[1100px] md:h-[600px] h-[450px] `}>
        <NavigationBar />
        <div className="px-[25px] pt-[200px] items-center flex lg:flex-row flex-col md:h-full h-4/5 justify-center text-black ">
          <div className="flex justify-center flex-col  items-center ">
            <FadeInWhenVisible>
              <h1 className="md:text-xxl  max-w-[16ch] text-[28px] leading-[34px] font-semibold md:text-center lg:mb-[80px] ">
                {getValue(contents, "1", "heading")}
              </h1>
            </FadeInWhenVisible>

            <EnterFromLeft>
              <img
                alt={
                  getValue(contents, "1", "imageAlt") ??
                  getValue(contents, "1", "heading")
                }
                src={getValue(contents, "1", "image")}
                className="lg:mt-[20px] mt-[40px]"
              />
            </EnterFromLeft>
          </div>
        </div>
      </section>
      <div className="lg:max-w-[800px] md:w-full  m-auto  h-full ">
        <FadeInWhenVisible>
          <p className=" lg:text-[24px] text-[16px] text-grey md:my-[120px] px-[24px] mt-0  font-medium mb-[58px]">
            {getValue(contents, "1", "description")}
          </p>
        </FadeInWhenVisible>
      </div>
      <section className="xl:max-w-[1100px] md:p-10  md:w-full  m-auto  xl:h-[950px] flex md:flex-row flex-col justify-between ">
        {cardData.map(
          (
            {
              title,
              closedImage,
              description,
              openCard,
              openImage,
              alt,
              setOpenCard,
            },
            i
          ) => (
            <div
              key={i}
              className={`
      py-[48px]  md:w-[48%]
      mx-[12px] md:mx-[0]
     flex flex-col items-center shadow-inner md:px-0 px-[25px] box-shadow lg:pt-[80px] rounded-[24px] z-30
      ${openCard ? "bg-white" : "bg-[#F4F4F4]"} 
    lg:mb-[100px] mb-[12px]`}>
              <div className="max-w-[364px] m-auto text-center">
                <div className=" flex justify-center  md:px-0 flex-col lg:mt-0 mb-[52px] ">
                  <EnterFromLeft>
                    <h3 className="font-semibold text-[24px] mr-[5px] lg:text-[28px]">
                      {title}
                    </h3>
                  </EnterFromLeft>
                </div>
                <div className="flex flex-col  md:mt-[0px] justify-center items-center ">
                  <FadeInWhenVisible>
                    {openCard ? (
                      <div className="h-[442px] ">
                        <img
                          src={openImage}
                          alt={alt}
                          className="mt-[50px] w-[75%] m-auto"
                        />
                        <p className=" md:w-[90%] m-auto lg:w-[364px] mt-[64px] text-[18px] leading-[31px]">
                          {description}
                        </p>
                      </div>
                    ) : (
                      <img
                        src={closedImage}
                        alt={alt}
                        className="h-[442px] w-[276px]"
                      />
                    )}
                  </FadeInWhenVisible>
                </div>

                {openCard ? (
                  <div
                    className=" flex justify-center mr-[20px]
                  ">
                    <Button className="my-2 whitespace-nowrap  w-fit  sm:w-fill ">
                      Order Card
                    </Button>
                  </div>
                ) : (
                  <button
                    onClick={setOpenCard}
                    className={`min-w-[148px] cursor-pointer bg-white  py-2.5 rounded-full px-[21px] h-[64px] mt-[50px] text-black font-semibold
                  transition ease-in-out delay-150 hover:scale-110 duration-300 justify-center items-center  `}>
                    Show me how it works
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </section>
      <section className="lg:max-w-[1100px] md:w-full  p-10 md:m-auto  h-full ">
        <div
          className={`
        gap-[40px]
        md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-between items-center  md:px-0 lg:pt-[80px] rounded-[24px] z-30 
      lg:mb-[100px] mb-[20px] `}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col  lg:mt-[48px] sm:mb-[48px] px-[25px]">
            <EnterFromLeft>
              <h3 className="font-semibold text-[24px] lg:text-[38px]">
                {getValue(contents, "4", "heading")}
              </h3>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "4", "description")}
              </p>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "4", "footNote")}
              </p>
              <a href="/little-in-schools#schools-section">
                <Button className="my-2 whitespace-nowrap mt-12  mb-[80px] md:mb-0 w-full md:w-fit md:flex">
                  {getValue(contents, "4", "buttonText")}
                </Button>
              </a>
            </EnterFromLeft>
          </div>
          <div className="flex basis-3/6 mt-[20px] md:mt-[0px]  justify-center items-center">
            <FadeInWhenVisible>
              <img
                src={getValue(contents, "4", "image")}
                alt={getValue(contents, "4", "imageAlt")}
              />
            </FadeInWhenVisible>
          </div>
        </div>
        <h4 className="flex font-semibold text-grey2  text-[20px] md:text-[40px] mb-[48px] md:mb-[80px] justify-center text-center">
          How it works in&nbsp;
          <span className="text-black text"></span>
        </h4>
      </section>
      <section className="bg-[#E1E4FE] min-h-full py-[80px] md:py-[150px]  little-card lg:rounded-[40px]">
        <CardStepper />
      </section>
      <section className="  lg:max-w-[1100px] md:w-full  m-auto  h-full">
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
    </Layout>
  );
};
export async function getStaticProps() {
  const contents = await client.fetch(groq`
  *[
    _type == "cards"
  ]{
  section,
    heading,
    description,
    buttonText,
    footNote,
    imageAlt,
    images,
   "imageOpen":imageOpen.asset->url,
   "image":image.asset->url,
  }

   `);
  return {
    props: {
      contents,
    },
  };
}
export default LittleCards;
