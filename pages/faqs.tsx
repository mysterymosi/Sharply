import type { NextPage } from "next";
import { NavigationBar, Accordion, Layout } from "../components";
import { allFaqs } from "../utils";

const FAQS: NextPage = () => {
  return (
    <Layout title="  Frequently Asked Questions ">
      <NavigationBar />
      <section className="flex flex-col px-[20px] pt-[80px] lg:pt-{200px]  bg-white mb-[104px] lg:mb-[120px]">
        <div className="flex flex-col flex-auto justify-center sm:items-center lg:mb-[80px]  mb-[40px] ">
          <h3 className="font-semibold lg:max-w-[14ch]  m-auto text-[20px] md:text-[40px] mt-[40px] lg:mt-[80px]">
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

        <div className="mb-[40px] text-grey justify-center m-auto lg:max-w-[622px] w-full">
          <p className="font-semibold">Got more questions?</p>
          <p>You can call us on 0802xxxxxxx or email support@etc.com</p>
        </div>
      </section>
    </Layout>
  );
};

export default FAQS;
