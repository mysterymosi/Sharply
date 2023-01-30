import Cookies from "js-cookie";
import { useState } from "react";
import { ReferPartnerTypes } from "../../types";
import { serviceOptions } from "../../utils";
import { Button } from "../Button";
import SelectForm from "../SelectForm";

export const Service = ({ setTabId }: ReferPartnerTypes) => {
  const [service, setService] = useState<any>(null);
  const handleClick = () => {
    Cookies.set("service", service.value);
    setTabId(5);
  };
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center w-[600px]">
        If you potentially exposed this person to an infection, select the
        screening services we should recommend to them:
      </h1>
      <div className="w-[450px] mt-[30px] mb-[30px]">
        <SelectForm
          value={service}
          options={serviceOptions}
          placeholder="Select service"
          onChange={(selected) => setService(selected)}
        />
      </div>
      <div className="flex">
        <Button
          onClick={() => setTabId(3)}
          variant="default"
          className="mr-[20px]"
        >
          Back
        </Button>
        <Button
          onClick={handleClick}
          disabled={service === null ? true : false}
          variant="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
