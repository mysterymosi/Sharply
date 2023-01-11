import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

interface RiskAssessment3Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
export const RiskAssessment3 = ({ setStepNumber }: RiskAssessment3Props) => {
  const [selected, setSelected] = useState(null);
  const options = ["HIV negative", "HIV positive", "Not sure"];
  const handleClick = () => {
    setStepNumber(4);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        What is your HIV status?
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(2)}
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
