import { Dispatch, SetStateAction, useState } from "react";
import { Layout } from ".";
import { TabOptionTypes } from "../../types";
import { NavigationBar } from "../Navbar";

interface ReferPartnerProps {
  children: React.ReactNode;
  tabId: number;
  setTabId: Dispatch<SetStateAction<number>>;
}

export const ReferPartnerLayout = ({
  children,
  tabId,
  setTabId,
}: ReferPartnerProps) => {
  const [tabOptions, setTabOptions] = useState<TabOptionTypes[]>([
    {
      id: 1,
      name: "Who?",
      active: true,
    },
    {
      id: 2,
      name: "Contact",
      active: false,
    },
    {
      id: 3,
      name: "Sex",
      active: false,
    },
    {
      id: 4,
      name: "Service",
      active: false,
    },
    {
      id: 5,
      name: "Captcha2",
      active: false,
    },
    {
      id: 6,
      name: "Message",
      active: false,
    },
  ]);
  const selectTab = (id: number) => {
    let newArr = [...tabOptions];
    newArr.forEach((tabOption) => {
      if (tabOption.id === id) {
        tabOption.active = true;
        setTabId(id);
      } else {
        tabOption.active = false;
      }
    });
    setTabOptions(newArr);
  };
  return (
    <>
      <Layout title="Home" showDownloadCard>
        <section
          className={`sm:bg-center bg-no-repeat bg-cover bg-white bg-top relative pb-[100px]`}
        >
          <NavigationBar page="refer-a-partner" />
          <div className="lg:container">
            <div
              style={{
                backgroundImage: "url('/images/Referral-BG.png')",
              }}
              className="services-hero relative flex justify-between py-[52px] px-[82px] mt-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center w-full"
            >
              <div className="w-[30ch]">
                <h1 className="text-[35px] font-black font-[raleway] leading-[40px] mb-[15px]">
                  Would you like to help keep others safe?
                </h1>
                <p className="text-[18px] font-normal leading-[24px] mb-[20px]">
                  Anonymously refer people to access health services on Sharply.
                </p>
              </div>
              <img
                className="absolute bottom-0 right-[100px] object-cover w-[430px]"
                src={"/images/referral-img.png"}
                alt="logo"
              />
            </div>
          </div>
          <div className="md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0 lg:container">
            <div className="card mt-[21px] rounded-[20px] shadow-3xl px-[19px] py-[15px]">
              <div className="border-purple1 border-l-2 px-[49px]">
                <p className="text-[14px] font-normal">
                  Enter the details for someone you want to refer below and
                  preview the SMS message Sharply will send. When you click
                  <span className="font-bold"> "send referral" </span> below,
                  Sharply will send the message to the person. Repeat this
                  process to send multiple referrals.
                </p>
              </div>
            </div>
            <div className="border-2 rounded-[10px] border-grey10 flex mt-[20px] justify-items-stretch">
              {tabOptions.map((tabOption) => (
                <div
                  key={tabOption.id}
                  onClick={() => selectTab(tabOption.id)}
                  className={`cursor-pointer border-r-2 last:border-r-0 border-grey10 grow ${
                    tabOption.active ? "text-blue" : "text-black1"
                  }`}
                >
                  <div className="py-[10px] px-[20px] flex items-center">
                    <div className="rounded-full w-[30px] h-[30px] flex justify-center border-black1 border-2">
                      <p>{tabOption.id}</p>
                    </div>
                    <p className="ml-[13px] text-[14px] font-normal">
                      {tabOption.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {children}
          </div>
        </section>
      </Layout>
    </>
  );
};
