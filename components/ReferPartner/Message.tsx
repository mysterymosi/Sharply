import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import Image from "next/image";
import { useState } from "react";

export const Message = ({ setTabId }: ReferPartnerTypes) => {
  const handleClick = () => {
    setIsSubmitted(true);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="mt-[54px] flex flex-col items-center">
      {!isSubmitted ? (
        <>
          <h1 className="font-semibold text-[20px] text-center">
            Preview message
          </h1>
          <div className="w-[450px] mt-[30px] mb-[40px]">
            <div className="w-[460px] mx-auto gap-5 flex items-center border-2 border-grey7 rounded-[20px] py-[17px] relative">
              <div className="rounded-full bg-purple w-[65px] h-[65px] flex justify-center items-center absolute left-[-35px]">
                <Image
                  src="/images/message-icon.png"
                  width={20}
                  alt="logo"
                  height={20}
                  priority={true}
                  layout="fixed"
                />
              </div>
              <p className="font-normal text-[15px] ml-[50px]">
                Hello! A friend referred you for convenient health services on
                Sharply. To learn more or book an appointment, contact us at
                <a className="text-blue" href="mailto:contact@sharply.org">
                  {" "}
                  contact@sharply.org
                </a>
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/images/Referral-success.png"
            width={130}
            alt="logo"
            height={130}
            priority={true}
            layout="fixed"
          />
          <h1 className="font-semibold text-[20px] text-center mt-[40px]">
            Referral successfully sent
          </h1>
          <p className="font-normal text-[16px]">
            You can refer more people by clicking the button below
          </p>
        </>
      )}
      {!isSubmitted ? (
        <div className="flex">
          <Button
            onClick={() => setTabId(5)}
            variant="default"
            className="mr-[20px]"
          >
            Back
          </Button>
          <Button onClick={handleClick} variant="primary">
            Submit
          </Button>
        </div>
      ) : (
        <Button className="mt-[56px]" onClick={handleClick} variant="primary">
          Refer a friend
        </Button>
      )}
    </div>
  );
};
