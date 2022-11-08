import { NextPage } from "next";
import { useRouter } from "next/router";
import { X } from "react-feather";
import { Button } from "../components";
import { EnterFromLeft, FadeInWhenVisible } from "../utils";

const RequestReceived: NextPage = () => {
  const router = useRouter();
  return (
    <section>
      <button
        onClick={() => router.push("/")}
        className="w-[40px] flex h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow absolute right-[24px] md:right-[24px] top-[27px] md:top-[27px]"
      >
        <X />
      </button>
      <div className="pt-[40px] sm:pt-[40px] md:pt-[163px] px-[25px] flex md:flex-row flex-col lg:gap-[145px] md:gap-[50px] items-center  h-full justify-center text-black ">
        <FadeInWhenVisible>
          <img
            alt="logo"
            height={240}
            src="/images/downloadCard.svg"
            className="w-[241px] sm:w-[241px] md:w-[341px] mt-[60px] sm:mt-[60px] md:mt-[40px] mb-[79px] sm:mb-[79px] md:mb-[0px] md:mt-0"
          />
        </FadeInWhenVisible>
        <div className="flex justify-center flex-col max-w-[46ch]">
          <EnterFromLeft>
            <h1 className="lg:text-[40px] block sm:block md:hidden mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              We got your card request
            </h1>
            <h1 className="lg:text-[40px] hidden sm:hidden md:block mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              We have received your request.
            </h1>
            <p className="lg:text-[16px] text-[16px] text-grey5">
              We’ll send you the next steps on how to get your card and download
              the app.
            </p>
            <Button
              onClick={() => router.push("/")}
              className="w-full hover:scale-100 mt-[49px]"
            >
              Okay got it!
            </Button>
          </EnterFromLeft>
        </div>
      </div>
    </section>
  );
};

export default RequestReceived;
