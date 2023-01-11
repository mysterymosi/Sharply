import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";

export const Captcha = ({ setTabId }: ReferPartnerTypes) => {
  const handleClick = () => {
    setTabId(6);
  };
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Verify you’re human
      </h1>
      <div className="w-[450px] mt-[30px] mb-[30px]">
        <p>Captcha</p>
      </div>
      <div className="flex">
        <Button
          onClick={() => setTabId(4)}
          variant="default"
          className="mr-[20px]"
        >
          Back
        </Button>
        <Button onClick={handleClick} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
};
