import Image from "next/image";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { navItems } from "../utils";
import HomeModal from "./Modal";
export const NavigationBar = ({
  buttonText,
  buttonClassName,
  page,
}: {
  buttonText?: string;
  buttonClassName?: string;
  page?: string;
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [isOpen, setIsOpen] = useState(false);
  const returnLinkColor = () => {
    switch (page?.toLowerCase()) {
      case "home":
      case "risk-assessment":
        return "text-white";
      case "services":
        return "textg-black";
      default:
        return "text=white";
    }
  };
  return (
    <Popover
      as="nav"
      ref={ref}
      className={`${
        page === "risk-assessment" && "fixed"
      } mx-auto z-50 top-0 w-full align-center transition-all left-0 items-center lg:pt-[79px]  justify-between ${
        page === "risk-assessment" || (page === "home" && "px-[16px] lg:px-0")
      } ${page === "home" && "hidden lg:flex"} `}
    >
      <div
        className={`${
          isInView ? "opacity-100 " : "opacity-0 translate-y-[-200px]"
        } duration-[0.5s]
         transition-all lg:container "bg-transparent"
          `}
      >
        <div className="flex justify-between items-center md:justify-between lg:h-[64px] h-[76px]">
          <div className="flex cursor-pointer">
            <Link href="/" passHref>
              <a className="mt-[3px]">
                {page === "home" ? (
                  <Image
                    src={"/images/white.svg"}
                    width={191}
                    alt="logo"
                    height={69}
                    layout="fixed"
                  />
                ) : (
                  <Image
                    src={"/images/Group-1.png"}
                    width={57}
                    alt="logo"
                    height={57}
                    layout="fixed"
                    className="rounded-full"
                  />
                )}
              </a>
            </Link>
          </div>

          <div className=" flex-auto justify-end  hidden md:flex">
            {navItems
              .filter((_, idx) => idx < 6)
              .map(({ name, link }) => {
                return (
                  <Link key={link} href={link}>
                    <p
                      className={`my-5 text-xs lg:text-base ${returnLinkColor()} cursor-pointer ml-[50px] ${
                        router.pathname.includes(link) && "text-blue"
                      }`}
                    >
                      {name}
                    </p>
                  </Link>
                );
              })}
          </div>

          <Popover.Button className="cursor-pointer w-[92px] md:hidden flex items-center justify-end outline-0 md:flex-1 lg:w-0">
            <Image
              src={"/images/menu.svg"}
              width={57}
              alt="logo"
              height={57}
              layout="fixed"
            />
          </Popover.Button>
          <Popover.Panel className="absolute z-50 top-[6rem] rounded-2xl  shadow bg-white w-[260px] right-[21px] px-[24px] pb-[24px]">
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
            </div>
          </Popover.Panel>
        </div>
      </div>
      <HomeModal show={isOpen} setShow={setIsOpen} />
    </Popover>
  );
};
