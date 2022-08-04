/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { Play, Star } from "react-feather";
import {
  Button,
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
  Accordion,
  HomeStepper,
  PhoneInput,
  SuspenseContainer,
} from "../components";
import { faqs, moneyItemList, schools } from "../utils";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <SuspenseContainer>
      <section
        className={`${styles["home-image"]} sm:bg-center bg-no-repeat sm:h-[868px] h-[600px] bg-cover bg-top`}>
        <NavigationBar />
        <div className=" px-[25px] md:px-8 xl:px-0 flex flex-col flex-auto h-5/6 lg:max-w-[1070px] mx-auto justify-center text-white col-4">
          <h1 className="md:text-xxl  max-w-[20ch] text-[28px] leading-[34px] font-semibold ">
            A better way to give your child pocket money.
          </h1>
          <div className="max-w-[531px]">
            <p className="mt-6 text-white font-normal text-sm  ">
              Send money instantly to your child while they spend with ease.
              They own a card ; you monitor their spend.
            </p>
            <PhoneInput
              placeholder="Enter your phone number"
              text="Get Link"
              className="mt-[40px]"
            />
            <p className="text-sm mt-6">
              You’ll receive a link within 5 mins to download the Little app
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-auto justify-center items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-[#F5F5F5]">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1070px] pr-[17.5px] lg:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full md:max-w-[47ch]">
            <h2 className="font-semibold text-[24px] lg:leading-[44px] lg:text-[40px]">
              Become Intentional about your child’s financial future
            </h2>
            <p className="text-[16px] font-normal lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              Learning good money habits for the future starts today. With
              Little, your child gets a debit card with an instant bank account
              for receiving their pocket money while you guide them through the
              journey using the Little app.
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Get Started
            </Button>
          </div>
          <div className="relative">
            <img
              src="/images/video.svg"
              className="w-full h-full md:h-[400px] md:w-[460px]"
              alt="video"
            />
            <div className="w-[48px] flex absolute top-[45%] left-[46%] inset-1/2 justify-center items-center h-[48px] bg-white cursor-pointer rounded-full">
              <Play fill="#5BAB0A" color="#5BAB0A" />
            </div>
          </div>

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden justify-center flex">
            Get Started
          </Button>
        </div>
      </section>

      <section className="flex flex-auto justify-center md:px-8 pt-[80px] lg:mt-{200px] bg-[#F5F5F5]">
        <div className="flex justify-between flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1070px] pr-[17.5px] lg:mb-[106px]  w-full  transition-all  xl:mb-16 ">
          <h3 className="font-semibold text-[24px] lg:text-[40px] ">
            Money lessons made easy & practical
          </h3>
          <div className="mt-[24px] md:mt-[40px] grid  grid-cols-1 md:grid-cols-2  gap-5 gap-y-6">
            {moneyItemList.map(({ icon, title, description }) => (
              <div
                key={title}
                className=" bg-white flex flex-col justify-center h-[335px] md:h-[400px] rounded-[24px] p-[48px] ">
                <div className="w-[80px] md:w-[70px] h-[56px] md:h-[64px] rounded-full bg-[#F0F0F0] flex items-center justify-center mb-[32px]">
                  <Image
                    src={icon}
                    width={40}
                    alt="vidoe"
                    height={40}
                    layout="fixed"
                  />{" "}
                </div>

                <h4 className="font-semibold text-[20px] lg:text-[24px] ">
                  {title}
                </h4>
                <p className="text-[16px] lg:text-[18px] "> {description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-auto justify-center items-center md:px-8 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="flex justify-between md:flex-row flex-col pl-[22.5px] md:pl-0 md:pr-0 lg:max-w-[1070px] pr-[17.5px] md:pb-[106px]  w-full  lg:items-center transition-all  xl:mb-16 ">
          <div className="max-w-full sm:max-w-[30ch] lg:max-w-[45ch]">
            <h2 className="font-semibold text-[24px] lg:text-[40px] leading-[30px]  lg:leading-[50px]">
              The Smart card for The Smart Child
            </h2>
            <p className="text-[16px] font-normal lg:text-[18px] mt-6 mb-[48px] sm:mb-0">
              We designed the Little cards to cater for you and your child. The
              cards work just like a regular debit card while giving you the
              added advantage of being able to set boundaries like spending
              limits, track spend location and so much more
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Get your Card Now!
            </Button>
          </div>

          <img
            src="/images/home-card-hero.svg"
            className="w-full h-full md:h-[400px] lg:w-[460px] md:w-[300px]"
            alt="video"
          />

          <Button className="my-2 whitespace-nowrap mt-12 md:hidden justify-center flex">
            Get your Card Now!
          </Button>
        </div>
        <h4 className="flex font-semibold text-[20px] md:text-[40px] mb-[48px]">
          How it works in&nbsp;
          <span className="text-[#757575]">Little steps 👇🏽</span>
        </h4>
      </section>
      <section className="bg-[#CCF4A5] lg:rounded-[40px] w-full">
        <HomeStepper />
      </section>
      <section
        className="flex md:flex-row flex-col px-[20px] lg:max-w-[1070px] lg:mb-[100px] md:w-full m-auto justify-end flex-auto  items-center
       md:px-8 pt-[80px] lg:pt-{200px]  bg-white">
        <div className="md:basis-1/3 md:mr-[70px] ">
          <div className="max-w-[408px ]">
            <h3 className="font-semibold text-[40px] leading-[40px] md:mb-[24px] mb-[8px] ">
              Schools Trust us & Parents Love us
            </h3>
            <p>
              Little can be used in school and out of school, for online and
              offline expenses
            </p>
            <br />
            <p>
              {" "}
              Join over 15,000+ parents that are intentional about their
              children
            </p>
            <Button className="my-2 whitespace-nowrap mt-12 hidden md:flex">
              Get your Card Now!
            </Button>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="mt-[24px] md:mt-[40px] grid-flow-row grid overflow-y-auto md:grid-cols-2 bg-white gap-5 gap-y-6 mb-[60px] ms:mb-0">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className=" md:bg-white  bg-[#F5F5F5] box-shadow flex  flex-col justify-center min-h-[235px] rounded-[24px] p-[24px] ">
                  <div className="flex mb-[16px]">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          fill="#FFCF25"
                          color="#FFCF25"
                          key={i}
                          size={16}
                          className="mr-[6px]"
                        />
                      ))}
                  </div>

                  <h4 className="font-semibold md:text-[16px] text-[14px]  ">
                    Little is awesome
                  </h4>
                  <p className="text-[14px] lg:text-[15px] mt-[8px]">
                    I love Little!!!! It`s easy to use, very convenient and so
                    much more exciting for my kids being able to use their full
                    control 🤣 Thanks!!!
                  </p>
                  <p className="font-semibold text-[14px] lg:text-[15px] mt-[16px]">
                    Oluwafemi Fashikun
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
      <div className="flex justify-between m-auto lg:max-w-[1200px] md:w-full overflow-y-auto bg-white">
        {schools.map(({ name, image }) => (
          <img
            key={name}
            src={image}
            className="md:w-[80px] md:h-[75px] mx-[25px] md:mx-0"
            alt={name}
          />
        ))}
      </div>

      <section className="flex flex-col flex-auto justify-center lg:items-center px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[176px]">
        <h3 className="font-semibold text-[20px] md:text-[40px] mb-[40px] lg:mb-[80px]">
          {" "}
          Frequently Asked Questions{" "}
        </h3>
        <div className="sm:w-[627px]">
          <Accordion list={faqs} />
        </div>

        <p className=" mb-[40px] lg:mt-[80px] mt-[40px] text-[#424242]">
          Need more answers?&nbsp;
          <span className="underline cursor-pointer">Click here</span>
        </p>
      </section>
      <DownloadCard className="lg:max-w-[1070px] md:w-full xl:max-w-[1040px] lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  md:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContact className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </SuspenseContainer>
  );
};

export default Home;
