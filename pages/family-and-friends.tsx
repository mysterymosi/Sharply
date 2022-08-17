/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import type { NextPage } from "next";
import client from "../client";
import { Button, NavigationBar, Accordion, Layout } from "../components";
import { GiftCardCol } from "../components/GiftcardCol";
import { ContentTypeProps } from "../types";

import {
  EnterFromLeft,
  FadeInWhenVisible,
  getValue,
  giftLinkFaqs,
  giftlinkOptions,
  shareGiftlinkOptions,
} from "../utils";

const FamilyAndFriends: NextPage<ContentTypeProps> = ({ contents }) => {
  return (
    <Layout title="Family and Friends" showDownloadCard>
      <section
        className={`  sm:h-[868px] lg:h-[800px] md:h-[600px] h-[950px] `}>
        <NavigationBar />
        <div className="lg:gap-[50px]  mt-[100px] items-center px-[25px] m-auto lg:max-w-[1100px] lg:px-0 flex lg:flex-row flex-col  h-5/6 justify-center text-black ">
          <div className="flex justify-center flex-col">
            <EnterFromLeft>
              {" "}
              <h1 className="md:text-xxl  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
                {getValue(contents, "1", "heading")}{" "}
              </h1>
              <div className="max-w-[440px]">
                <p className="mt-6 text-black font-medium text-sm  ">
                  {getValue(contents, "1", "description")}
                </p>
                <Button className="my-2 whitespace-nowrap w-full mt-12 md:w-fit sm:w-auto md:flex">
                  {getValue(contents, "1", "buttonText")}
                </Button>
              </div>
            </EnterFromLeft>
          </div>
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "1", "image")}
              className="w-[480px]"
              alt={
                getValue(contents, "1", "imageAlt") ??
                getValue(contents, "1", "heading")
              }
            />
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="lg:max-w-[1100px] md:w-full  m-auto  h-full ">
        <FadeInWhenVisible>
          <p className="font-semibold lg:text-[24px] text-[16px] text-grey mb-[24px] text-center">
            Step 1
          </p>{" "}
        </FadeInWhenVisible>

        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Create a Giftlink on Little
        </h3>
        <GiftCardCol
          className={`
        bg-[#E1E4FE]
        flex-col-reverse lg:pt-[80px]  lg:px-[100px]  
      lg:mb-[212px] mb-[20px] `}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
            <EnterFromLeft>
              <h3 className="font-semibold text-[24px] lg:text-[38px]">
                {getValue(contents, "2", "heading")}
              </h3>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "2", "description")}
              </p>
            </EnterFromLeft>

            <ul className="flex flex-col mt-[40px]">
              {giftlinkOptions.map(({ name, icon }) => (
                <li className="flex items-center mb-[24px]" key={name}>
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full mr-[20px]">
                    <FadeInWhenVisible>
                      {" "}
                      <img src={icon} alt="name" />
                    </FadeInWhenVisible>
                  </div>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <FadeInWhenVisible>
              {" "}
              <img
                src={getValue(contents, "2", "image")}
                alt={
                  getValue(contents, "2", "imageAlt") ??
                  getValue(contents, "2", "heading")
                }
              />
            </FadeInWhenVisible>
          </div>
        </GiftCardCol>
      </section>
      <section className="  lg:max-w-[1100px] md:w-full  m-auto mb-[80px] md:mb-0  h-full">
        <FadeInWhenVisible>
          <p className="font-semibold lg:text-[24px] text-[16px] text-grey mb-[24px] text-center">
            Step 2
          </p>{" "}
        </FadeInWhenVisible>
        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Share secure giftlink with family & friends
        </h3>
        <GiftCardCol
          className={`
        bg-[#F9F2B4]
      flex-col  lg:pb-[80px] pb-[60px] lg:pt-0  lg:px-[100px]  mb-[20px]
      lg:mb-[212px]  `}>
          <div className="max-w-[40ch] flex justify-center pt-0 lg:pt-[100px]  md:px-0 flex-col order-last md:order-1  sm:mb-[48px] lg:mt-0 ">
            <h3 className="font-semibold text-[24px] lg:text-[38px]">
              {" "}
              {getValue(contents, "3", "heading")}
            </h3>
            <p className="text-[18px] mb-[13px]">
              {getValue(contents, "3", "description")}
            </p>

            <ul className="flex flex-col mt-[40px]">
              {shareGiftlinkOptions.map(({ name, icon }) => (
                <li className="flex items-center mb-[24px]" key={name}>
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full mr-[20px]">
                    <FadeInWhenVisible>
                      {" "}
                      <img src={icon} alt="name" />
                    </FadeInWhenVisible>
                  </div>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:mt-[0px] mb-[34px] justify-center items-center order-2">
            <FadeInWhenVisible>
              {" "}
              <img
                src={getValue(contents, "3", "image")}
                alt={
                  getValue(contents, "3", "imageAlt") ??
                  getValue(contents, "3", "heading")
                }
              />
            </FadeInWhenVisible>
          </div>
        </GiftCardCol>
      </section>
      <section className="  lg:max-w-[1100px] md:w-full  m-auto  h-full">
        <FadeInWhenVisible>
          {" "}
          <p className="font-semibold lg:text-[24px] text-[16px] text-grey mb-[24px] text-center">
            Step 3
          </p>
        </FadeInWhenVisible>
        <h3 className="font-semibold lg:text-[36px] text-[20px] mb-[64px] lg:mb-[120px] text-center ">
          Receive & track gift money.
        </h3>
        <GiftCardCol
          className={`
        bg-[#E1F7FE]
         flex-col-reverse
       lg:py-[91px] pb-[51px] lg:pb-auto
      lg:px-[100px]  mb-[80px] 
      lg:mb-[212px]  `}>
          <div className="max-w-[40ch] flex justify-center   md:px-0 flex-col order-last md:order-1 mt-[48px] lg:mt-0 ">
            <EnterFromLeft>
              <h3 className="font-semibold text-[24px] lg:text-[38px]">
                {" "}
                {getValue(contents, "4", "heading")}
              </h3>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "4", "description")}{" "}
              </p>
            </EnterFromLeft>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <FadeInWhenVisible>
              <img
                src={getValue(contents, "4", "image")}
                alt={
                  getValue(contents, "4", "imageAlt") ??
                  getValue(contents, "4", "heading")
                }
              />
            </FadeInWhenVisible>
          </div>
        </GiftCardCol>
      </section>
      <section className="  lg:max-w-[1100px] md:w-full  m-auto  h-full">
        <div
          className={`
        md:gap-[100px]
       flex  md:flex-row  flex-col-reverse md:justify-around  md:px-0 px-[25px]  pb-[80px] rounded-[24px] z-30 lg:px-[50px] lg:mt-[100px]  lg:my-[80px] 
         `}>
          <div className="lg:max-w-[40ch] flex   md:px-0 flex-col order-last md:order-1 sm:mb-[48px]">
            <FadeInWhenVisible>
              {" "}
              <img
                src={"/images/faq.svg"}
                alt={"family"}
                className="md:flex justify-center hidden"
              />
            </FadeInWhenVisible>
            <h3 className="font-semibold text-[20px] lg:text-[38px] lg:mt-[40px]">
              Frequently Asked Questions
            </h3>
            <p className="text-[18px] mb-[13px] md:flex  hidden">
              Need more answers? Click here
            </p>
          </div>

          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center lg:w-1/2 order-2 w-full">
            <Accordion list={giftLinkFaqs} className="w-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export async function getStaticProps() {
  const contents = await client.fetch(groq`
  *[
    _type == "friends"
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
export default FamilyAndFriends;
