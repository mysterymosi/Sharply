/* eslint-disable @next/next/no-img-element */
import {
  EnterFromLeft,
  FadeInWhenVisible,
  scrollTrigerOptions,
  timelineOptionsEnd,
  timelineOptionsStart,
} from "../utils";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export const CardStepper = ({
  list,
}: {
  list: {
    description: string;
    title: string;
    image: string;
  }[];
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targets = document.querySelectorAll(".list li");
    const height = (targets.length - 1) * 200 + "%";
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
  return (
    <ul className="list invisible h-screen w-full min-h-screen relative lg:max-w-[1000px] md:w-full  m-auto ">
      {list.map(({ description, title, image }, i) => (
        <li
          key={i}
          className={`w-full h-full absolute flex 
        flex-col md:flex-row   mx-auto
          lg:justify-between  justify-center px-[20px] lg:px-[0]
          items-center 
           
          `}>
          <div className="max-w-[400px]">
            <EnterFromLeft>
              <h3 className="font-bold md:text-[46px] text-[20px]  lg:leading-[51px]">
                {title}
              </h3>
              <p className="font-medium text-[18px] lg:mt-[16px]">
                {description}
              </p>
            </EnterFromLeft>
          </div>
          <div className="flex basis-3/6  md:mt-[0px] justify-center items-center">
            <FadeInWhenVisible>
              <img src={image} alt={title} className="object-cover" />
            </FadeInWhenVisible>
          </div>
        </li>
      ))}
    </ul>
  );
};
