/* eslint-disable @next/next/no-img-element */

export const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        className="animate-bounce w-[120px] h-[120px]"
        src="/logo.svg"
        alt="logo"
      />
    </div>
  );
};
