import { useState } from "react";
import { RiskAssessmentTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const RiskAssessment8 = ({ setStepNumber }: RiskAssessmentTypes) => {
  const [selected, setSelected] = useState(null);
  const options = ["Male", "Female", "Transgender", "Rather not say"];
  const handleClick = () => {
    setStepNumber(9);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        How do you identify your gender today?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(7)}
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
