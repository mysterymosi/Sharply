import type { NextPage } from "next";
import {
  DownloadCard,
  Footer,
  NavigationBar,
  WhatsappContact,
  Accordion,
} from "../components";
import { allFaqs } from "../utils";

const Home: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <section className="flex flex-col px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[120px]">
        <div className="flex flex-col flex-auto justify-center sm:items-center lg:mb-[80px]  mb-[40px] ">
          <h3 className="font-semibold lg:max-w-[13ch]  m-auto text-[20px] md:text-[40px] mt-[40px] lg:mt-[80px]">
            {" "}
            Frequently Asked Questions (FAQs)
          </h3>
          <div className="sm:w-[627px]">
            {allFaqs.map(({ title, faqs }) => (
              <div key={title}>
                <p className="font-semibold text-lg mb-[32px] mt-[80px]">
                  {title}
                </p>
                <Accordion list={faqs} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-[40px] text-[#424242] justify-center m-auto lg:max-w-[622px] w-full">
          <p className="font-semibold">Got more questions?</p>
          <p>You can call us on 0802xxxxxxx or email support@etc.com</p>
        </div>
      </section>
      <DownloadCard className="lg:max-w-[1000px]  md:w-full xl:max-w-[1040px] lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
      <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  xl:mb-16 overflow-x-hidden md:px-5">
        <WhatsappContact className="lg:mb-[106px] lg:mt-10 mb-[90px]" />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
