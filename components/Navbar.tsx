import Image from "next/image";
import { Button } from "./Button";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { navItems } from "../types";
import { useRouter } from "next/router";
export const NavigationBar = () => {
  const router = useRouter();

  return (
    <Popover
      as="nav"
      className="drop-shadow-md relative align-center transition-all  items-center lg:px-8 lg:pt-6 justify-between">
      <div className=" xl:w-full xl:m-auto xl:max-w-[1060px] px-[20px] xl:mw-[1px] bg-white lg:rounded-full ">
        <div className="flex justify-between items-center md:justify-start h-[76px]">
          <div className="flex mr-10 cursor-pointer">
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
            {navItems.map(({ name, link }) => {
              return (
                <Link key={link} href={link}>
                  <p
                    className={`my-5 text-xs lg:text-base cursor-pointer ${
                      router.pathname.includes(link)
                        ? "font-semibold"
                        : "font-normal"
                    }`}>
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center justify-end sm:ml-3 md:flex-1 lg:w-0">
            <Button className="my-2 whitespace-nowrap">Get Started</Button>
          </div>

          <Popover.Button className=" cursor-pointer py-2.5 px-[8px] rounded-full w-[92px] outline-0 my-2 whitespace-nowrap md:hidden flex items-center justify-evenly md:flex-1 lg:w-0 bg-[#F5F5F5] font-semibold text-xs text-black">
            Menu <ChevronDown size={15} />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 top-[4rem] rounded-2xl  shadow bg-white w-[200px] right-[21px] px-[24px] pb-[24px]">
            <div className="grid grid-col-1">
              {navItems.map(({ name, link }) => (
                <Link key={link} href={link}>
                  <p
                    className={`my-5 text-xs lg:text-base cursor-pointer ${
                      router.pathname.includes(link)
                        ? "font-semibold"
                        : "font-normal"
                    }`}>
                    {name}
                  </p>
                </Link>
              ))}
              <p className="my-5 text-xs lg:text-base " key={"/blog"}>
                Blog
              </p>
              <p className="my-5 text-xs lg:text-base " key={"/faqs"}>
                FAQ
              </p>
              <Button className="my-2 whitespace-nowrap">Get Started</Button>
            </div>
          </Popover.Panel>
        </div>
      </div>
    </Popover>
  );
};
