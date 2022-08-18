import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { X } from "react-feather";
import { Button } from "./Button";

const ModalForm = ({
  err,
  checkEmail,
  email,
  setModalDetails,
  modalDetails,
}: {
  err: string;
  checkEmail: () => void;
  email: string;
  modalDetails: {};
  setModalDetails: any;
}) => (
  <>
    <Dialog.Title
      as="h3"
      className="lg:text-[32px] text-[28px] font-[600] lg:leading-[32px] max-w-[13ch]">
      Get started with Little in seconds
    </Dialog.Title>
    <div className="mt-[16px]">
      <p className="lg:text-[18px] text-[16px] text-gray-500">
        We’ll send you a message to download the app
      </p>
    </div>
    <div className="mt-[39px]">
      <input
        onChange={(e) =>
          setModalDetails({
            ...modalDetails,
            email: e.target.value,
          })
        }
        type="text"
        value={email}
        name="email"
        placeholder="Enter your email address"
        className=" h-[56px]  w-full  p-[20px] border-white4 border-[1.5px] rounded-[32px]"
      />
    </div>
    {err && <p className="text-[red] mt-1">{err}</p>}
    <div className="md:mt-[48px] mt-[24px]">
      <Button className="w-full hover:scale-100" onClick={checkEmail}>
        Get Started
      </Button>
    </div>
  </>
);
export default function HomeModal() {
  useEffect(() => {
    setModalDetails({
      isOpen: true,
      err: "",
      email: "",
      isSubmited: false,
    });
  }, []);
  let [modalDetails, setModalDetails] = useState({
    isOpen: true,
    err: "",
    email: "",
    isSubmited: false,
  });
  const { err, isOpen, email, isSubmited } = modalDetails;

  function closeModal() {
    setModalDetails({
      ...modalDetails,
      isOpen: false,
    });
  }

  const checkEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) == false) {
      setModalDetails({
        ...modalDetails,
        err: "Please enter a valid email address",
      });
      return false;
    } else {
      setModalDetails({
        ...modalDetails,
        err: "",
        isSubmited: true,
      });
      return true;
    }
  };

  const ModalSubmitted = () => (
    <>
      <div className="flex justify-center items-center mb-[71px]">
        <Image
          src="/images/downloadCard.svg"
          width={241.82}
          alt="logo"
          height={240}
          priority={true}
          layout="fixed"
        />
      </div>

      <Dialog.Title
        as="h3"
        className="lg:text-[32px] text-[28px] font-[600] lg:leading-[32px] ">
        We just sent you a message!
      </Dialog.Title>
      <div className="mt-[16px]">
        <p className="lg:text-[18px] text-[16px] text-gray-500">
          Check your mail for the link to download the Little mobile app from
          the Playstore or Appstore
        </p>
      </div>

      <div className="md:mt-[48px] mt-[24px]">
        <Button className="w-full hover:scale-100" onClick={closeModal}>
          Okay. got it!
        </Button>
      </div>
    </>
  );
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[90]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-[0.7]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={`transform  md:rounded-2xl bg-white h-screen ${
                  isSubmited ? "md:h-[622px]" : "md:h-[462px]"
                }  w-[536px] flex justify-center  flex-col my-auto lg:px-[48px] px-[20px] text-left align-middle shadow-xl transition-all`}>
                <button
                  onClick={closeModal}
                  className="w-[40px] h-[40px] rounded-full bg-[#F0F0F0] md:bg-white flex justify-center items-center box-shadow absolute right-[7%] md:right-[-13px] top-[5%] md:top-[-14px]">
                  <X />
                </button>
                {isSubmited ? (
                  <ModalSubmitted />
                ) : (
                  <ModalForm
                    err={err}
                    checkEmail={checkEmail}
                    email={email}
                    modalDetails={modalDetails}
                    setModalDetails={setModalDetails}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
