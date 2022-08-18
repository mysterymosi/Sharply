import Slider from "react-slick";
import { Star } from "react-feather";

const settings = {
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

export const Reviews = () => {
  return (
    <Slider
      {...settings}
      className="mt-[24px] flex flex-row md:mt-[40px] md:grid-flow-row md:grid
        md:grid-cols-2 bg-white gap-5 gap-y-6 mb-[60px] ms:mb-0 box">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={`${i}`}
            className=" md:bg-white bg-white2 lg:box-shadow flex  min-w-[240px]  md:min-w-min flex-col justify-center min-h-[235px] rounded-[24px] p-[24px]  box-item">
            <div className="flex mb-[16px]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    fill="#FFCF25"
                    color="#FFCF25"
                    key={i}
                    size={16}
                    className="mr-[6px]"
                  />
                ))}
            </div>

            <h4 className="font-semibold text-[16px]   ">Little is awesome</h4>
            <p className="text-[14px] lg:text-[15px] mt-[8px]">
              I love Little!!!! It`s easy to use, very convenient and so much
              more exciting for my kids being able to use their full control 🤣
              Thanks!!!
            </p>
            <p className="font-semibold text-[16px] lg:text-[15px] mt-[16px]">
              Oluwafemi Fashikun
            </p>
          </div>
        ))}
    </Slider>
  );
};
