import React from "react";
import { TestimonialStepper } from "./TestimonialStepper";

export const TestimonialSlider = () => {
  const testimonials = [
    {
      heading: "Play this video",
      description: (
        <p className="text-[white] text-[12px] md:text-[14px]">
          To see what <span className="font-extrabold">Mrs Marvellous</span> has
          to say about Little
        </p>
      ),
      img: (
        <img
          src="/images/testimonial-1.png"
          alt="testimonial-image"
          className="w-full h-full lg:h-full lg:w-[493px] mb-[40px] lg:mb-0"
        />
      ),
      youtubeId: "jkK7AdAJuTU",
    },
    {
      heading: "Play this video",
      description: (
        <p className="text-[white] text-[12px] md:text-[14px]">
          To see what <span className="font-extrabold">Chief Nwogbo</span> has
          to say about Little
        </p>
      ),
      img: (
        <img
          src="/images/testimonial-2.png"
          alt="testimonial-image"
          className="w-full h-full lg:h-full lg:w-[493px] mb-[40px] lg:mb-0"
        />
      ),
      youtubeId: "64tT9WnCfEs",
    },
  ];

  return <TestimonialStepper list={testimonials} page="home" />;
};
