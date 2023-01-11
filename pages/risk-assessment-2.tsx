import type { NextPage } from "next";
import { NavigationBar, Layout, Button, ProgressBar } from "../components";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SelectForm from "../components/SelectForm";
import { dayOptions, monthOptions, yearOptions } from "../utils";
import { RiskAssessmentLayout } from "../components/Layout/RiskAssessmentLayout";
import RadioInput from "../components/RadioInput";
import { useRouter } from "next/router";

const RiskAssessment2: NextPage<ContentTypeProps> = () => {
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
  const [selected, setSelected] = useState(null);
  const options = [
    "Within the past 3 months",
    "Between 3 to 6 months ago",
    "More than 6 months ago",
    "Never",
  ];
  return (
    <>
      <RiskAssessmentLayout level={2}>
        <div className="mt-[100px] z-10">
          <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
            When was your last HIV test?
          </h1>
          <RadioInput
            options={options}
            value={selected}
            onChange={setSelected}
          />
          <Button
            onClick={() => router.back()}
            variant="default"
            className="mr-[20px]"
          >
            Back
          </Button>
          <Button
            onClick={() => router.push("/risk-assessment-3")}
            disabled={selected === null ? true : false}
            variant="primary"
          >
            Next
          </Button>
        </div>
      </RiskAssessmentLayout>
    </>
  );
};

export default RiskAssessment2;
