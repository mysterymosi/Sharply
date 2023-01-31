import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { serverUrl } from "../../utils";
import { Button } from "../Button";
import HomeModal from "../Modal";
import RadioInput from "../RadioInput";

interface RiskAssessment2Props {
  id: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
  question?: string;
  options: any[];
  stepNumber: number;
  dataLength: number;
}
export const RiskAssessment2 = ({
  id,
  dataLength,
  setStepNumber,
  question,
  options,
  stepNumber,
}: RiskAssessment2Props) => {
  const router = useRouter();
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const clearCookies = () => {
    Cookies.remove("1");
    Cookies.remove("2");
    Cookies.remove("3");
    Cookies.remove("4");
    Cookies.remove("5");
    Cookies.remove("6");
    Cookies.remove("7");
    Cookies.remove("8");
    Cookies.remove("9");
    Cookies.remove("10");
    Cookies.remove("11");
    Cookies.remove("12");
    Cookies.remove("13");
    Cookies.remove("dob");
  };
  const submitRiskAssessmentData = (referPartnerData: any) => {
    return axios.post(`${serverUrl}/risk/answers`, referPartnerData);
  };
  const handleMutate = useMutation(submitRiskAssessmentData, {
    onSuccess: (data) => {
      if (data.data.data > 0) {
        setShowSuccessModal(false);
        setShowFailedModal(true);
      } else {
        setShowFailedModal(false);
        setShowSuccessModal(true);
      }
      clearCookies();
    },
    onError: (error) => {
      console.log("Error: ", error);
    },
  });
  const [selected, setSelected] = useState<any>(null);
  const handleClick = () => {
    if (stepNumber >= dataLength) {
      const question_id = selected?.question_id;
      Cookies.set(question_id, selected.id);
      const info = {
        answers: {
          1: Cookies.get("1"),
          2: Cookies.get("2"),
          3: Cookies.get("3"),
          4: Cookies.get("4"),
          5: Cookies.get("5"),
          6: Cookies.get("6"),
          7: Cookies.get("7"),
          8: Cookies.get("8"),
          9: Cookies.get("9"),
          10: Cookies.get("10"),
          11: Cookies.get("11"),
          12: [Cookies.get("12")],
          13: [Cookies.get("13")],
        },
        user_id: Cookies.get("userId"),
        dob: Cookies.get("dob"),
      };
      handleMutate.mutate(info);
    } else {
      const question_id = selected?.question_id;
      Cookies.set(question_id, selected.id);
      if (id === 2 && selected.option.toLowerCase() === "never") {
        setStepNumber(9); // move to question 8
      } else if (id === 3 && selected.option.toLowerCase() === "positive") {
        setStepNumber(6); // move to question 5
      } else if (
        id === 4 &&
        selected.option.toLowerCase() === "i take prep everyday"
      ) {
        setStepNumber(7); // move to question 6
      } else if (
        id === 4 &&
        selected.option.toLowerCase() === "i take prep but not everyday"
      ) {
        setStepNumber(7); // move to question 6
      } else if (
        id === 4 &&
        selected.option.toLowerCase() === "i do not take prep"
      ) {
        setStepNumber(9); // move to question 8
      } else if (
        id === 4 &&
        selected.option.toLowerCase() === "did not start taking treatment"
      ) {
        setStepNumber(9); // move to question 8
      } else if (id === 5 && selected.option.toLowerCase() === "everyday") {
        setStepNumber(8); // move to question 7
      } else if (id === 5 && selected.option.toLowerCase() === "somedays") {
        setStepNumber(9); // move to question 8
      } else if (
        id === 5 &&
        selected.option.toLowerCase() === "no longer taking treament"
      ) {
        setStepNumber(9); // move to question 8
      } else if (
        id === 6 &&
        selected.option.toLowerCase() ===
          "i meet regularly with my doctor for prep care (sti testing and lab tests"
      ) {
        setStepNumber(9); // move to question 8
      } else if (
        id === 6 &&
        selected.option.toLowerCase() ===
          "i take prep without seeing a doctor regularly"
      ) {
        setStepNumber(9); // move to question 8
      } else {
        setStepNumber(stepNumber + 1);
      }
    }
  };

  return (
    <div className="mt-[100px] z-10 relative text-center lg:text-left">
      <HomeModal
        type="failed"
        show={showFailedModal}
        setShow={setShowFailedModal}
      />
      <HomeModal
        type="success"
        show={showSuccessModal}
        setShow={setShowSuccessModal}
      />
      <h1 className="font-black font-[raleway] lg:text-[35px] text-[22px] w-[24ch] leading-[40px] mb-[40px]">
        {question}?
      </h1>
      <RadioInput
        type="obj"
        options={options}
        value={selected}
        onChange={setSelected}
      />
      <Button
        onClick={() => setStepNumber(stepNumber - 1)}
        variant="default"
        className="mr-[20px]"
      >
        Back
      </Button>
      <Button
        onClick={handleClick}
        isLoading={handleMutate.isLoading}
        disabled={selected === null ? true : false}
        variant="primary"
      >
        Next
      </Button>
    </div>
  );
};
