import type { NextPage } from "next";
import { Button, NavigationBar, Layout, Loader } from "../components";
import { EnterFromLeft } from "../utils";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HomeModal from "../components/Modal";

const Home: NextPage<ContentTypeProps> = () => {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, []);

  const [showModal, setShowModal] = useState(false);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Layout title="Home" showDownloadCard>
        <HomeModal type="home" show={showModal} setShow={setShowModal} />
        <section
          className={`sm:bg-center bg-no-repeat h-screen bg-cover bg-blue bg-top relative`}
        >
          <NavigationBar page="home" />
          <div className="px-[25px] md:px-8 xl:px-0  lg:max-w-[1070px] mx-auto text-white md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0">
            <div className="flex flex-col md:flex-row items-center flex-auto justify-center md:justify-between h-full">
              <EnterFromLeft>
                <div>
                  <h1 className="md:text-xxl font-[raleway]  max-w-[20ch] text-xl   xs:text-[30px] leading-[75px]">
                    Simple access to confidential health services near you,{" "}
                    <br />
                    <span className="text-orange font-bold">sharp sharp!</span>
                  </h1>
                  <div className="max-w-[531px]">
                    <p className="mt-6 text-white font-normal text-base leading-[33px]">
                      Find nearby health services on Sharply.
                    </p>
                    <Button
                      variant="secondary"
                      className="my-[30px] whitespace-nowrap"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-[137px]">
                  <div>
                    <img
                      className="w-[300px]"
                      src="/images/poweredby.png"
                      alt="powered by"
                    />
                  </div>
                </div>
              </EnterFromLeft>
              <div className="z-[5] absolute right-[120px] bottom-[215px]">
                <img
                  className="w-[92px]"
                  src="/images/message.png"
                  alt="powered by"
                />
              </div>
              <img
                className="w-[892px] h-[892px] z-[4] mt-[50px] object-contain absolute top-[200px] right-[-100px] md:mt-[0] cursor-pointer"
                src="/images/hero3.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] z-[3] mt-[50px] object-contain absolute top-[180px] right-[-110px] md:mt-[0] cursor-pointer"
                src="/images/hero2.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] z-[2] mt-[50px] object-contain absolute top-[170px] right-[-130px] md:mt-[0] cursor-pointer"
                src="/images/hero1.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] z-[1] mt-[50px] object-contain absolute top-[190px] right-[-160px] md:mt-[0] cursor-pointer"
                src="/images/hero4.png"
                alt="hero"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
