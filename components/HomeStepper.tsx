/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../utils";
import { Stepper } from "./Stepper";

export const HomeStepper = ({ images }: { images: string[] }) => {
  const homeStepList = [
    {
      heading: "Create a parent account on Little",
      description:
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

      img: (
        <img
          className=" mx-auto md:w-[300px] h-[250px]  lg:h-[500px]"
          src={urlFor(images[3]) as any}
          alt={images[3]}
        />
      ),
    },
    {
      heading: "Watch them grow into  financially responsible adult",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis morbi rhoncus eu.",

      img: (
        <img
          alt="watch child grow"
          className=" md:w-[200px] h-[250px] lg:h-[500px] lg:w-full m-auto"
          src={urlFor(images[4]) as any}
        />
      ),
    },
  ];

  return <Stepper list={homeStepList} page="home" />;
};
