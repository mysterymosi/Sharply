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
import { useRouter } from "next/router";
import { RiskAssessment1 } from "../components/RiskAssessment/RiskAssessment1";
import { RiskAssessment2 } from "../components/RiskAssessment/RiskAssessment2";
import { RiskAssessment3 } from "../components/RiskAssessment/RiskAssessment3";
import { RiskAssessment4 } from "../components/RiskAssessment/RiskAssessment4";
import { RiskAssessment5 } from "../components/RiskAssessment/RiskAssessment5";
import { RiskAssessment6 } from "../components/RiskAssessment/RiskAssessment6";
import { RiskAssessment7 } from "../components/RiskAssessment/RiskAssessment7";
import { RiskAssessment8 } from "../components/RiskAssessment/RiskAssessment8";
import { RiskAssessment9 } from "../components/RiskAssessment/RiskAssessment9";
import { RiskAssessment10 } from "../components/RiskAssessment/RiskAssessment10";
import { RiskAssessment11 } from "../components/RiskAssessment/RiskAssessment11";
import { RiskAssessment12 } from "../components/RiskAssessment/RiskAssessment12";

const RiskAssessment: NextPage<ContentTypeProps> = () => {
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

  const [stepNumber, setStepNumber] = useState(1);

  return (
    <>
      <RiskAssessmentLayout level={stepNumber}>
        {stepNumber === 1 && <RiskAssessment1 setStepNumber={setStepNumber} />}
        {stepNumber === 2 && <RiskAssessment2 setStepNumber={setStepNumber} />}
        {stepNumber === 3 && <RiskAssessment3 setStepNumber={setStepNumber} />}
        {stepNumber === 4 && <RiskAssessment4 setStepNumber={setStepNumber} />}
        {stepNumber === 5 && <RiskAssessment5 setStepNumber={setStepNumber} />}
        {stepNumber === 6 && <RiskAssessment6 setStepNumber={setStepNumber} />}
        {stepNumber === 7 && <RiskAssessment7 setStepNumber={setStepNumber} />}
        {stepNumber === 8 && <RiskAssessment8 setStepNumber={setStepNumber} />}
        {stepNumber === 9 && <RiskAssessment9 setStepNumber={setStepNumber} />}
        {stepNumber === 10 && (
          <RiskAssessment10 setStepNumber={setStepNumber} />
        )}
        {stepNumber === 11 && (
          <RiskAssessment11 setStepNumber={setStepNumber} />
        )}
        {stepNumber === 12 && (
          <RiskAssessment12 setStepNumber={setStepNumber} />
        )}
      </RiskAssessmentLayout>
    </>
  );
};

export default RiskAssessment;
