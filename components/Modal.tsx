import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { ArrowRight, X } from "react-feather";
import { ModalProps } from "../types";
import { Button } from "./Button";

const ModalForm = ({
  closeModal,
  err,
  checkEmail,
  email,
  setModalDetails,
  modalDetails,
}: {
  err: string;
  closeModal: () => void;
  checkEmail: () => void;
  email: string;
  modalDetails: {};
  setModalDetails: any;
}) => (
  <>
    <div
      style={{ backgroundImage: 'url("/images/modal-image.png")' }}
      className="h-[328px] bg-cover rounded-t-[50px]"
    ></div>
    <div className="mt-[16px] px-[55px]">
      <p className="text-[16px] text-black1 font-normal">
        By clicking Get started, you understand and accept our{" "}
        <a className="text-orange" href="#">
          Terms of Use policy
        </a>
        .
      </p>
      <p className="italic text-black1 opacity-50 text-[14px] text-center font-normal">
        This site uses cookies to understand our site traffic.
      </p>
    </div>
    {err && <p className="text-[red] mt-1">{err}</p>}
    <div className="md:mt-[48px] mt-[24px] mb-[20px] flex justify-center">
      <Button
        variant="default"
        className="hover:scale-100 mr-[20px]"
        onClick={closeModal}
      >
        Decline
      </Button>
      <Button
        variant="primary"
        className="hover:scale-100"
        onClick={closeModal}
      >
        Get Started
      </Button>
    </div>
  </>
);

const SuccessModal = ({
  closeModal,
  err,
  checkEmail,
  email,
  setModalDetails,
  modalDetails,
}: {
  err: string;
  closeModal: () => void;
  checkEmail: () => void;
  email: string;
  modalDetails: {};
  setModalDetails: any;
}) => (
  <>
    <div className="mt-[16px] px-[55px]">
      <p className="text-[16px] text-black1 font-normal">
        By clicking Get started, you understand and accept our{" "}
        <a className="text-orange" href="#">
          Terms of Use policy
        </a>
        .
      </p>
      <p className="italic text-black1 opacity-50 text-[14px] text-center font-normal">
        This site uses cookies to understand our site traffic.
      </p>
    </div>
    {err && <p className="text-[red] mt-1">{err}</p>}
    <div className="md:mt-[48px] mt-[24px] mb-[20px] flex justify-center">
      <Button
        variant="default"
        className="hover:scale-100 mr-[20px]"
        onClick={closeModal}
      >
        Decline
      </Button>
      <Button
        variant="primary"
        className="hover:scale-100"
        onClick={closeModal}
      >
        Get Started
      </Button>
    </div>
  </>
);

export default function HomeModal({ show, setShow, type }: ModalProps) {
  let [modalDetails, setModalDetails] = useState({
    err: "",
    email: "",
    isSubmited: false,
  });
  const router = useRouter();
  const { err, email, isSubmited } = modalDetails;

  function closeModal() {
    setShow(false);
    router.push("/");
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
    <div className="lg:py-[100px] lg:px-[100px] py-[63px] px-[53px]">
      <div className="flex justify-center items-center">
        <Image
          src="/images/Risk-pass.png"
          width={120}
          alt="logo"
          height={120}
          priority={true}
          layout="fixed"
        />
      </div>

      <Dialog.Title
        as="h3"
        className="text-[25px] font-[600] mt-[40px] text-center"
      >
        You’re doing great!
      </Dialog.Title>
      <div className="mt-[10px]">
        <p className="text-[16px] font-normal text-gray-500 text-center">
          You reported no potential exposure to HIV or STIs
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="flex justify-center">
          <Link href="/refer-a-partner">
            <p className="text-blue opacity-90 text-[14px] font-semibold cursor-pointer">
              Refer a friend/partner
            </p>
          </Link>
          <ArrowRight className="opacity-90" size="1.3rem" color="#4C6FFF" />
        </div>
      </div>
    </div>
  );

  const TimeToActModal = () => (
    <div className="lg:py-[100px] lg:px-[80px] py-[63px] px-[53px]">
      <div className="flex justify-center items-center">
        <Image
          src="/images/Risk-failed.png"
          width={120}
          alt="logo"
          height={120}
          priority={true}
          layout="fixed"
        />
      </div>

      <Dialog.Title
        as="h3"
        className="lg:text-[25px] text-[22px] font-[600] mt-[40px] text-center"
      >
        Time to act!
      </Dialog.Title>
      <div className="mt-[10px]">
        <p className="text-[14px] lg:text-[15px] font-normal text-gray-500 text-center">
          You might have been exposed to HIV and other STIs! To stay healthy, it
          is important to get tested. Make an appointment for HIV testing below.
        </p>
      </div>
      <div className="mt-[34px] lg:w-[460px] mx-auto gap-5 flex items-center border-2 border-grey7 rounded-[20px] py-[17px] relative">
        <div className="rounded-full bg-purple w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] flex justify-center items-center absolute left-[-35px]">
          <p className="mb-0 font-bold text-[22px] lg:text-[30px]">1</p>
        </div>
        <p className="font-normal text-[14px] lg:text-[15px] ml-[40px]">
          Use a condom each time you have sex to avoid STIs and prevent HIV.
        </p>
      </div>
      <div className="mt-[34px] lg:w-[460px] mx-auto gap-5 flex items-center mt-[32px] border-2 border-grey7 rounded-[20px] py-[17px] relative">
        <div className="rounded-full bg-purple w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] flex justify-center items-center absolute left-[-35px]">
          <p className="mb-0 font-bold text-[22px] lg:text-[30px]">2</p>
        </div>
        <p className="font-normal text-[14px] lg:text-[15px] ml-[40px]">
          If you test HIV negative, learn more about PrEP - a daily HIV
          prevention pill.
        </p>
      </div>
      <div className="mt-[34px] lg:w-[460px] mx-auto gap-5 flex items-center mt-[32px] border-2 border-grey7 rounded-[20px] py-[17px] relative">
        <div className="rounded-full bg-purple w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] flex justify-center items-center absolute left-[-35px]">
          <p className="mb-0 font-bold text-[22px] lg:text-[30px]">3</p>
        </div>
        <p className="font-normal text-[14px] lg:text-[15px] ml-[40px]">
          If you are diagnosed with HIV, you can live a healthy long life with
          daily HIV medicine (ART).
        </p>
      </div>
      <div className="mt-[40px] flex lg:flex-row flex-col justify-center">
        <div className="flex justify-center lg:mr-[43px] mb-[16px] lg:mb-0">
          <p className="text-blue opacity-90 text-[14px] font-semibold">
            HIV testing
          </p>
          <ArrowRight className="opacity-90" size="1.3rem" color="#4C6FFF" />
        </div>
        <div className="flex justify-center">
          <p className="text-blue opacity-90 text-[14px] font-semibold">
            Refer a friend/partner
          </p>
          <ArrowRight className="opacity-90" size="1.3rem" color="#4C6FFF" />
        </div>
      </div>
    </div>
  );
  const returnModal = () => {
    switch (type) {
      case "home":
        return (
          <ModalForm
            err={err}
            checkEmail={checkEmail}
            closeModal={closeModal}
            email={email}
            modalDetails={modalDetails}
            setModalDetails={setModalDetails}
          />
        );
      case "success":
        return <ModalSubmitted />;
      case "failed":
        return <TimeToActModal />;
      default:
        break;
    }
  };
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-[90]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`transform bg-white min-h-[462px]  w-[800px] flex  flex-col my-auto rounded-[50px] text-left align-middle shadow-xl transition-all mx-[16px] lg:mx-[0]`}
              >
                <button
                  onClick={closeModal}
                  className="w-[40px] h-[40px] rounded-full bg-[#F0F0F0] md:bg-white flex justify-center items-center box-shadow absolute right-[7%] md:right-[-13px] top-[5%] md:top-[-14px]"
                >
                  <X />
                </button>
                {/* {isSubmited ? (
                  <ModalSubmitted />
                ) : (
                  <ModalForm
                    err={err}
                    checkEmail={checkEmail}
                    closeModal={closeModal}
                    email={email}
                    modalDetails={modalDetails}
                    setModalDetails={setModalDetails}
                  />
                )} */}
                {returnModal()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
