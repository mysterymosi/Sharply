import React from "react";
import { testimonialSliderSettings } from "../utils";
import Slider from "react-slick";
import { StepperListProps } from "../types";
import { Play } from "react-feather";
import posthug from "posthog-js";

export const TestimonialStepper = ({ list }: StepperListProps) => {
  return (
    <div className="xl:max-w-[1300px] px-[10px] md:px-0 lg:max-w-[1070px] md:max-w-[800px] sm:min-w-[100px] min-w-full m-auto">
      <Slider
        {...testimonialSliderSettings}
        className="flex justify-center items-center xl:px-[80px] lg:px-[40px] h-full"
      >
        {list.map(({ heading, description, img, youtubeId }, i) => {
          return (
            <a
              key={i}
              href="#"
              className="mklbItem"
              data-youtube-id={youtubeId}
            >
              <div
                onClick={() => {
                  posthug.capture("play_icon_clicked", {
                    location: `Home page (Schools trust us and parents love us)`,
                    action: "opens modal to play ad",
                  });
                }}
                className="relative"
              >
                <div className="absolute h-full w-full flex items-center justify-center">
                  <div className="box-shadow w-[40px] flex inset-1/2 justify-center items-center h-[40px] bg-white cursor-pointer rounded-full">
                    <Play size={18} fill="#5BAB0A" color="#5BAB0A" />
                  </div>
                </div>
                {img}
                <div className="flex absolute bottom-[0] px-[20px] md:px-[43px] pb-[20px] md:pb-[25px]">
                  <div className="ml-[16px]">
                    <p className="text-[white] text-[14px] font-medium md:text-[16px]">
                      {heading}
                    </p>
                    {description}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </Slider>
    </div>
  );
};
