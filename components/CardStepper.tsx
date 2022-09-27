import { StepperListProps } from "../types";
import { Stepper } from "./Stepper";

export const CardStepper = () => {
  const cardWorkingList = [
    {
      heading: "Get Instant Notification",
      description:
        "Get instant notifications for every transaction your child does that show how much and where they are spending",
      img: (
        <img
          src={"/images/little-instant-notifications.svg"}
          alt={"get notification"}
          className="h-[100px] md:h-auto"
        />
      ),
    },
    {
      heading: "Set spend and withdrawal limits",
      description:
        "Set weekly or monthly limits on how much your child can spend with their card. Easily enable and disable the card for use online and at ATMs or POS points. Block their cards from use at select stores & merchants",
      img: (
        <img
          src={"/images/withdrawal-limit.svg"}
          className="h-[100px] md:h-auto"
          alt={"withdrawal limit"}
        />
      ),
    },
    {
      heading: "Safe & secure",
      description:
        "Little Cards are fully safe & secure for transactions. You can easily block the card directly from the app if it ever goes missing.",
      img: (
        <img
          src={"/images/block-card.svg"}
          className="h-[200px] md:h-auto"
          alt={"block card"}
        />
      ),
    },
  ];
  return <Stepper list={cardWorkingList} />;
};
