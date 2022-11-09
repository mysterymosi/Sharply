import Image from "next/image";
import { Button } from "./Button";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { navItems } from "../utils";
import HomeModal from "./Modal";
import posthog from "posthog-js";
export const NavigationBar = ({
  buttonText,
  buttonClassName,
}: {
  buttonText?: string;
  buttonClassName?: string;
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundFull, setBackgroundFull] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBackgroundFull(true);
    } else {
      setBackgroundFull(false);
    }
  };
  const goToForm = () => {
    console.log("buttonText: ", buttonText);
    if (buttonText?.toLowerCase() === "order a card") {
      router.push("/order-a-card");
      posthog.capture("order_a_card_button_clicked", {
        location: "Navbar on home page",
        action: "goes to order a card form",
      });
    }
    if (buttonText?.toLowerCase() === "refer a school") {
      router.push("/refer-a-school");
      posthog.capture("refer_a_school_button_clicked", {
        location: "Navbar on little-in-schools page",
        action: "goes to refer a card form",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <Popover
      as="nav"
      ref={ref}
      className={`  ${
        backgroundFull ? "xl:bg-white box-shadow lg:py-2 lg:pt-2" : "lg:pt-6"
      } z-50 top-0 w-full fixed align-center transition-all left-0 items-center lg:px-8  justify-between `}
    >
      <div
        className={`${
          isInView ? "opacity-100 " : "opacity-0 translate-y-[-200px]"
        } duration-[0.5s]
        ${backgroundFull ? "" : " box-shadow"} 
        
         transition-all xl:w-full xl:m-auto xl:max-w-[1100px] pr-[8px] pl-[24px] xl:mw-[1px] bg-white lg:rounded-full `}
      >
        <div className="flex justify-between items-center md:justify-start lg:h-[64px] h-[76px]">
          <div className="flex mr-6 lg:mr-10 cursor-pointer">
            <Link href="/" passHref>
              <a className="mt-[3px]">
                <Image
                  src="/logo.svg"
                  width={72}
                  alt="logo"
                  height={18}
                  layout="fixed"
                />
              </a>
            </Link>
          </div>

          <div className=" flex-auto justify-between  hidden md:flex">
            {navItems
              .filter((_, idx) => idx < 6)
              .map(({ name, link, reload }) => {
                return !reload ? (
                  <Link key={link} href={link}>
                    <p
                      className={`my-5 text-xs lg:text-base cursor-pointer ${
                        router.pathname.includes(link)
                          ? "font-semibold"
                          : "font-medium"
                      }`}
                    >
                      {name}
                    </p>
                  </Link>
                ) : (
                  <a key={link} href={link}>
                    <p
                      className={`my-5 text-xs lg:text-base cursor-pointer ${
                        router.pathname.includes(link)
                          ? "font-semibold"
                          : "font-medium"
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                );
              })}
          </div>
          <div className="hidden md:flex items-center  justify-end  md:flex-1 lg:w-0 ml-6 lg:ml-0">
            <Button
              onClick={goToForm}
              style={{ backgroundColor: buttonClassName }}
              className="my-2 lg:h-[48px] whitespace-nowrap px-[29px] hover:scale-100"
            >
              {buttonText ?? " Order a Card"}
            </Button>
          </div>

          <Popover.Button className=" cursor-pointer py-2.5 px-[8px] rounded-full w-[92px] outline-0 my-2 whitespace-nowrap md:hidden flex items-center justify-evenly md:flex-1 lg:w-0 bg-white2 font-semibold text-xs text-black">
            Menu <ChevronDown size={15} />
          </Popover.Button>
          <Popover.Panel className="absolute z-50 top-[4rem] rounded-2xl  shadow bg-white w-[260px] right-[21px] px-[24px] pb-[24px]">
            <div className="grid grid-col-1">
              {navItems.map(({ name, link, reload }) =>
                !reload ? (
                  <Link key={link} href={link}>
                    <p
                      className={`mt-5 text-sm lg:text-base cursor-pointer ${
                        router?.pathname === link ? "font-bold" : "font-medium"
                      }`}
                    >
                      {name}
                    </p>
                  </Link>
                ) : (
                  <a key={link} href={link}>
                    <p
                      className={`mt-5 text-sm lg:text-base cursor-pointer ${
                        router?.pathname === link ? "font-bold" : "font-medium"
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                )
              )}

              <Button
                onClick={goToForm}
                style={{ backgroundColor: buttonClassName }}
                className="my-2 whitespace-nowrap"
              >
                {buttonText ?? " Order a Card"}
              </Button>
            </div>
          </Popover.Panel>
        </div>
      </div>
      <HomeModal show={isOpen} setShow={setIsOpen} />
    </Popover>
  );
};
