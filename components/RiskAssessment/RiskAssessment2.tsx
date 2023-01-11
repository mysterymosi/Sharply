import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

interface RiskAssessment2Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
export const RiskAssessment2 = ({ setStepNumber }: RiskAssessment2Props) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "Within the past 3 months",
    "Between 3 to 6 months ago",
    "More than 6 months ago",
    "Never",
  ];
  const handleClick = () => {
    setStepNumber(3);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        When was your last HIV test?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(1)}
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
