import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { ListProps } from "../../types";

export const Accordion = ({ list }: ListProps) => {
  return (
    <>
      {list.map(({ title, description }) => (
        <div
          key={title}
          className="bg-[#F7F7F7] min-h-[56px] flex flex-col w-full sm:w-[627px] lg:w-full items-start px-[12px] md:px-[24px] justify-center mb-[20px] rounded-[12px]">
          <Disclosure key={title}>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-3 flex justify-between w-full items-center overflow-hidden">
                  <p
                    className={`${
                      !open ? "truncate" : ""
                    } text-start font-medium`}>
                    {title}{" "}
                  </p>

                  <div className="w-[40px] text-xs  h-[40px] rounded-xl font-medium bg-white flex items-center justify-center ">
                    {" "}
                    {open ? (
                      <Image
                        src={"/images/minus-icon.svg"}
                        width={12}
                        alt="minus"
                        height={2}
                        layout="fixed"
                      />
                    ) : (
                      <Image
                        src={"/images/plus-icon.svg"}
                        width={12}
                        alt="plus"
                        height={12}
                        layout="fixed"
                      />
                    )}
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="text-gray-500 mb-[24px]">
                  {description}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </>
  );
};
