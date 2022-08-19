/* eslint-disable @next/next/no-img-element */
import React from "react";
import { sliderSettings } from "../utils";
import Slider from "react-slick";
import { StepperListProps } from "../types";

export const Stepper = ({ list, page }: StepperListProps) => {
  return (
    <div className="xl:max-w-[1300px] px-[10px] md:px-0 lg:max-w-[1070px] md:max-w-[800px] sm:min-w-[100px] min-w-full m-auto">
      <Slider
        {...sliderSettings}
        className="flex justify-center items-center xl:px-[80px] lg:px-[40px] h-full">
        {list.map(({ heading, description, img }, i) => {
          return (
            <div key={i} className="h-full  m-auto">
              <div className="flex h-[500px] flex-col-reverse lg:flex-row md:bg-[transparent] bg-white pt-[24px] lg:pt-0 rounded-[10px]">
                <div className="px-[25px] md:px-0 max-w-full md:max-w-[43ch] text-center md:text-start md:m-auto m-auto col-span-3 sm:ml-[20px] ">
                  <h4 className="font-bold text-[20px] lg:text-[48px] lg:leading-[51px] leading-[24px]">
                    {heading}
                  </h4>
                  <h4 className="mt-[16px] text-[14px] mb-[40px] md:mb-[0]">
                    {description}
                  </h4>

                  <div className="hidden md:flex">
                    {page === "home" && i === 0 && (
                      <img
                        alt="grid of parents avatars"
                        className="w-full md:w-[400px] h-[80px] mt-[40px]"
                        src="/images/avatar-grid.svg"
                      />
                    )}
                  </div>
                </div>
                <div className="md:w-[340px] w-full mx-auto flex justify-center mb-8 lg:mb-0">
                  {img}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
