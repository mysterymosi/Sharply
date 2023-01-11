import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

interface RiskAssessment5Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
export const RiskAssessment5 = ({ setStepNumber }: RiskAssessment5Props) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "Everyday",
    "Some days",
    "No longer taking treatment",
    "Did not start taking treatment",
  ];
  const handleClick = () => {
    setStepNumber(6);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        How often are you taking treatment?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(4)}
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
