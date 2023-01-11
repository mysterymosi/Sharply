import { useState } from "react";
import { RiskAssessmentTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const RiskAssessment7 = ({ setStepNumber }: RiskAssessmentTypes) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "My viral load is suppressed or undetectable (as told by my doctor or lab test)",
    "Not sure about viral load, but have been taking HIV treatment every day for the last 6 months or more",
    "Not there yet",
    "None of the above or not sure",
  ];
  const handleClick = () => {
    setStepNumber(8);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        Which of the following apply to you?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(6)}
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
