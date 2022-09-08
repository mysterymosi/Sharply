/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { imageSliderSettings, urlFor } from "../utils";

export const ImageSlider = ({ images }: { images: any }) => {
  return (
    <Slider {...imageSliderSettings}>
      {images.map((img: string, i: number) => (
        <img
          key={i}
          src={urlFor(img) as any}
          className="md:h-[100px] md:w-[120px] h-[80px] w-[93px]"
          alt={img}
        />
      ))}
    </Slider>
  );
};
