import Cookies from "js-cookie";
import { Dispatch, SetStateAction, useState } from "react";
import { dayOptions, monthOptions, yearOptions } from "../../utils";
import { Button } from "../Button";
import SelectForm from "../SelectForm";

interface RiskAssessment1Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
export const RiskAssessment1 = ({ setStepNumber }: RiskAssessment1Props) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const handleClick = () => {
    const dob = `${day}/${month}/${year}`;
    Cookies.set("dob", dob);
    setStepNumber(2);
  };
  return (
    <div className="mt-[100px] lg:text-left text-center z-10 relative">
      <h1 className="font-black font-[raleway] lg:text-[35px] text-[22px] lg:w-[24ch] leading-[40px] mb-[40px]">
        Please enter your date of birth.
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-[40px] lg:w-[50ch]">
        <SelectForm
          options={dayOptions}
          placeholder="Day"
          onChange={(selected) => setDay(selected.value)}
        />
        <SelectForm
          options={monthOptions}
          placeholder="Month"
          onChange={(selected) => setMonth(selected.value)}
        />
        <SelectForm
          options={yearOptions}
          placeholder="Year"
          onChange={(selected) => setYear(selected.value)}
        />
      </div>
      <Button
        onClick={handleClick}
        disabled={
          day === null || month === null || year === null ? true : false
        }
        variant="primary"
      >
        Next
      </Button>
    </div>
  );
};
