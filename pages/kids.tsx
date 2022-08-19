/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import type { NextPage } from "next";
import client from "../client";
import { Button, NavigationBar, PhoneInput, Layout } from "../components";
import { ContentTypeProps } from "../types";
import { EnterFromLeft, FadeInWhenVisible, getValue } from "../utils";
const Kids: NextPage<ContentTypeProps> = ({ contents }) => {
  return (
    <Layout title="Kids" showDownloadCard>
      <section
        className={`sm:h-[868px] lg:h-[800px] md:h-[1200px] h-[950px] bg-[#F6ED97]`}>
        <NavigationBar />
        <div className=" xl:max-w-[1100px] md:max-w-[950px]  pt-[150px] gap-[50px]  m-auto items-center px-[25px] lg:px-0 flex lg:flex-row flex-col  justify-center text-black ">
          <div className="flex justify-center flex-col">
            <EnterFromLeft>
              <h1 className="md:text-xxl  md:max-w-[16ch] text-xl  xs:text-[30px] leading-[40px] font-semibold ">
                {getValue(contents, "1", "heading")}
              </h1>
              <div className="max-w-[440px]">
                <p className="mt-6 text-black font-medium text-sm  ">
                  {getValue(contents, "1", "description")}
                </p>
                <PhoneInput
                  placeholder="Enter parent phone number"
                  text={getValue(contents, "1", "buttonText")}
                  className="mt-[40px]"
                  type={"phone"}
                />
                <p className="text-sm mt-6 text-center md:text-start">
                  {getValue(contents, "1", "footNote")}
                </p>
              </div>
            </EnterFromLeft>
          </div>
          <FadeInWhenVisible>
            <img
              className="w-[480px]"
              alt={
                getValue(contents, "1", "imageAlt") ??
                getValue(contents, "1", "heading")
              }
              src={getValue(contents, "1", "image")}
            />
          </FadeInWhenVisible>
        </div>
      </section>
      <section
        className={` md:px-[20px] lg:px-0
        gap-[30px]
       flex  md:flex-row  flex-col justify-around items-center  py-[80px] rounded-[24px] z-30   mb-[20px]  px-[25px]
       xl:max-w-[1100px] md:max-w-[950px] lg:mb-[100px] md:w-full  m-auto lg:mt-9   h-full `}>
        <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {getValue(contents, "2", "heading")}
          </h3>
          <p className="text-[18px] mb-[13px]">
            {getValue(contents, "2", "description")}{" "}
          </p>
          <Button className="my-2 whitespace-nowrap w-full mt-12 md:w-fit sm:w-auto md:flex">
            {getValue(contents, "2", "buttonText")}
          </Button>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <FadeInWhenVisible>
            <img
              className="w-auto h-auto"
              src={getValue(contents, "2", "image")}
              alt={getValue(contents, "2", "imageAlt")}
            />
          </FadeInWhenVisible>
        </div>
      </section>
      <section
        className={`
        gap-[30px]  md:px-[20px] lg:px-0
       flex  md:flex-row  flex-col justify-around items-center  py-[80px] rounded-[24px] z-30 px-[25px]  mb-[20px]
       xl:max-w-[1100px] md:max-w-[950px] lg:mb-[100px] md:w-full  m-auto   h-full `}>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-last md:order-1 ">
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "3", "image")}
              alt={getValue(contents, "3", "imageAlt")}
            />{" "}
          </FadeInWhenVisible>
        </div>
        <div className="max-w-[48ch] flex justify-center  md:px-0 flex-col  mt-[48px] order-2 sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px]">
            {" "}
            {getValue(contents, "3", "heading")}
          </h3>
          <p className="text-[18px] mb-[13px]">
            {getValue(contents, "3", "description")}
          </p>
        </div>
      </section>
      <section
        className={`
        bg-[#E1E4FE]  md:px-[20px]
        gap-[40px]
       flex  md:flex-row  flex-col justify-around items-center shadow-inner  box-shadow pt-[80px] rounded-[24px] z-30 lg:px-[100px]  mb-[20px]
       lg:max-w-[1000px] xl:max-w-[1350px]  lg:mb-[100px] md:w-full  m-auto  px-[25px] h-full `}>
        <div className="max-w-[40ch] flex justify-center  md:px-0 flex-col order-last md:order-1  sm:mb-[48px] lg:mt-0 ">
          <h3 className="font-semibold text-[24px] lg:text-[38px] lg:leading-[49px]">
            {" "}
            {getValue(contents, "4", "heading")}
          </h3>
          <p className="text-[18px] mb-[13px] mt-[8px]">
            {getValue(contents, "4", "description")}
          </p>
          <Button className="my-2 whitespace-nowrap w-full mt-12 md:w-[172px] sm:w-auto md:flex mb-[48px] lg:mb-0">
            {getValue(contents, "4", "buttonText")}
          </Button>
        </div>
        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <FadeInWhenVisible>
            <img src={getValue(contents, "4", "image")} alt={"gift money"} />
          </FadeInWhenVisible>
        </div>
      </section>
    </Layout>
  );
};
export async function getStaticProps() {
  const contents = await client.fetch(groq`
  *[
    _type == "kids"
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
export default Kids;
