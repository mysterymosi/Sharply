import type { NextPage } from "next";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Captcha } from "../components/ReferPartner/Captcha";
import { Message } from "../components/ReferPartner/Message";
import { AppointmentBookingLayout } from "../components/Layout/AppointmentBookingLayout";
import { Location } from "../components/AppointmentBooking/Location";
import { ServiceProvider } from "../components/AppointmentBooking/ServiceProvider";
import { DateAndTime } from "../components/AppointmentBooking/DateAndTime";
import { MoreAboutYou } from "../components/AppointmentBooking/MoreAboutYou";
import { Confirm } from "../components/AppointmentBooking/Confirm";

const AppointmentBooking: NextPage<ContentTypeProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",
        start: "center center",
      },
      text: {
        value: "little steps",
      },
      duration: 0.3,
      delay: 0.5,
      ease: "none",
    });
  }, []);
  const [tabId, setTabId] = useState(1);
  return (
    <AppointmentBookingLayout setTabId={setTabId} tabId={tabId}>
      {tabId === 1 && <Location setTabId={setTabId} />}
      {tabId === 2 && <ServiceProvider setTabId={setTabId} />}
      {tabId === 3 && <DateAndTime setTabId={setTabId} />}
      {tabId === 4 && <MoreAboutYou setTabId={setTabId} />}
      {tabId === 5 && <Confirm />}
    </AppointmentBookingLayout>
  );
};

export default AppointmentBooking;
