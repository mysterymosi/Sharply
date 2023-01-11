import type { NextPage } from "next";
import { Button, NavigationBar, Layout } from "../components";
import { serviceCardItems1 } from "../utils";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "react-feather";
import { ServicesCard } from "../components/ServicesCard";
import { useRouter } from "next/router";
import { ReferPartnerLayout } from "../components/Layout/ReferPartnerLayout";
import { WhoToRefer } from "../components/ReferPartner/WhoToRefer";
import { ProvideContactDetails } from "../components/ReferPartner/ProvideContactDetails";
import { SexAtBirth } from "../components/ReferPartner/SexAtBirth";
import { Service } from "../components/ReferPartner/Service";
import { Captcha } from "../components/ReferPartner/Captcha";
import { Message } from "../components/ReferPartner/Message";

const ReferPartner: NextPage<ContentTypeProps> = () => {
  const router = useRouter();
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
  const [finishIndex, setFinishIndex] = useState(3);
  const [serviceCardItems, _setServiceCardItems] = useState(serviceCardItems1);
  const loadMore = () => {
    setFinishIndex(finishIndex + 3);
  };

  const [tabId, setTabId] = useState(1);
  return (
    <ReferPartnerLayout setTabId={setTabId} tabId={tabId}>
      {tabId === 1 && <WhoToRefer setTabId={setTabId} />}
      {tabId === 2 && <ProvideContactDetails setTabId={setTabId} />}
      {tabId === 3 && <SexAtBirth setTabId={setTabId} />}
      {tabId === 4 && <Service setTabId={setTabId} />}
      {tabId === 5 && <Captcha setTabId={setTabId} />}
      {tabId === 6 && <Message setTabId={setTabId} />}
    </ReferPartnerLayout>
  );
};

export default ReferPartner;
