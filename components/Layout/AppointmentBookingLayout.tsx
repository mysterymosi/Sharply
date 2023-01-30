import Cookies from "js-cookie";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Layout } from ".";
import { TabOptionTypes } from "../../types";
import { NavigationBar } from "../Navbar";

interface AppointmentBookingProps {
  children: React.ReactNode;
  tabId: number;
  setTabId: Dispatch<SetStateAction<number>>;
}

export const AppointmentBookingLayout = ({
  children,
  setTabId,
  tabId,
}: AppointmentBookingProps) => {
  const [type, setType] = useState<string | undefined>("");
  useEffect(() => {
    setType(Cookies.get("type"));
  }, []);
  const [tabOptions, setTabOptions] = useState<TabOptionTypes[]>([
    {
      id: 1,
      name: "Location",
      active: true,
      done: false,
    },
    {
      id: 2,
      name: "Service Provider",
      active: false,
      done: false,
    },
    {
      id: 3,
      name: "Date & Time",
      active: false,
      done: false,
    },
    {
      id: 4,
      name: "More about you",
      active: false,
      done: false,
    },
    {
      id: 5,
      name: "Confirm",
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
          className={`sm:bg-center bg-no-repeat bg-cover bg-white bg-top relative pb-[100px]`}
        >
          <NavigationBar page="refer-a-partner" />
          <div className="lg:container">
            <div
              style={{
                backgroundImage: "url('/images/Service-booking-BG.png')",
              }}
              className="services-hero relative flex justify-between items-center py-[68px] px-[82px] mt-[30px] rounded-[20px] bg-cover bg-no-repeat bg-center w-full"
            >
              <div className="w-[30ch]">
                <h1 className="text-[35px] font-black font-[raleway] leading-[40px] mb-[15px]">
                  {type}
                </h1>
                <p className="text-[18px] font-normal leading-[24px] mb-[20px]">
                  Make a reservation to access this service at the closest
                  service provider to you.
                </p>
              </div>
              <img
                className="absolute right-[100px] object-cover w-[264px]"
                src={"/images/Service-booking-image.png"}
                alt="logo"
              />
            </div>
          </div>
          <div className="md:h-full lg:mt-0 home-hero-section lg:pb-0 mb:pb-0 lg:container">
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
                    {tabOption.done ? (
                      <img
                        className="w-[30px] h-[30px] object-contain"
                        src={"/images/done.png"}
                        alt="logo"
                      />
                    ) : (
                      <div
                        className={`${
                          tabOption.active ? "border-blue" : "border-black1"
                        } rounded-full w-[30px] h-[30px] flex justify-center border-2`}
                      >
                        <p>{tabOption.id}</p>
                      </div>
                    )}
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
