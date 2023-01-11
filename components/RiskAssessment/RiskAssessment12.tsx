import { useRouter } from "next/router";
import { useState } from "react";
import { RiskAssessmentTypes } from "../../types";
import { Button } from "../Button";
import HomeModal from "../Modal";
import RadioInput from "../RadioInput";

export const RiskAssessment12 = ({ setStepNumber }: RiskAssessmentTypes) => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const options = [
    "Injected drugs not from a medical doctor",
    "Received money or goods in exchange for sex",
    "Multiple sexual partners",
    "Sex without my consent",
    "Had an STI or STI symptoms",
    "Alcohol or drugs before sex",
  ];
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="mt-[150px] z-10">
      <HomeModal type="failed" show={showModal} setShow={setShowModal} />
      <h1 className="font-black font-[raleway] text-[35px] w-[24ch] leading-[40px] mb-[40px]">
        Have you experienced any of the following in the last 6 months?
      </h1>
      <p className="text-gold text-[15px] mb-[40px]">
        Select all that applies.
      </p>
      <RadioInput options={options} value={selected} onChange={setSelected} />
      <Button
        onClick={() => setStepNumber(11)}
        variant="default"
        className="mr-[20px]"
      >
        Back
      </Button>
      <Button
        onClick={handleClick}
        disabled={selected === null ? true : false}
        variant="primary"
      >
        Next
      </Button>
    </div>
  );
};
