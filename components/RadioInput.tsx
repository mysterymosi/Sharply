import { Dispatch, SetStateAction } from "react";
import { RadioGroup } from "@headlessui/react";

interface RadioInputProps {
  options: any[] | string[];
  onChange: Dispatch<SetStateAction<null>>;
  value?: any;
  type?: "arr" | "obj";
}
export default function RadioInput({
  type,
  options,
  onChange,
  value,
}: RadioInputProps) {
  return (
    <div className="w-full pb-[40px]">
      <div className="w-full max-w-md">
        <RadioGroup value={value} onChange={onChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={type === "obj" ? option.id : option}
                value={option}
                className={({ active, checked }) =>
                  `${checked ? "border-blue" : "border-grey10"}
                    relative flex cursor-pointer rounded-[10px] px-5 py-4 border-2 border-solid focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      {checked ? (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-[18px] w-[18px]" />
                        </div>
                      ) : (
                        <div className="rounded-full border-[1.5px] border-grey9 w-[18px] h-[18px]"></div>
                      )}
                      <div className="flex items-center basis-11/12">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-[15px]`}
                          >
                            {type === "obj" ? option.option : option}
                          </RadioGroup.Label>
                        </div>
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
