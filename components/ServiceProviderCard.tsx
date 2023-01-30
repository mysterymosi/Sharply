import { Dispatch, SetStateAction } from "react";
import { RadioGroup } from "@headlessui/react";
import { ArrowRight } from "react-feather";

interface RadioInputProps {
  options: any[];
  onChange: Dispatch<SetStateAction<null>>;
  value?: any;
}
export default function ServiceProviderCard({
  options,
  onChange,
  value,
}: RadioInputProps) {
  return (
    <div className="w-full pb-[40px]">
      <div className="w-full">
        <RadioGroup value={value} onChange={onChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2 grid gap-4 md:grid-cols-3 grid-cols-1">
            {options?.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ active, checked }) =>
                  `${checked ? "border-blue" : "border-grey10"}
                    relative cursor-pointer rounded-[10px] px-5 py-4 border-2 border-solid focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center basis-11/12">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="div"
                            className={`font-medium text-[15px]`}
                          >
                            <div>
                              <p className="text-green3 font-medium text-xs">
                                Free
                              </p>
                            </div>
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked ? (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-[18px] w-[18px]" />
                        </div>
                      ) : (
                        <div className="rounded-full border-[1.5px] border-grey9 w-[18px] h-[18px]"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-[17px] mt-[8px]">
                        {option.name}
                      </p>
                      <p className="font-normal text-xs">{option.address}</p>
                      <div className="flex mt-[20px] items-center">
                        <img
                          className="w-[17px] h-[20px]"
                          src={"/images/call.png"}
                          alt="logo"
                        />
                        <p className="font-normal text-xs ml-[10px]">
                          {option.phone}
                        </p>
                      </div>
                      <div className="flex mt-[15px] items-center">
                        <img
                          className="w-[17px] h-[20px]"
                          src={"/images/map.png"}
                          alt="logo"
                        />
                        <p className="font-normal text-xs ml-[10px] text-blue1 font-semibold mr-[9px]">
                          Open in map
                        </p>
                        <ArrowRight color="#4C6FFF" size="1.2em" />
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#335AFF" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
