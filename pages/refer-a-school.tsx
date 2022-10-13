import { Transition } from "@headlessui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { X } from "react-feather";
import { Button } from "../components";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { emitMessageToSvix, EnterFromLeft, FadeInWhenVisible } from "../utils";

const ReferASchool: NextPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [contactName, setContactName] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactPositionInSchool, setContactPositionInSchool] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const referSchool = async (e: any) => {
    e.preventDefault();
    if (!phoneNumber) {
      setIsPhoneNumberError(true);
      return;
    }
    if (!contactPhoneNumber) {
      setIsError(true);
      return;
    }
    const bookCallInfo = {
      fullName,
      schoolName,
      schoolState,
      contactPhoneNumber,
      contactPositionInSchool,
      contactName,
      emailAddress,
      phoneNumber,
      _type: "refered_a_school",
    };
    await emitMessageToSvix("refered_a_school", bookCallInfo).then((res) => {
      if (res) {
        console.log("Refered a school: ", res);
        router.push("/request-received");
      }
    });
  };
  useEffect(() => {
    if (phoneNumber) {
      setIsPhoneNumberError(false);
    }
    if (contactPhoneNumber) {
      setIsError(false);
    }
  }, [contactPhoneNumber, phoneNumber]);
  return (
    <section>
      <button
        onClick={() => router.back()}
        className="w-[40px] hidden sm:hidden md:flex h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow absolute right-[24px] md:right-[24px] top-[27px] md:top-[27px]"
      >
        <X />
      </button>
      <div className="pt-[40px] pb-[40px] sm:pt-[40px] md:pt-[163px] px-[25px] flex md:flex-row flex-col lg:gap-[145px] md:gap-[50px] items-center  h-full justify-center text-black ">
        <FadeInWhenVisible>
          <img
            alt="logo"
            height={240}
            src="/images/downloadCard.svg"
            className="w-[341px] mt-[40px] md:mt-0 hidden sm:hidden md:block"
          />
        </FadeInWhenVisible>
        <div className="flex justify-center flex-col max-w-[46ch]">
          <EnterFromLeft>
            <div className="flex justify-between">
              <h1 className="lg:text-[40px] block sm:block md:hidden mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
                Fill the form to refer a school.
              </h1>
              <button
                onClick={() => router.back()}
                className="w-[40px] flex sm:flex md:hidden h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow"
              >
                <X />
              </button>
            </div>
            <h1 className="lg:text-[40px] hidden sm:hidden md:block mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              Fill the form to refer a school.
            </h1>
            <p className="lg:text-[16px] text-[16px] text-grey5">
              We’ll send you the next steps on how to get your card and download
              the app.
            </p>
            <form onSubmit={(e) => referSchool(e)}>
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <div className="mt-[25px]">
                <input
                  onChange={(e) => setEmailAddress(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                  required
                />
              </div>
              <div className="mt-[25px]">
                <PhoneNumberInput
                  placeholder="Your phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
                <Transition
                  show={isPhoneNumberError}
                  enter="transition ease-in-out duration-300 transform opacity"
                  enterFrom="-translate-y-full opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform opacity"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="-translate-y-full opacity-0"
                >
                  <span className="text-red text-[12px] font-semibold">
                    Please enter phone number
                  </span>
                </Transition>
              </div>
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setSchoolName(e.target.value)}
                  type="text"
                  name="schoolName"
                  placeholder="Name of the school"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <div className="mt-[25px]">
                <select
                  onChange={(e) => setSchoolState(e.target.value)}
                  className="h-[56px] text-grey5 w-full pl-[16px] border-white4 border-[1.5px] rounded-[32px]"
                  name="school"
                  required
                >
                  <option>Select state where school is located</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Osun">Osun</option>
                  <option value="Ibadan">Ibadan</option>
                </select>
              </div>
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setContactName(e.target.value)}
                  type="text"
                  name="contactName"
                  placeholder="Name of key contact in the school"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <div className="mt-[25px]">
                <PhoneNumberInput
                  placeholder="Phone number of key contact"
                  value={contactPhoneNumber}
                  onChange={setContactPhoneNumber}
                />
                <Transition
                  show={isError}
                  enter="transition ease-in-out duration-300 transform opacity"
                  enterFrom="-translate-y-full opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform opacity"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="-translate-y-full opacity-0"
                >
                  <span className="text-red text-[12px] font-semibold">
                    Please enter phone number
                  </span>
                </Transition>
              </div>
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setContactPositionInSchool(e.target.value)}
                  type="text"
                  name="contactPosition"
                  placeholder="Position of key contact"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <Button className="w-full hover:scale-100 mt-[72px]">
                Refer a school
              </Button>
            </form>
          </EnterFromLeft>
        </div>
      </div>
    </section>
  );
};

export default ReferASchool;
