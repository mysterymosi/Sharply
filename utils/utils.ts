import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { ContentProp } from "../types";

export function truncateString(str: string, num: number) {
  if (str?.length <= num) {
    return str;
  }
  return str?.slice(0, num) + "...";
}

export const builder = imageUrlBuilder(client);
export function urlFor(source: string) {
  return builder.image(source);
}
export const getValue = (contents: any, sectionNumber: string, key: string) =>
  contents.find(({ section }: ContentProp) => section == sectionNumber)?.[key];

export const duration = 0.1;

export const timelineOptionsStart = {
  duration: duration,
  opacity: 0,
  x: 50,
  autoAlpha: 1,
};

export const timelineOptionsEnd = {
  duration: duration,
  opacity: 1,
  x: 0,
  autoAlpha: 0,
};

export const scrollTrigerOptions = {
  pin: ".list",
  scrub: true,
  start: "center center",
  snap: 0.1,
  trigger: ".list",
};
export const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  speed: 300,
};
export const testimonialSliderSettings = {
  ...sliderSettings,
  autoplay: false,
};
export const imageSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  height: 100,
  autoplay: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
export const reviewSettings = {
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  className: "center",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 2,
        slidesToShow: 1,
        infinite: true,
        rows: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1,
        infinite: true,
        rows: 1,
        swipeToSlide: true,
        arrows: false,
      },
    },
  ],
};


export const serverUrl = process.env.NEXT_PUBLIC_LOCAL_URL
? process.env.NEXT_PUBLIC_LOCAL_URL
: "";