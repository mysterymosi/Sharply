import { Transition } from "@headlessui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { X } from "react-feather";
import { Button } from "../components";
import { emitMessageToSvix, EnterFromLeft, FadeInWhenVisible } from "../utils";
import PhoneNumberInput from "../components/PhoneNumberInput";

const OrderACard: NextPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [emailAddress, setEmailAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [childFullName, setChildFullName] = useState("");
  const [cardUsageLocation, setCardUsageLocation] = useState("");
  const [cardUse, setCardUse] = useState("");
  const [showSelectSchool, setShowSelectSchool] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showStoredPhoneNumber, setShowStoredPhoneNumber] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendCardRequest = async (e: any) => {
    e.preventDefault();
    if (!phoneNumber) {
      setIsError(true);
      return;
    }
    const cardRequestInfo = {
      phoneNumber,
      emailAddress,
      fullName,
      childFullName,
      location: cardUsageLocation,
      schoolName:
        cardUse.toLowerCase() === "in school" ? cardUsageLocation : null,
      cardUse: cardUse,
      _type: "card_ordered",
    };
    await emitMessageToSvix("card_ordered", cardRequestInfo).then((res) => {
      if (res) {
        console.log("Card ordered: ", res);
        localStorage.removeItem("phoneNumber");
        router.push("/request-received");
      }
    });
  };
  const selectCardUsageLocation = (usageLocation: string) => {
    setCardUse(usageLocation);
    if (usageLocation.toLowerCase() === "in school") {
      setShowSelectSchool(true);
      setShowAddress(false);
    } else {
      setShowSelectSchool(false);
      setShowAddress(true);
    }
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
                Order a card.
              </h1>
              <button
                onClick={() => router.back()}
                className="w-[40px] flex sm:flex md:hidden h-[40px] rounded-full bg-[#F0F0F0] md:bg-grey6 justify-center items-center box-shadow"
              >
                <X />
              </button>
            </div>
            <p className="lg:text-[16px] block sm:block md:hidden text-[16px] text-grey5">
              Fill the form to order a card and we’ll send you the next steps on
              how to get your card and download the app.
            </p>
            <h1 className="lg:text-[40px] hidden sm:hidden md:block mb-[28px] lg:leading-[116%]  max-w-[16ch] text-[28px] leading-[34px] font-semibold ">
              Fill the form to order a card.
            </h1>
            <p className="lg:text-[16px] hidden sm:hidden md:block text-[16px] text-grey5">
              We’ll send you the next steps on how to get your card and download
              the app.
            </p>
            <form onSubmit={(e) => sendCardRequest(e)}>
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
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                  required
                />
              </div>
              <div className="mt-[25px]">
                <input
                  onChange={(e) => setChildFullName(e.target.value)}
                  type="text"
                  name="childFullName"
                  placeholder="Enter your child's full name"
                  className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                  required
                />
              </div>
              <Transition
                show={showSelectSchool}
                enter="transition ease-in-out duration-300 transform opacity"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition ease-in-out duration-300 transform opacity"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
              >
                <div className="mt-[25px]">
                  <select
                    onChange={(e) => setCardUsageLocation(e.target.value)}
                    className="h-[56px] text-grey5 w-full pl-[16px] border-white4 border-[1.5px] rounded-[32px]"
                    name="school"
                    required
                  >
                    <option>Select School</option>
                    <option value="FSTC, Yaba">FSTC, Yaba</option>
                    <option value="Queen's College, Yaba">
                      Queen's College, Yaba
                    </option>
                    <option value="Baptist Academy">
                      Baptist Academy, Obanikoro Lagos
                    </option>
                    <option value="Igbobi College">
                      Igbobi College, Shomolu
                    </option>
                    <option value="Methodist Boys High School">
                      Methodist Boys High School, Victoria Island
                    </option>
                    <option value="Reagan Memorial Baptist">
                      Reagan Memorial Baptist, Yaba
                    </option>
                    <option value="St Finbarr's College, Yaba">
                      St Finbarr's College, Yaba
                    </option>
                    <option value="King's College, Lagos">
                      King's College, Lagos
                    </option>
                    <option value="FGC Ijaniki, Lagos">
                      FGC Ijaniki, Lagos
                    </option>
                  </select>
                </div>
              </Transition>
              <Transition
                show={showAddress}
                enter="transition ease-in-out duration-300 transform opacity"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition ease-in-out duration-300 transform opacity"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
              >
                <div className="mt-[25px]">
                  <input
                    onChange={(e) => setCardUsageLocation(e.target.value)}
                    type="text"
                    name="address"
                    placeholder="Where should we deliver the card?"
                    className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
                    required
                  />
                </div>
              </Transition>
              <p className="mt-[33px] text-grey4 font-semibold">
                Where will your child use the card?
              </p>
              <div className="flex mt-[27px]">
                <label className="form-control font-medium">
                  <input
                    onChange={(e) => selectCardUsageLocation(e.target.value)}
                    type="radio"
                    name="radio"
                    className="order-a-card-radio"
                    value="In school"
                    required
                  />
                  In a school
                </label>

                <label className="form-control ml-[34px] font-medium">
                  <input
                    onChange={(e) => selectCardUsageLocation(e.target.value)}
                    type="radio"
                    name="radio"
                    className="order-a-card-radio"
                    value="Outside school"
                    required
                  />
                  Outside the school
                </label>
              </div>
              <Button className="w-full hover:scale-100 mt-[72px]">
                Get Started
              </Button>
            </form>
          </EnterFromLeft>
        </div>
      </div>
    </section>
  );
};

export default OrderACard;
