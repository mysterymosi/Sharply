/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { HomeStepProps } from "../types";
import {
  duration,
  FadeInWhenVisible,
  scrollTrigerOptions,
  timelineOptionsEnd,
  timelineOptionsStart,
  urlFor,
} from "../utils";
import { Stepper } from "./Stepper";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const HomeStepper = ({ images }: { images: string[] }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targets = document.querySelectorAll(".list li");
    const height = (targets.length - 1) * 150 + "%";
    gsap.set(".list", { autoAlpha: 1 });

    const timeline = gsap.timeline({
      defaults: {
        overwrite: "auto",
      },
      scrollTrigger: {
        ...scrollTrigerOptions,
        end: `+${height}`,
      },
    });

    targets.forEach((elem) => {
      timeline.fromTo(elem, timelineOptionsStart, timelineOptionsEnd);
    });
  }, []);
  const homeStepList = [
    {
      heading: "Create a parent account on Little",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

      img: (
        <img
          src={urlFor(images[0]) as any}
          alt={images[0]}
          className="w-full mx-auto md:h-[400px] object-cover lg:h-[600px]"
        />
      ),
    },

    {
      heading: "Add your child",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
      backgroundColor: "red",
      img: (
        <img
          src={urlFor(images[1]) as any}
          alt={images[1]}
          className="w-full mx-auto md:h-[400px] lg:h-[600px]"
        />
      ),
    },
    {
      heading: "Order Little Card for your child",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
      backgroundColor: "yellow",
      img: (
        <img
          src={urlFor(images[2]) as any}
          alt={images[2]}
          className="w-full md:w-[200px] lg:w-full m-auto"
        />
      ),
    },
    {
      heading: "Fund your child’s Little wallet",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
      backgroundColor: "purple",
      img: (
        <img
          className="w-full mx-auto md:w-[300px]  md:h-[400px]  lg:h-[600px]"
          src={urlFor(images[3]) as any}
          alt={images[3]}
        />
      ),
    },
    {
      heading: "Watch them grow into a ",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
      backgroundColor: "green",
      img: (
        <img
          alt="watch child grow"
          className="w-full md:w-[200px]  lg:w-full m-auto"
          src="/images/watch-grow.svg"
        />
      ),
    },
  ];

  return (
    <ul className="list max-w-[1300px] m-auto invisible h-screen  w-full min-h-screen relative">
      {homeStepList.map(({ heading, details, img }, i) => {
        return (
          <li
            key={i}
            className="w-full h-full absolute flex justify-center items-center mx-auto">
            <div className={`grid md:grid-cols-7 grid-cols-1 gap-0 md:gap-6 `}>
              <Stepper
                steps={[1, 2, 3, 4, 5]}
                currentStep={i + 1}
                className="hidden lg:flex col-span-1"
              />
              <div className="max-w-full md:max-w-[43ch] m-auto col-span-3 sm:ml-[20px] lg:ml-0">
                <h4 className="font-bold text-[20px] lg:text-[48px] lg:leading-[51px] leading-[24px]">
                  {heading}
                </h4>
                <h4 className="mt-[16px] text-[14px] mb-[40px] md:mb-[0]">
                  {details}
                </h4>

                <div className="hidden md:flex">
                  {i === 0 && (
                    <img
                      alt="grid of parents avatars"
                      className="w-full md:w-[400px] h-[80px] mt-[40px]"
                      src="/images/avatar-grid.svg"
                    />
                  )}
                </div>
              </div>
              <div className="md:w-[340px] w-full mx-auto flex justify-center mb-8 md:mb-0">
                <FadeInWhenVisible> {img}</FadeInWhenVisible>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
