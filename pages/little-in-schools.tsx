/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import type { NextPage } from "next";
import { ChevronsRight } from "react-feather";
import client from "../client";
import { BookList, Button, Layout, NavigationBar } from "../components";
import { Accordion } from "../components/Accordion";
import { ImageSlider } from "../components/ImageSlider";
import { PhoneInput } from "../components/Input/PhoneInput";
import {
  books,
  EnterFromLeft,
  EnterFromRight,
  FadeInWhenVisible,
  faqs,
  getValue,
  schoolBenefits,
} from "../utils";

const LittleInSchools: NextPage<any> = ({ contents, schoolContent }) => {
  return (
    <Layout title="Little in Schools" showDownloadCard>
      <section
        className={`sm:h-[868px] lg:h-[800px] md:h-screen h-[1000px] bg-[#D4D3FC]`}>
        <NavigationBar buttonText={"Refer a school and earn"} />
        <div className=" pt-[100px] px-[25px] flex md:flex-row flex-col lg:gap-[145px] md:gap-[50px] items-center  h-full justify-center text-black ">
          <div className="flex justify-center flex-col">
            <EnterFromLeft>
              <h1 className="lg:text-[53px] lg:leading-[60px]  max-w-[14ch] text-[28px] leading-[34px] font-semibold ">
                {getValue(contents, "1", "heading")}
              </h1>
              <div className="max-w-[440px]">
                <p className="mt-6 text-black font-medium text-sm">
                  {getValue(contents, "1", "description")}
                </p>
                <PhoneInput
                  placeholder="Enter your phone number"
                  text={getValue(contents, "1", "buttonText")}
                  className="mt-[40px]"
                  type={"phone"}
                  buttonClassName="bg-[#FB991B]"
                />
                <p className="text-sm mt-6 text-center md:text-start">
                  {getValue(contents, "1", "footNote")}
                </p>
              </div>
            </EnterFromLeft>
          </div>
          <FadeInWhenVisible>
            <img
              alt={
                getValue(contents, "1", "imageAlt") ??
                getValue(contents, "1", "heading")
              }
              src={getValue(contents, "1", "image")}
              className="w-[480px] mt-[40px] md:mt-0"
            />
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="flex flex-col flex-auto justify-center items-center md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full md:max-w-[35ch]">
            <EnterFromLeft>
              <h2 className="font-semibold text-[24px] flex lg:text-[40px] leading-[50px]">
                <img
                  src="/images/goal-icon.svg"
                  className=" md:h-[40px] md:w-[40px] mr-[16px]"
                  alt="video"
                />
                {getValue(contents, "2", "heading")}
              </h2>
              <p className="text-[16px] font-medium lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
                {getValue(contents, "2", "description")}
              </p>
            </EnterFromLeft>
          </div>
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "2", "image")}
              alt={getValue(contents, "2", "imageAlt")}
              className="w-full h-full md:h-[400px] md:w-[520px]"
            />
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="flex  flex-col flex-auto justify-center items-center md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="flex md:gap-[50px] justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1100px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "3", "image")}
              alt={getValue(contents, "3", "imageAlt")}
              className="w-full h-full  md:w-[460px]"
            />
          </FadeInWhenVisible>

          <div className="max-w-full lg:max-w-[50ch] md:max-w-[45ch]">
            <EnterFromRight>
              <h2 className="font-semibold text-[24px] lg:text-[40px] md:leading-[50px] leading-[30px] mb-4 mt-[30px]">
                {getValue(contents, "3", "heading")}
              </h2>
              <p className="font-semibold mb-0 text-[16px] lg:text-[18px]">
                For Pocket Money Card in School
              </p>

              <p className="text-[16px] font-medium lg:text-[18px] mt-1 mb-[24px] sm:mb-0">
                The card is accompanied by an App where parents/guardians can
                get instant notifications, set spending limits and block cards.
              </p>
              <p className="font-semibold mt-4 mb-0 ">
                For Access Control in School
              </p>
              <p className="text-[16px] font-medium lg:text-[18px] mt-1 mb-[24px] sm:mb-0">
                This Smart card is also designed to offer a secure way to
                control entries and exits into the school environment while
                sending parents and the necessary authority instant
                notifications.
              </p>
              <p className="font-semibold mt-4">For Payments</p>
              <p className="text-[16px] font-medium lg:text-[18px] mt-1 mb-[24px] sm:mb-0">
                Quick and easy way to make other payments accepted by the
                school. Can be used to pay tuition, bus fees, books, excursion
                fees etc.
              </p>

              <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
                {getValue(contents, "3", "buttonText")}
              </Button>
            </EnterFromRight>
          </div>

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden mb-[80px] justify-center flex">
            {getValue(contents, "3", "buttonText")}
          </Button>
        </div>
        <FadeInWhenVisible>
          <h4 className="flex font-semibold text-[18px] md:text-[24px] mb-[48px]">
            Schools that trust Little
          </h4>
        </FadeInWhenVisible>
      </section>
      <FadeInWhenVisible>
        <div className="lg:max-w-[1400px] m-auto">
          <ImageSlider images={getValue(schoolContent, "7", "images")} />
        </div>
      </FadeInWhenVisible>

      <section
        className="flex flex-col  px-[20px] md:px-0 md:x-0 md:mt-[80px] mt-0
      lg:mb-[100px] md:w-full xl:max-w-[1100px] m-auto justify-end flex-auto  
   pt-[80px] lg:pt-{200px]  mb-[16px] bg-white">
        <FadeInWhenVisible>
          <h3 className="font-semibold  md:text-[40px] text-[20px] mb-[48px]  text-center">
            How it works in Little
            <span className="text-grey2"> steps</span>
          </h3>
        </FadeInWhenVisible>

        <div className="flex justify-between flex-col md:flex-row h-[1100px]  sm:h-[660px] md:mt-[82px]">
          <div className="box-shadow basis-[49%] h-[400px]  md:h-full  px-[48px] pt-[64px] rounded-[16px]">
            <FadeInWhenVisible>
              <p className="font-semibold md:text-[18px] capitalize leading-[31px]">
                {getValue(contents, "5", "heading")}
              </p>
            </FadeInWhenVisible>

            <p className="md:mt-[21px] capitalize font-semibold md:text-[30px] text-[20px] ">
              {getValue(contents, "5", "description")}
            </p>
            <FadeInWhenVisible>
              <img
                src={getValue(contents, "5", "image")}
                alt={
                  getValue(contents, "5", "imageAlt") ??
                  getValue(contents, "5", "heading")
                }
                className="md:w-[313px] w-[140px] h-full lg:mt-[80px] mx-auto md:h-[342px]   "
              />
            </FadeInWhenVisible>
          </div>
          <div className="box-shadow basis-[49%] px-[48px] pt-[64px] rounded-[16px] mt-[12px] md:mt-0">
            <FadeInWhenVisible>
              <p className="font-semibold md:text-[18px] capitalize leading-[31px]">
                {getValue(contents, "6", "heading")}
              </p>
            </FadeInWhenVisible>
            <p className="md:mt-[21px] lg:leading-[34px] capitalize font-semibold md:text-[30px]  text-[20px] ">
              {getValue(contents, "6", "description")}
            </p>
            <FadeInWhenVisible>
              <img
                src={getValue(contents, "6", "image")}
                alt={
                  getValue(contents, "6", "imageAlt") ??
                  getValue(contents, "6", "heading")
                }
                className="w-fit mt-[65px] md:mt-[86px] flex justify-center items-center mx-auto"
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
      <section
        className={`
       gap-[30px]  md:px-0 md:mx-auto
       flex  md:flex-row  flex-col-reverse justify-around items-center shadow-inner box-shadow pt-[63px] 
       rounded-[24px] z-30 lg:pl-[100px] 
        mb-[20px]
       lg:max-w-[1100px] lg:mb-[100px] md:w-full  m-auto  mx-[20px] px-[48px] h-full  bg-white`}>
        <Button className="my-2 whitespace-nowrap  md:hidden  mt-12 w-full text-center justify-center flex mb-[48px]">
          {getValue(contents, "7", "buttonText")}
        </Button>
        <div className="max-w-[51ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <FadeInWhenVisible>
            <p className="md:text-[18px] leading-[31px] mb-[13px] font-[#3D3D3D] font-semibold">
              {getValue(contents, "7", "heading")}
            </p>
          </FadeInWhenVisible>

          <h3 className="font-semibold lg:text-[30px]  text-[20px]">
            {getValue(contents, "7", "description")}
          </h3>
          <p className="text-primary items-center  gap-2 lg:justify-start justify-center  font-semibold cursor-pointer hidden lg:w-[172px]  mt-12 w-fill md:w-fit sm:w-auto md:flex md:mb-0 mb-[48px] text-[20px]">
            {getValue(contents, "7", "buttonText")}
            <ChevronsRight />
          </p>
        </div>

        <div className="flex flex-col mt-[20px] md:mt-[0px] justify-center items-center order-2">
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "7", "image")}
              alt={
                getValue(contents, "7", "imageAlt") ??
                getValue(contents, "7", "heading")
              }
              className="w-[370px] h-full hidden md:flex"
            />
            <img
              src={"/images/eposFull.png"}
              alt={
                getValue(contents, "7", "imageAlt") ??
                getValue(contents, "7", "heading")
              }
              className="w-[370px] h-full md:hidden flex"
            />
          </FadeInWhenVisible>
        </div>
      </section>
      <section className="flex flex-col flex-auto justify-start items-center md:px-5 pt-[80px] lg:pt-{200px] mt-[80px]  bg-[#EBFDD9]">
        <div className="flex justify-start lg:gap-[107px] md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1170px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <FadeInWhenVisible>
            <img
              src={getValue(contents, "8", "image")}
              alt={
                getValue(contents, "8", "imageAlt") ??
                getValue(contents, "8", "heading")
              }
              className="w-full h-full md:h-[590px] hidden md:flex "
            />
          </FadeInWhenVisible>

          <div className="max-w-full md:max-w-[35ch]">
            <EnterFromRight>
              <h2 className="font-semibold text-[24px] lg:text-[32px] leading-[50px]">
                {getValue(contents, "8", "heading")}
              </h2>
              <ul className="pl-[15px] mt-[32px] small-list-item">
                {schoolBenefits.map((benefit) => (
                  <li className="mb-5 text-[20px] pl-[10px] " key={benefit}>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex bg-[#FB991B]">
                {getValue(contents, "8", "buttonText")}
              </Button>
            </EnterFromRight>
          </div>

          <Button className="my-2 whitespace-nowrap mt-12 mb-[80px] md:mb-0 md:hidden justify-center flex bg-[#FB991B]">
            {getValue(contents, "8", "buttonText")}
          </Button>
        </div>
      </section>
      <section className="flex flex-col flex-auto md:px-0 px-[23px] pt-[80px] xl:max-w-[1100px] m-auto lg:pt-{200px]  ">
        <EnterFromLeft>
          <h3 className="md:text-[34px] text-[20px] font-semibold mb-[40px]">
            Get our free books
          </h3>
          <p>
            {`Coming soon  >>>>`}
            <span className="font-semibold"> Our free book for students </span>
          </p>
        </EnterFromLeft>
      </section>
      <section className="flex flex-col flex-auto justify-center lg:items-center px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[176px]">
        <h3 className="font-semibold text-[20px] md:text-[40px] mb-[40px] lg:mb-[80px]">
          Frequently Asked Questions
        </h3>
        <div className="sm:w-[627px]">
          <Accordion list={faqs} />
        </div>

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
    _type == "schools"
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
  const schoolContent = await client.fetch(groq`
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
  const blogContent = await client.fetch(groq`
   *[
     _type == "blog"
   ]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    "image" :image.asset->url,
    'estimatedReadingTime' : round(length(pt::text(body)) / 5 / 180 ),

  }
 
    `);
  return {
    props: {
      contents,
      schoolContent,
      blogContent,
    },
  };
}
export default LittleInSchools;
