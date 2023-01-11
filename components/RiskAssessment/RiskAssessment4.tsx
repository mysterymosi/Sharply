import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

interface RiskAssessment4Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
export const RiskAssessment4 = ({ setStepNumber }: RiskAssessment4Props) => {
  const [selected, setSelected] = useState(null);
  const options = [
    "I take PrEP everyday",
    "I take PrEP, but not every day",
    "I do not take PrEP",
  ];
  const handleClick = () => {
    setStepNumber(5);
  };
  return (
    <div className="mt-[100px] z-10">
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        Are you taking PrEP? (pre-exposure prophylaxis)
      </h1>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(3)}
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
