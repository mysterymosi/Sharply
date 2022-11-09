import { TestimonialSlider } from "./TestimonialSlider";
import posthug from "posthog-js";
import { EnterFromLeft, getValue } from "../utils";
import { ContentProp } from "../types";
import { Button } from "./Button";
import { useRouter } from "next/router";
import Script from "next/script";

interface TestimonialType {
  contents: ContentProp[];
}
export const Testimonials = ({ contents }: TestimonialType) => {
  const router = useRouter();
  return (
    <>
      <Script src="/mklb.js"></Script>
      <section className="flex md:flex-col flex-col px-[20px] lg:max-w-[1500px] lg:mb-[100px] md:w-full m-auto justify-center flex-auto  items-start   md:px-[200px] pt-[80px] lg:pt-{200px]  bg-white">
        <div
          className={`md:mr-[70px] mb-[60px] md:mb-[90px] +
            ${router.pathname.includes("parents") ? "w-full" : ""}`}
        >
          <div
            className={router.pathname.includes("parents") ? "text-center" : ""}
          >
            <EnterFromLeft>
              <h3 className="font-semibold md:text-[40px] text-xl   xs:text-[30px] leading-[40px] md:leading-[40px] md:mb-[24px] mb-[8px] mt-2 ">
                {!router.pathname.includes("parents")
                  ? getValue(contents, "6", "heading")
                  : "Parents That Love Us"}
              </h3>
              <p className="text-base ">
                {getValue(contents, "6", "description")}
              </p>
              <br />
              <p className="text-base">
                {" "}
                {getValue(contents, "6", "footNote")}
              </p>
              <Button
                onClick={() => {
                  router.push("/order-a-card");
                  posthug.capture("get_your_card_now_clicked", {
                    location: `Home page (${getValue(
                      contents,
                      "6",
                      "heading"
                    )})`,
                  });
                }}
                className={`my-2 whitespace-nowrap mt-12 w-full md:w-auto`}
              >
                {getValue(contents, "6", "buttonText")}
              </Button>
            </EnterFromLeft>
          </div>
        </div>
        <div className="hidden xl:flex xl:flex-row flex-col justify-between md:gap-[120px]">
          <a href="#" className="mklbItem" data-youtube-id="jkK7AdAJuTU">
            <div
              onClick={() => {
                posthug.capture("play_icon_clicked", {
                  location: `Home page (Schools trust us and parents love us)`,
                  action: "opens modal to play ad",
                });
              }}
              className="relative"
            >
              <img
                src="/images/testimonial-1.png"
                alt="testimonial-image"
                className="w-full h-full lg:h-full lg:w-[493px] mb-[40px] lg:mb-0"
              />

              <div className="flex absolute bottom-[0] px-[20px] md:px-[43px] pb-[25px]">
                <img
                  src="/images/play.svg"
                  className="w-[40px] h-[40px]"
                  alt="play"
                />
                <div className="ml-[16px]">
                  <p className="text-[white] text-[14px] md:text-[15px]">
                    Play this video
                  </p>
                  <p className="text-[white] text-[12px] md:text-[13px]">
                    To see what{" "}
                    <span className="font-extrabold">Mrs Marvellous</span> has
                    to say about Little
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="mklbItem" data-youtube-id="64tT9WnCfEs">
            <div
              onClick={() => {
                posthug.capture("play_icon_clicked", {
                  location: `Home page (Schools trust us and parents love us)`,
                  action: "opens modal to play ad",
                });
              }}
              className="relative"
            >
              <img
                src="/images/testimonial-2.png"
                alt="testimonial-image"
                className="w-full h-full lg:h-full lg:w-[493px] mb-[40px] lg:mb-0"
              />
              <div className="flex absolute bottom-[0] px-[20px] md:px-[43px] pb-[25px]">
                <img
                  src="/images/play.svg"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
                <div className="ml-[16px]">
                  <p className="text-[white] text-[14px] md:text-[15px]">
                    Play this video
                  </p>
                  <p className="text-[white] text-[12px] md:text-[13px]">
                    To see what{" "}
                    <span className="font-extrabold">Chief Nwogbo</span> has to
                    say about Little
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <section className="xl:hidden px-[10px] sm:px-[40px] overflow-hidden w-full relative flex">
          <TestimonialSlider />
        </section>
      </section>
    </>
  );
};
