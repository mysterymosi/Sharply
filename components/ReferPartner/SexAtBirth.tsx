import { useState } from "react";
import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const SexAtBirth = ({ setTabId }: ReferPartnerTypes) => {
  const [selected, setSelected] = useState(null);
  const handleClick = () => {
    setTabId(4);
  };
  const options = ["Male", "Female", "Unknown"];
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">Sex at birth</h1>
      <div className="w-[450px] mt-[30px]">
        <RadioInput options={options} value={selected} onChange={setSelected} />
      </div>
      <div className="flex">
        <Button
          onClick={() => setTabId(2)}
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
    </div>
  );
};
