import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useMutation } from "react-query";
import { ReferPartnerTypes } from "../../types";
import { serverUrl } from "../../utils";
import { Button } from "../Button";
import { Map } from "../Map/Map";

export const Location = ({ setTabId }: ReferPartnerTypes) => {
  const [address, setAddress] = useState<any>(null);
  const submitLocationData = (locationData: any) => {
    return axios.post(`${serverUrl}/appointments/help-centres`, locationData);
  };
  const handleMutate = useMutation(submitLocationData, {
    onSuccess: (data) => {
      Cookies.set("location", address);
      setTabId(2);
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });
  const handleClick = () => {
    const info = {
      user_id: Cookies.get("userId"),
      location_str: address,
    };
    handleMutate.mutate(info);
  };
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        What is your location?
      </h1>
      <div className="mt-[30px] lg:w-[650px] w-full">
        <Map address={address} setAddress={setAddress} />
      </div>
      <Button className="mt-[30px]" onClick={handleClick} variant="primary">
        Next
      </Button>
    </div>
  );
};
