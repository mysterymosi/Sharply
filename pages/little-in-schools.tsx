import groq from "groq";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronsRight } from "react-feather";
import client from "../client";
import { Button, Layout, NavigationBar } from "../components";
import { Accordion } from "../components/Accordion";
import { ImageSlider } from "../components/ImageSlider";
import { PhoneInput } from "../components/Input/PhoneInput";
import {
  EnterFromLeft,
  EnterFromRight,
  FadeInWhenVisible,
  faqs,
  getValue,
  liitleSchoolFeatures,
  schoolBenefits,
} from "../utils";

const LittleInSchools: NextPage<any> = ({ contents, schoolContent }) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const addPhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const orderCard = () => {
    if (!phoneNumber) {
      return;
    }
    localStorage.setItem("phoneNumber", phoneNumber);
    router.push("/book-a-call");
  };
  return (
    <Layout title="Little in Schools" showDownloadCard>
      <section
        className={`sm:h-[868px] lg:h-[800px] md:h-screen h-[1000px] bg-[#D4D3FC]`}
      >
        <NavigationBar
          buttonText={"Refer a school and earn"}
          buttonClassName="rgb(251,153,27,0.6)"
        />
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
                  onChange={(e) => addPhoneNumber(e)}
                  placeholder="Enter your phone number"
                  text={getValue(contents, "1", "buttonText")}
                  className="mt-[40px]"
                  type={"phone"}
                  onClick={orderCard}
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
      <section className="flex flex-col  px-[20px]  lg:mb-[100px] md:w-full xl:max-w-[1100px] m-auto justify-end flex-auto   md:px-5 pt-[80px] lg:pt-{200px]  bg-white">
        <h3 className="font-semibold md:text-[40px] text-[24px] text-center">
          {getValue(contents, "3", "heading")}
        </h3>
        <div className="mt-[24px] md:mt-[40px] flex md:flex-row flex-col justify-between mb-[64px] gap-5 gap-y-6">
          {liitleSchoolFeatures.map(({ title, description, color, image }) => (
            <div
              key={title}
              className={` md:bg-white box-shadow  flex flex-col justify-start basis-2/6 min-h-[350px] rounded-[24px] px-[24px] py-[40px] `}
            >
              <div
                className={` ${
                  color === "#5BAB0A"
                    ? "bg-[#5BAB0A]"
                    : color === "#FF991B"
                    ? "bg-[#FF991B]"
                    : "bg-[#35AFF7]"
                }
                  flex h-[40px] justify-center items-center rounded-[48px] md:mb-0 mb-[40px] w-[50px] `}
              >
                <FadeInWhenVisible> {image}</FadeInWhenVisible>
              </div>

              <h4 className="font-semibold text-[24px]  lg:mt-[40px]  ">
                {title}
              </h4>
              <p id="schools-section" className="text-[16px] mt-[8px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FadeInWhenVisible>
        <div className="lg:max-w-[1300px] m-auto ">
          <ImageSlider images={getValue(schoolContent, "7", "images")} />
        </div>
      </FadeInWhenVisible>

      {/* refer and earn */}
      <section className="flex flex-col  px-[20px]  lg:mb-[100px] md:w-full xl:max-w-[1100px] m-auto justify-end flex-auto   md:px-5 pt-[90px] md:pt-[180px] lg:pt-{200px]  bg-white">
        <div
          className={` md:bg-white box-shadow items-center flex flex-col md:flex-row justify-start basis-2/6 min-h-[350px] rounded-[24px] px-[17px] sm:px-[64px] py-[17px] sm:py-[70px] `}
        >
          <div className="mb-[32px] md:mb-[0]">
            <p className="font-semibold">Refer and earn</p>
            <p className="font-semibold text-[20px] md:text-[32px] leading-[132%] mt-[20px]">
              Get a school to adopt Little and earn up to{" "}
              <span className="text-green">NGN200,000</span> in referal fees
            </p>
            <Button
              onClick={() => router.push("/refer-a-school")}
              className="hover:scale-100 mt-[20px] px-[43px] hidden sm:hidden md:block"
            >
              Refer a school
            </Button>
          </div>
          <img
            src="/images/refer-and-earn.png"
            alt="Refer and earn"
            className="w-full md:w-[520px] "
          />
          <Button
            onClick={() => router.push("/refer-a-school")}
            className="hover:scale-100 mt-[32px] px-[43px] block md:hidden"
          >
            Refer a school and earn
          </Button>
        </div>
      </section>
      <section
        className="flex flex-col  px-[20px] md:px-0 md:x-0 md:mt-[80px] mt-0
      lg:mb-[100px] md:w-full xl:max-w-[1100px] m-auto justify-end flex-auto  
   pt-[80px] lg:pt-{200px]  mb-[16px] bg-white"
      >
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
       lg:max-w-[1100px] lg:mb-[100px] md:w-full  m-auto  mx-[20px] px-[48px] h-full  bg-white`}
      >
        {/* <Button className="my-2 whitespace-nowrap  md:hidden  mt-12 w-full text-center justify-center flex mb-[48px]">
          {getValue(contents, "7", "buttonText")}
        </Button> */}
        <div className="max-w-[51ch] flex justify-center  md:px-0 flex-col order-last md:order-1 mt-[48px] sm:mb-[48px] lg:mt-0 ">
          <FadeInWhenVisible>
            <p className="md:text-[18px] leading-[31px] mb-[13px] font-[#3D3D3D] font-semibold">
              {getValue(contents, "7", "heading")}
            </p>
          </FadeInWhenVisible>

          <h3 className="font-semibold lg:text-[30px]  text-[20px]">
            {getValue(contents, "7", "description")}
          </h3>
        </div>

        <div className="flex flex-col mt-[20px] md:mt-[0px] mb-[48px] md:mb-[0] justify-center items-center order-2">
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
              <Button
                onClick={() => router.push("/book-a-call")}
                className="my-2 whitespace-nowrap mt-12 hidden md:flex bg-[#FB991B]"
              >
                {getValue(contents, "8", "buttonText")}
              </Button>
            </EnterFromRight>
          </div>

          <Button
            onClick={() => router.push("/book-a-call")}
            className="my-2 whitespace-nowrap mt-12 mb-[80px] md:mb-0 md:hidden justify-center flex bg-[#FB991B]"
          >
            {getValue(contents, "8", "buttonText")}
          </Button>
        </div>
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
          <span className="underline cursor-pointer">
            <Link href={"/faqs"}>Click here</Link>
          </span>{" "}
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
