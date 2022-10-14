import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClassNameProps } from "../types";
import { PhoneInput } from "./Input/PhoneInput";
import posthog from "posthog-js";

export const DownloadCard = ({ className }: ClassNameProps) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const addPhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const orderCard = () => {
    if (!phoneNumber) {
      return;
    }
    localStorage.setItem("phoneNumber", phoneNumber);
    router.push("/order-a-card");
    posthog.capture("order_a_card_clicked", {
      location: "Order a card (Good money habits for your child starts here)",
      action: "goes to order a card form",
    });
  };
  return (
    <div
      className={`${className} flex flex-col bg-blue h-[600px]  px-[30px] sm:px-0 lg:max-w-[1000px] md:w-full xl:max-w-[1350px]  sm:h-[750px] lg:rounded-[48px]`}
    >
      <Image
        src="/images/downloadCard.svg"
        width={241.82}
        alt="logo"
        height={240}
        priority={true}
        layout="fixed"
      />

      <p className="mt-12 font-semibold text-lg lg:text-[40px] lg:min-w-[1px] text-center lg:max-w-[26ch] lg:leading-[44px]">
        Good money habits for your child starts here. Empower your child to
        financial responsibility.{" "}
      </p>
      <div className="flex justify-center">
        <PhoneInput
          onChange={(e) => addPhoneNumber(e)}
          type={"phone"}
          placeholder="Enter your phone number"
          text="Order a card"
          className="mt-[40px] w-[350px] sm:w-[521px]"
          buttonClassName="#5BAB0A"
          onClick={orderCard}
        />
      </div>
    </div>
  );
};
