/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FadeInWhenVisible, urlFor } from "../utils";
import Slider from "react-slick";

export const HomeStepper = ({ images }: { images: string[] }) => {
  const homeStepList = [
    {
      heading: "Create a parent account on Little",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

      img: (
        <img
          src={urlFor(images[0]) as any}
          alt={images[0]}
          className="  mx-auto  h-[250px]  lg:h-[500px]"
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
          className=" mx-auto md:h-[400px] h-[250px]  lg:h-[500px]"
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
          className=" md:w-[200px] h-[250px] lg:h-[500px] lg:w-full m-auto"
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
          className=" mx-auto md:w-[300px] h-[250px]    lg:h-[500px]"
          src={urlFor(images[3]) as any}
          alt={images[3]}
        />
      ),
    },
    {
      heading: "Watch them grow into a financially responsible adult",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",
      backgroundColor: "green",
      img: (
        <img
          alt="watch child grow"
          className=" md:w-[200px] h-[250px] lg:h-[500px] lg:w-full m-auto"
          src={urlFor(images[4]) as any}
        />
      ),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 300,
  };

  return (
    <div className="xl:max-w-[1300px] px-[10px] md:px-0 lg:max-w-[1070px] md:max-w-[800px] sm:min-w-[100px] min-w-full m-auto">
      <Slider
        {...settings}
        className="flex justify-center items-center xl:px-[80px] lg:px-[40px] h-full">
        {homeStepList.map(({ heading, details, img }, i) => {
          return (
            <div key={i} className="h-full  m-auto">
              <div className="flex h-[500px] flex-col-reverse lg:flex-row md:bg-[transparent]  bg-white pt-[24px] lg:pt-0 rounded-[10px]">
                <div className="px-[25px] md:px-0 max-w-full md:max-w-[43ch] text-center md:text-start md:m-auto m-auto col-span-3 sm:ml-[20px] ">
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
                <div className="md:w-[340px] w-full mx-auto flex justify-center mb-8 lg:mb-0">
                  <FadeInWhenVisible> {img}</FadeInWhenVisible>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
