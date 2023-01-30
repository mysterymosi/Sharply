import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ArrowRight } from "react-feather";
interface ServicesCardTypes {
  src: string;
  title: string;
  description: string;
}
export const ServicesCard = ({
  src,
  title,
  description,
}: ServicesCardTypes) => {
  const router = useRouter();
  const bookAppointment = () => {
    Cookies.set("type", title);
    router.push("/appointment-booking");
  };
  return (
    <div className="card h-[200px] rounded-[20px] border-solid border-2 border-grey7 px-[26px] pb-[26px] relative mb-[30px]">
      <img className="mt-[-30px] w-[65px]" src={src} alt="self testing" />
      <p className="text-[18px] font-bold mt-[10px] mb-[10px]">{title}</p>
      <p className="text-[14px] font-normal leading-[17px]">{description}</p>
      <div className="flex items-center mt-[20px] absolute bottom-[20px]">
        <p
          onClick={bookAppointment}
          className="text-blue1 text-[14px] font-semibold mr-[2px] cursor-pointer"
        >
          Book an appointment
        </p>
        <ArrowRight color="#4C6FFF" />
      </div>
    </div>
  );
};
