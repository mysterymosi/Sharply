/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ChevronsRight } from "react-feather";
import { urlFor } from "../utils";
import { Stepper } from "./Stepper";

export const HomeStepper = ({ images }: { images: string[] }) => {
  const homeStepList = [
    {
      heading: "Create a parent account",
      description: "Get a free 10-digit account number in 1 minute”",

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
      description: "Simply add their info and picture for a better experience",

      img: (
        <img
          src={urlFor(images[1]) as any}
          alt={images[1]}
          className=" mx-auto md:h-[400px] h-[250px]  lg:h-[500px]"
        />
      ),
    },
    {
      heading: "Order a Little Card for your child",
      description: (
        <p className="text-primary items-center  gap-2 lg:justify-start justify-center  font-semibold cursor-pointer hidden lg:w-[172px] w-fill md:w-fit sm:w-auto md:flex md:mb-0 mb-[48px] ">
          Learn More
          <ChevronsRight />
        </p>
      ),

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
      description: "Via transfer, USSD, or POS agent",

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
      description: (
        <>
          A journey of a thousand miles begins with{" "}
          <span className="font-bold">LITTLE</span> steps
        </>
      ),

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
