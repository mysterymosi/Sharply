import Cookies from "js-cookie";
import { useState } from "react";
import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import RadioInput from "../RadioInput";

export const WhoToRefer = ({ setTabId }: ReferPartnerTypes) => {
  const [selected, setSelected] = useState(null);
  const handleClick = () => {
    Cookies.set("who", selected ? selected : "");
    setTabId(2);
  };
  const options = ["A friend or other", "A sexual partner", "My child"];
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Who do you want to refer?
      </h1>
      <div className="w-[450px] mt-[30px]">
        <RadioInput
          type="arr"
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>
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
