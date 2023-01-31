import type { NextPage } from "next";
import { Button, NavigationBar, Layout } from "../components";
import { serviceCardItems1 } from "../utils";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "react-feather";
import { ServicesCard } from "../components/ServicesCard";
import { useRouter } from "next/router";

const Services: NextPage<ContentTypeProps> = () => {
  const router = useRouter();
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
  const [finishIndex, setFinishIndex] = useState(3);
  const [serviceCardItems, _setServiceCardItems] = useState(serviceCardItems1);
  const loadMore = () => {
    setFinishIndex(finishIndex + 3);
  };

  return (
    <>
      <Layout title="Home" showDownloadCard>
        <section
          className={`sm:bg-center bg-no-repeat bg-cover bg-white bg-top relative pb-[100px] px-[16px] py-[23px] lg:px-0 lg:py-0`}
        >
          <NavigationBar page="services" />
          <div className="lg:container">
            <div
              style={{
                backgroundImage: "url('/images/Risk-assessment-BG.png')",
              }}
              className="services-hero relative flex lg:flex-row flex-col items-center justify-between md:py-[52px] py-[25px] lg:px-[82px] px-[40px] mt-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center w-full"
            >
              <div className="lg:w-[30ch] lg:text-left text-center">
                <h1 className="lg:text-[35px] text-[22px] font-black font-[raleway] lg:leading-[40px] leading-[26px] mb-[15px]">
                  What’s your HIV risk level?
                </h1>
                <p className="lg:text-[18px] text-[12px] font-normal lg:leading-[24px] leading-[15px] mb-[20px]">
                  Take a quick screening quiz to find services recommend for
                  you.
                </p>
                <Button
                  className="z-[1] relative"
                  onClick={() => router.push("/risk-assessment")}
                  variant="black"
                >
                  Let's go!
                </Button>
              </div>
              <img
                className="lg:absolute z-0 lg:bottom-0 mt-[-80px] lg:right-0 lg:w-[47ch] md:hidden lg:block w-[400px]"
                src={"/images/Assessment-IMG.png"}
                alt="logo"
              />
            </div>
          </div>
          <div className="md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0 lg:container">
            <div className="flex flex-col text-center lg:text-left md:flex-row mt-[40px] flex-auto items-center lg:items-start justify-center md:justify-between h-full">
              <div>
                <p className="font-bold lg:text-[20px] text-[16px]">
                  Other Services
                </p>
                <p className="lg:text-[16px] text-[14px] font-normal">
                  Choose from our available services
                </p>
              </div>
              <div className="flex">
                <p
                  onClick={() => setFinishIndex(10)}
                  className="text-[orange] opacity-90 text-[14px] font-semibold cursor-pointer"
                >
                  see all services
                </p>
                <ArrowRight className="opacity-90" color="#E9A802" />
              </div>
            </div>
            <div className="services grid gap-4 md:grid-cols-3 grid-cols-1 mt-[80px]">
              {serviceCardItems
                .slice(0, finishIndex)
                .map(({ src, title, description }, index) => (
                  <ServicesCard
                    src={src}
                    title={title}
                    description={description}
                    key={index}
                  />
                ))}
            </div>
            {finishIndex <= 9 && (
              <div className="flex justify-between items-center mt-[60px]">
                <div className="border-[1px] border-solid border-grey7 w-[40%]"></div>
                <p
                  onClick={loadMore}
                  className="text-[14px] font-semibold cursor-pointer opacity-90"
                >
                  load more
                </p>
                <div className="border-[1px] border-solid border-grey7 w-[40%]"></div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
