import { useState } from "react";
import { RiskAssessmentTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const RiskAssessment11 = ({ setStepNumber }: RiskAssessmentTypes) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "Sex with a condom or condom broke",
    "I shared a needle with someone else",
    "None of these",
  ];
  const handleClick = () => {
    setStepNumber(12);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        Have you experienced any of the following since your last HIV test?
      </h1>
      <p className="text-gold text-[15px] mb-[40px]">
        Select all that applies.
      </p>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(10)}
        variant="default"
        className="mr-[20px]"
      >
        Back
      </Button>
      <Button
        onClick={handleClick}
        disabled={selected === null ? true : false}
        variant="primary"
      >
        Next
      </Button>
    </div>
  );
};
