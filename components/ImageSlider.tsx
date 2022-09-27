/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { imageSliderSettings, urlFor } from "../utils";

export const ImageSlider = ({ images,id }: { images: any , id?:string}) => {

  const schools =['Queens College, Yaba', 'St. Finbarr’s College, Akoka', 'Ladela Schools, Abuja', ' Baptist Boys’ Academy, Obanikoro', 'Igbobi College, Yaba', 'Reagan Memorial Baptist Girls, Yaba', 'Federal Science and Technical College, Yaba', 'Federal Science and Technical College, Yaba', 'Methodist Boys’ High School, Victoria Island']
  return (
    <Slider {...imageSliderSettings}>
      {images.map((img: string, i: number) => (
        <div className="flex align-middle justify-center " key={i}>
          <img
            key={i}
            src={urlFor(img) as any}
            className="md:h-[130px] m-auto "
            alt={img}
          />
          <p className="mt-3  text-grey2 text-center">{schools[i]}</p>
        </div>
      ))}
    </Slider>
  );
};
