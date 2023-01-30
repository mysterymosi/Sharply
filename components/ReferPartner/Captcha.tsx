import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import ReCAPTCHA from "react-google-recaptcha";

export const Captcha = ({ setTabId }: ReferPartnerTypes) => {
  const siteKey = process.env.NEXT_PUBLIC_SITE_KEY
    ? process.env.NEXT_PUBLIC_SITE_KEY
    : "";
  const handleClick = () => {
    setTabId(6);
  };
  const onChange = (value: any) => {
    console.log("Captcha value:", value);
    // Send the token to your server for validation
  };

  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Verify you’re human
      </h1>
      <div className="w-[450px] mt-[30px] mb-[30px]">
        <ReCAPTCHA
          className="text-center"
          sitekey={siteKey}
          onChange={onChange}
        />
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
