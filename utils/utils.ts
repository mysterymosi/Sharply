import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { ContentProp, ContentTypeProps } from "../types";

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
