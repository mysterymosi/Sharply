import { ReferPartnerTypes } from "../../types";
import { Button } from "../Button";
import Image from "next/image";
import { useRouter } from "next/router";

export const Confirm = () => {
  const router = useRouter();
  return (
    <div className="mt-[54px] flex flex-col items-center">
      <>
        <Image
          src="/images/Referral-success.png"
          width={130}
          alt="logo"
          height={130}
          priority={true}
          layout="fixed"
        />
        <h1 className="font-semibold text-[20px] text-center mt-[40px] mb-[10px]">
          Appointment booked!
        </h1>
        <p className="font-normal text-[16px] md:w-[600px] text-center">
          Your appointment has been successfully booked. We will send you
          reminders so you don’t miss it.
        </p>
      </>
      <Button
        className="mt-[21px]"
        onClick={() => router.push("/")}
        variant="primary"
      >
        Done
      </Button>
    </div>
  );
};
