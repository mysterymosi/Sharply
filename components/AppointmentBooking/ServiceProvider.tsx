import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { GeneralContext } from "../../context";
import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import ServiceProviderCard from "../ServiceProviderCard";

export const ServiceProvider = ({ setTabId }: ReferPartnerTypes) => {
  const { helpCenters } = useContext<any>(GeneralContext);
  const [selected, setSelected] = useState<any>(null);
  const handleClick = () => {
    Cookies.set("help_center_id", selected.id);
    setTabId(3);
  };
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Select your preferred provider
      </h1>
      <div className="w-full mt-[30px] mb-[30px]">
        <ServiceProviderCard
          options={helpCenters}
          value={selected}
          onChange={setSelected}
        />
      </div>
      <div className="flex">
        <Button
          onClick={() => setTabId(1)}
          variant="default"
          className="mr-[20px]"
        >
          Back
        </Button>
        <Button
          disabled={selected === null ? true : false}
          onClick={handleClick}
          variant="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
