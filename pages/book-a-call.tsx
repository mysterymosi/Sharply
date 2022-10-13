import { Transition } from "@headlessui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { X } from "react-feather";
import { Button } from "../components";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { emitMessageToSvix, EnterFromLeft, FadeInWhenVisible } from "../utils";

const BookACall: NextPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [emailAddress, setEmailAddress] = useState("");
  const [positionInSchool, setPositionInSchool] = useState("");
  const [whenToCall, setwhenToCall] = useState("");
  const [showStoredPhoneNumber, setShowStoredPhoneNumber] = useState(false);
  const [isError, setIsError] = useState(false);
  const bookCall = async (e: any) => {
    e.preventDefault();
    if (!phoneNumber) {
      setIsError(true);
      return;
    }
    const bookCallInfo = {
      fullName,
      emailAddress,
      schoolName,
      schoolState,
      phoneNumber,
      positionInSchool,
      whenToCall,
      _type: "booked_a_call",
    };
    await emitMessageToSvix("call_booked", bookCallInfo).then((res) => {
      if (res) {
        console.log("Card ordered: ", res);
        router.push("/request-received");
      }
    });
  };
  const editPhoneNumber = () => {
    setShowStoredPhoneNumber(false);
    localStorage.removeItem("phoneNumber");
  };
  useEffect(() => {
    if (phoneNumber) {
      setIsError(false);
    }
  }, [phoneNumber]);
  useEffect(() => {
    if (localStorage.getItem("phoneNumber")) {
      setPhoneNumber(localStorage.getItem("phoneNumber"));
      setShowStoredPhoneNumber(true);
    }

    return () => {
      localStorage.removeItem("phoneNumber");
    };
  }, []);
  return (
    <section>
      <button
        onClick={() => router.back()}
        className="w-[40px] hidden sm:hidden md:flex h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow absolute right-[24px] md:right-[24px] top-[27px] md:top-[27px]"
      >
        <X />
      </button>
      <div className="pt-[40px] sm:pt-[40px] md:pt-[163px] px-[25px] flex md:flex-row flex-col lg:gap-[145px] md:gap-[50px] items-center  h-full justify-center text-black ">
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
                Book a call to onboard your school
              </h1>
              <button
                onClick={() => router.back()}
                className="w-[40px] flex sm:flex md:hidden h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow"
              >
                <X />
              </button>
            </div>
            <h1 className="lg:text-[40px] hidden sm:hidden md:block mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              Book a call to onboard your school
            </h1>
            <p className="lg:text-[16px] text-[16px] text-grey5">
              We’ll send you the next steps on how to get your card and download
              the app.
            </p>
            <form onSubmit={(e) => bookCall(e)}>
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
              {showStoredPhoneNumber ? (
                <div className="mt-[25px]">
                  <div className="flex justify-between">
                    <p>{phoneNumber}</p>
                    <p
                      onClick={editPhoneNumber}
                      className="cursor-pointer text-green"
                    >
                      Edit
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-[25px]">
                  <PhoneNumberInput
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
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
              )}
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setPositionInSchool(e.target.value)}
                  type="text"
                  name="position"
                  placeholder="Your position in the school"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <div className="mt-[25px]">
                <input
                  required
                  onChange={(e) => setwhenToCall(e.target.value)}
                  type="text"
                  name="can-we-call"
                  placeholder="When can we call?"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                />
              </div>
              <Button className="w-full hover:scale-100 mt-[72px]">
                Book a call
              </Button>
            </form>
          </EnterFromLeft>
        </div>
      </div>
    </section>
  );
};

export default BookACall;
