import type { NextPage } from "next";
import { ContentTypeProps } from "../types";
import { useEffect, useState } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { RiskAssessmentLayout } from "../components/Layout/RiskAssessmentLayout";
import { RiskAssessment1 } from "../components/RiskAssessment/RiskAssessment1";
import { RiskAssessment2 } from "../components/RiskAssessment/RiskAssessment2";
import { useQuery } from "react-query";
import axios from "axios";
import { serverUrl } from "../utils";
import Cookies from "js-cookie";

const RiskAssessment: NextPage<ContentTypeProps> = () => {
  const { error, data } = useQuery("riskAssessment", async () => {
    const { data } = await axios.get(
      `${serverUrl}/risk/questions?user_id=${Cookies.get("userId")}`
    );
    let firstElement = data?.data.slice(0, 1);
    let arraySorted = data?.data.slice(1).sort((a: any, b: any) => a.id - b.id);
    let finalArray = firstElement.concat(arraySorted);
    return finalArray;
  });
  if (error) {
    console.log(error);
  }
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
        {data?.map(
          (value: any, index: number) =>
            stepNumber === index + 1 && (
              <div key={value.id}>
                {index === 0 ? (
                  <RiskAssessment1 setStepNumber={setStepNumber} />
                ) : (
                  <RiskAssessment2
                    id={value?.id}
                    dataLength={data.length}
                    question={value?.question}
                    options={value?.options}
                    setStepNumber={setStepNumber}
                    stepNumber={stepNumber}
                  />
                )}
              </div>
            )
        )}
      </RiskAssessmentLayout>
    </>
  );
};

export default RiskAssessment;
