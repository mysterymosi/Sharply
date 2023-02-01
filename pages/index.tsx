import type { NextPage } from "next";
import { Button, NavigationBar, Layout, Loader } from "../components";
import { EnterFromLeft } from "../utils";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HomeModal from "../components/Modal";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";

const Home: NextPage<ContentTypeProps> = () => {
  const router = useRouter();
  const serverUrl = process.env.NEXT_PUBLIC_LOCAL_URL
    ? process.env.NEXT_PUBLIC_LOCAL_URL
    : "";
  const cookieUserId = Cookies.get("userId");
  const { error } = useQuery("init", () =>
    axios.get(`${serverUrl}/init`).then((res) => {
      if (cookieUserId) {
        return;
      }
      Cookies.set("userId", res.data.data.id);
    })
  );
  if (error) {
    console.log(error);
  }
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
          className={`sm:bg-center bg-no-repeat h-screen bg-cover bg-blue bg-top relative overflow-x-hidden`}
        >
          <NavigationBar page="home" />
          <div className="lg:pt-0 pt-[20px] md:container text-white md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0">
            <div className="flex flex-col lg:flex-row items-center flex-auto justify-center lg:justify-between h-full lg:text-left text-center">
              <EnterFromLeft>
                <div>
                  <div className="block lg:hidden mt-[120px]">
                    <Image
                      src={"/images/white.svg"}
                      width={124}
                      alt="logo"
                      height={45}
                      layout="fixed"
                    />
                  </div>
                  <h1 className="md:text-xxl landscape:mt-[40px] font-[raleway] mt-[89px] lg:mt-0  max-w-[20ch] text-[29px]  leading-[35px]">
                    Simple access to confidential health services near you,{" "}
                    <br />
                    <span className="text-orange font-bold">sharp sharp!</span>
                  </h1>
                  <div className="lg:max-w-[531px]">
                    <p className="lg:mt-6 mt-[9px] text-white font-normal lg:text-base text-[12px] leading-[33px]">
                      Find nearby health services on Sharply.
                    </p>
                    <Button
                      onClick={() => router.push("/services")}
                      variant="secondary"
                      className="my-[30px] whitespace-nowrap"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex lg:justify-between justify-center items-center mt-[137px]">
                  <div>
                    <img
                      className="w-[300px] hidden lg:block"
                      src="/images/poweredby.png"
                      alt="powered by"
                    />
                    <div className="block lg:hidden">
                      <p className="uppercase tracking-[0.88em] text-white font-normal text-[7px] mb-[8px]">
                        powered by
                      </p>
                      <img
                        className="w-full h-[44px]"
                        src="/images/bottom-img.svg"
                        alt="powered by"
                      />
                      <p className="text-white font-normal text-[9px] mt-[6px]">
                        Global Fund National Alliance HIV/AIDS Initiative
                      </p>
                    </div>
                  </div>
                </div>
              </EnterFromLeft>
              <img
                className="w-[892px] h-[892px] hidden lg:block z-[4] mt-[50px] object-contain absolute top-[200px] right-[-100px] md:mt-[0]"
                src="/images/hero3.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] hidden lg:block z-[3] mt-[50px] object-contain absolute top-[180px] right-[-110px] md:mt-[0]"
                src="/images/hero2.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] hidden lg:block z-[2] mt-[50px] object-contain absolute top-[170px] right-[-130px] md:mt-[0]"
                src="/images/hero1.png"
                alt="hero"
              />
              <img
                className="w-[892px] h-[892px] hidden lg:block z-[1] mt-[50px] object-contain absolute top-[190px] right-[-160px] md:mt-[0]"
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
