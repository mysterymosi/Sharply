import { useRouter } from "next/router";
import { useState } from "react";
import posthog from "posthog-js";

const usePhoneInput = () => {
  const router = useRouter();
  const [noNumber, setNoNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const addPhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const orderCard = () => {
    if (!phoneNumber) {
      setNoNumber(true);
      return;
    }
    localStorage.setItem("phoneNumber", phoneNumber);
    router.push("/order-a-card");
    posthog.capture("order_a_card_clicked", {
      location: "Order a card button on hero",
    });
  };

  return {
    addPhoneNumber,
    orderCard,
    noNumber,
  };
};

export default usePhoneInput;
