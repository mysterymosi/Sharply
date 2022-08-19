/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { imageSliderSettings, urlFor } from "../utils";

export const ImageSlider = ({ images }: { images: any }) => {
  return (
    <div className="image-slider">
      <div className="md:flex hidden justify-between m-auto overflow-x-auto md:w-full">
        {images.map((img: string, i: number) => (
          <img
            key={i}
            src={urlFor(img) as any}
            className="md:w-[80px] hover:scale-[0.9] md:h-[75px] mx-[25px] md:mx-0"
            alt={img}
          />
        ))}
      </div>
      <div className="block md:hidden">
        <Slider {...imageSliderSettings} className="">
          {images.map((img: string, i: number) => (
            <img
              key={i}
              src={urlFor(img) as any}
              className="h-[80px] w-[93px]"
              alt={img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
