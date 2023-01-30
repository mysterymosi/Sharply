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
          className={`sm:bg-center bg-no-repeat bg-cover bg-white bg-top relative pb-[100px]`}
        >
          <NavigationBar page="services" />
          <div className="lg:container">
            <div
              style={{
                backgroundImage: "url('/images/Risk-assessment-BG.png')",
              }}
              className="services-hero relative flex justify-between py-[52px] px-[82px] mt-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center w-full"
            >
              <div className="w-[30ch]">
                <h1 className="text-[35px] font-black font-[raleway] leading-[40px] mb-[15px]">
                  What’s your HIV risk level?
                </h1>
                <p className="text-[18px] font-normal leading-[24px] mb-[20px]">
                  Take a quick screening quiz to find services recommend for
                  you.
                </p>
                <Button
                  onClick={() => router.push("/risk-assessment")}
                  variant="black"
                >
                  Let's go!
                </Button>
              </div>
              <img
                className="absolute bottom-0 right-0 w-[47ch]"
                src={"/images/Assessment-IMG.png"}
                alt="logo"
              />
            </div>
          </div>
          <div className="md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0 lg:container">
            <div className="flex flex-col md:flex-row mt-[40px] flex-auto justify-center md:justify-between h-full">
              <div>
                <p className="font-bold text-[20px]">Other Services</p>
                <p className="text-[16px] font-normal">
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
