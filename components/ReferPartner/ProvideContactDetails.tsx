import { useRouter } from "next/router";
import { useState } from "react";
import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import PhoneNumberInput from "../PhoneNumberInput";

export const ProvideContactDetails = ({ setTabId }: ReferPartnerTypes) => {
  const handleClick = () => {
    setTabId(3);
  };
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Provide contact details
      </h1>
      <div className="w-[450px] mt-[30px] mb-[30px]">
        <PhoneNumberInput
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
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
          onClick={handleClick}
          disabled={phoneNumber === "" ? true : false}
          variant="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
