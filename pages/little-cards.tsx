/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import type { NextPage } from "next";
import client from "../client";
import { Button, NavigationBar, Accordion, Layout } from "../components";
import { CardStepper } from "../components/CardStepper";
import { ContentTypeProps } from "../types";
import {
  EnterFromLeft,
  EnterFromRight,
  FadeInWhenVisible,
  getValue,
  giftLinkFaqs,
} from "../utils";

const LittleCards: NextPage<ContentTypeProps> = ({ contents }) => {
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
      <section className="lg:max-w-[1100px] md:w-full  m-auto  h-full ">
        <div
          className={`
        py-[48px]
        gap-[40px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow lg:pt-[80px] rounded-[24px] z-30
        lg:p-[100px]  
      lg:mb-[100px] mb-[12px]`}>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1  lg:mt-0 ">
            <EnterFromLeft>
              <h3 className="font-semibold text-[24px] lg:text-[32px]">
                {" "}
                {getValue(contents, "2", "heading")}
              </h3>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "2", "description")}
              </p>
              <Button className="my-2 whitespace-nowrap mt-12 w-fit hidden md:flex  sm:w-fill ">
                Order Card
              </Button>
            </EnterFromLeft>
          </div>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
            <FadeInWhenVisible>
              <img src={getValue(contents, "2", "image")} alt={"family"} />
            </FadeInWhenVisible>
          </div>
          <Button className="my-2 whitespace-nowrap mt-12 w-fit md:hidden flex  sm:w-fill ">
            {getValue(contents, "2", "buttonText")}
          </Button>
        </div>
      </section>
      <section className="lg:max-w-[1100px] md:w-full  m-auto  h-full ">
        <div
          className={`
        gap-[40px]  py-[48px]
        mx-[12px] md:mx-[0]
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner md:px-0 px-[25px] box-shadow  
       rounded-[24px] z-30 lg:p-[100px]  
       lg:mb-[100px] mb-[12px]`}>
          <Button className="my-2 whitespace-nowrap mt-12 w-fit md:hidden flex  sm:w-fill ">
            {getValue(contents, "3", "buttonText")}
          </Button>
          <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center">
            <FadeInWhenVisible>
              <img src={"/images/verve-green.svg"} alt={"green verve card"} />
            </FadeInWhenVisible>
          </div>
          <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col lg:mt-0 ">
            <EnterFromRight>
              <h3 className="font-semibold text-[24px] lg:text-[32px]">
                {" "}
                {getValue(contents, "3", "heading")}
              </h3>
              <p className="text-[18px] mb-[13px]">
                {getValue(contents, "3", "description")}
              </p>
              <Button className="my-2 whitespace-nowrap mt-12 w-fit  hidden md:flex  sm:w-fill ">
                {getValue(contents, "3", "buttonText")}
              </Button>
            </EnterFromRight>
          </div>
        </div>
      </section>
      <section className="lg:max-w-[1100px] md:w-full  m-auto  h-full ">
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
              <Button className="my-2 whitespace-nowrap mt-12  mb-[80px] md:mb-0 w-full md:w-fit md:flex">
                {getValue(contents, "4", "buttonText")}
              </Button>
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
        <h4 className="flex font-semibold text-[20px] md:text-[40px] mb-[48px] md:mb-[80px] justify-center text-center">
          How little card works 👇🏽
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
    "image" :image.asset->url
  }

   `);
  return {
    props: {
      contents,
    },
  };
}
export default LittleCards;
