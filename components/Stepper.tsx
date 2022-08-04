export const Stepper = ({
  steps,
  currentStep,
  className,
}: {
  steps: number[];
  currentStep: number;
  className?: string;
}) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[white] w-[2px] absolute h-[250px] z-10 mb-[12px]"></div>
        {steps.map((step) => {
          const isActive = step === currentStep;
          return (
            <div
              key={step}
              className={`bg-[white] z-20  mb-[35px]
               rounded-full  ${
                 isActive ? " h-[40px] w-[40px]" : " h-[24px] w-[24px]"
               } 
               flex justify-center items-center`}>
              {isActive ? (
                <p className="text-[#5BAB0A] text-center font-black">{step}</p>
              ) : (
                <div className=" w-[8px] h-[8px] bg-[#BDDD9D] rounded-[20%]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
