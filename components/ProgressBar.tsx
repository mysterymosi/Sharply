interface ProgressBarProps {
  level: number;
}
export const ProgressBar = ({ level }: ProgressBarProps) => {
  return (
    <div>
      <p className="text-black opacity-50 font-semibold text-[14px] mb-[10px] uppercase">
        {level} of 12
      </p>
      <div className="w-[443px] h-[10px] bg-grey8 rounded-[21px]">
        <div
          style={{ width: level * 8.3 + "%" }}
          className={`h-[10px] rounded-[21px] bg-black`}
        ></div>
      </div>
    </div>
  );
};
