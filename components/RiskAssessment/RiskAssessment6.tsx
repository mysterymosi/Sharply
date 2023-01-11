import { useState } from "react";
import { RiskAssessmentTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const RiskAssessment6 = ({ setStepNumber }: RiskAssessmentTypes) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "I meet regularly with my doctor for PrEP care (STI testing and lab tests)",
    "I take PrEP without seeing a doctor regularly",
  ];
  const handleClick = () => {
    setStepNumber(7);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        Which of the following apply to you?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(5)}
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
