import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useQuery } from "react-query";
import { ReferPartnerTypes } from "../../types";
import { serverUrl } from "../../utils";
import { Button } from "../Button";
import ServiceProviderCard from "../ServiceProviderCard";

export const ServiceProvider = ({ setTabId }: ReferPartnerTypes) => {
  const { error, isLoading, data } = useQuery("init", () =>
    axios.get(`${serverUrl}/init/generate-centres`).then((res) => {
      return res.data.data;
    })
  );
  if (error) {
    console.log("error:", error);
  }
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
        {!isLoading ? (
          <ServiceProviderCard
            options={data}
            value={selected}
            onChange={setSelected}
          />
        ) : (
          <p>Loading...</p>
        )}
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
