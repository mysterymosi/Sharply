import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
      done: false,
    },
    {
      id: 2,
      name: "Contact",
      active: false,
      done: false,
    },
    {
      id: 3,
      name: "Sex",
      active: false,
      done: false,
    },
    {
      id: 4,
      name: "Service",
      active: false,
      done: false,
    },
    {
      id: 5,
      name: "Captcha2",
      active: false,
      done: false,
    },
    {
      id: 6,
      name: "Message",
      active: false,
      done: false,
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
  const setTabIdToDone = (id: number) => {
    let newArr = [...tabOptions];
    newArr.forEach((tabOption) => {
      if (tabOption.id < id) {
        tabOption.done = true;
        setTabId(id);
      } else {
        tabOption.done = false;
      }
    });
    setTabOptions(newArr);
  };

  useEffect(() => {
    selectTab(tabId);
    setTabIdToDone(tabId);
  }, [tabId]);
  return (
    <>
      <Layout title="Home" showDownloadCard>
        <section
          className={`sm:bg-center bg-no-repeat bg-cover bg-white bg-top relative pb-[100px] px-[16px] lg:px-0 py-[23px] lg:py-0`}
        >
          <NavigationBar page="refer-a-partner" />
          <div className="lg:container">
            <div
              style={{
                backgroundImage: "url('/images/Referral-BG.png')",
              }}
              className="services-hero relative flex lg:flex-row flex-col justify-between lg:py-[52px] py-[25px] lg:px-[82px] px-[50px] mt-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center w-full h-[280px] md:h-full"
            >
              <div className="lg:w-[30ch] text-center lg:text-left">
                <h1 className="lg:text-[35px] text-[22px] font-black font-[raleway] lg:leading-[40px] leading-[26px] mb-[15px]">
                  Would you like to help keep others safe?
                </h1>
                <p className="lg:text-[18px] text-[12px] font-normal lg:leading-[24px] leading-[15px] mb-[20px]">
                  Anonymously refer people to access health services on Sharply.
                </p>
              </div>
              <img
                className="absolute bottom-0 right-[80px] lg:right-[100px] object-cover lg:w-[430px] w-[212px] md:hidden lg:block"
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
                  <div className="py-[10px] lg:px-[20px] px-[10px] flex lg:flex-row flex-col items-center">
                    {tabOption.done ? (
                      <img
                        className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] object-contain lg:mb-0 mb-[5px]"
                        src={"/images/done.png"}
                        alt="logo"
                      />
                    ) : (
                      <div
                        className={`${
                          tabOption.active ? "border-blue" : "border-black1"
                        } rounded-full lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] lg:text-[16px] text-[10px] lg:mb-0 mb-[5px] flex justify-center border-2`}
                      >
                        <p>{tabOption.id}</p>
                      </div>
                    )}
                    <p className="lg:ml-[13px] lg:text-[14px] text-[10px] font-normal">
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
