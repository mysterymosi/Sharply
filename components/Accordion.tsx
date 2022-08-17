import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import { ListProps } from "../types";
import { FadeInWhenVisible } from "../utils";

export const Accordion = ({ list, className }: ListProps) => {
  return (
    <div className="w-full">
      {list.map(({ title, description }, i) => (
        <div
          key={i}
          className={`${
            className ? className : ""
          } bg-white3 min-h-[56px] flex flex-col w-full sm:w-[627px] lg:w-full items-start px-[12px]  md:px-[24px] justify-center mb-[20px] rounded-[12px] `}>
          <Disclosure key={title}>
            {({ open }) => (
              <>
                <div className="flex justify-between w-full items-center overflow-hidden">
                  <p
                    className={`${
                      !open ? "truncate font-regular" : ""
                    } text-start font-regular`}>
                    {title}{" "}
                  </p>

                  <Disclosure.Button className="py-3 ">
                    <div className="w-[40px] text-xs  h-[40px] rounded-xl font-medium bg-white flex items-center justify-center ">
                      {" "}
                      {open ? (
                        <Image
                          priority={true}
                          src={"/images/minus-icon.svg"}
                          width={12}
                          alt="minus"
                          height={2}
                          layout="fixed"
                        />
                      ) : (
                        <Image
                          priority={true}
                          src={"/images/plus-icon.svg"}
                          width={12}
                          alt="plus"
                          height={12}
                          layout="fixed"
                        />
                      )}
                    </div>
                  </Disclosure.Button>
                </div>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0">
                  <Disclosure.Panel className="text-gray-500 mb-[24px]">
                    {description}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};
