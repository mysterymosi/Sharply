/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { imageSliderSettings, urlFor } from "../utils";

export const ImageSlider = ({ images }: { images: any }) => {
  return (
    <Slider {...imageSliderSettings}>
      {images.map((img: string, i: number) => (
        <div className="flex align-middle justify-center " key={i}>
          <img
            key={i}
            src={urlFor(img) as any}
            className="md:h-[130px] "
            alt={img}
          />
          <p className="mt-3 ml-3 text-grey2">School Name</p>
        </div>
      ))}
    </Slider>
  );
};
