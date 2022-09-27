import Image from "next/image";
import { WhatsappButton } from "./Button";

export const WhatsappContact = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return title !== "Parents" ? (
    <div className={`${className} md:flex-row flex-col flex md:items-center`}>
      <p className="mb-[16px] lg:mb-0"> Want to know more? Chat us on</p>
      {WhatsappButton}
      we promise to respond within 5 minutes
    </div>
  ) : (
    <div className={`${className} md:flex-row flex-col flex md:items-center`}>
      <p className="mb-[16px] lg:mb-0"> Talk directly with the CEO,</p>
      as a parent she’d love to hear from you and answer any questions you might
      have. {WhatsappButton}
    </div>
  );
};
