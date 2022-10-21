import Image from "next/image";
import React from "react";
import { CreditCard, Send, Shield, Zap } from "react-feather";
import { ChildrenProp } from "../types";
import { urlFor } from "./utils";

export const faqs = [
  {
    title: "How can I start using Little?",
    description:
      " All you have to do is download the Little app on Google Playstore or Apple App store and fill in your details to create an account.",
  },
  {
    title: "How can I put money in the Little card?",
    description:
      " You can either fund the Little card through USSD, Bank transfer or any other deposit means available to you",
  },
  {
    title: "Can the Little card be secured with a PIN?",
    description: " Yes, you can secure the Little card with a four-digit pin.",
  },
  {
    title: "Does the Little card expire?",
    description:
      " The Little card can be used for 3 years after which it expires",
  },
  {
    title: "What if the Little card gets stolen?",
    description:
      " If the Little card gets stolen, you can block it from the Little app and also request for a new card.",
  },
  {
    title: "How can I replace a lost/stolen card?",
    description:
      " Simply make a request through the Little Mobile App and we will immediately process a new one.",
  },
  {
    title: "How does the Little card work in School?",
    description:
      " The Schoolable Little card can be used to make purchases in school. Your child makes payment by simply tapping on payment terminals at selected sales points in schools.",
  },
  {
    title: "How much does it cost to get the Little card?",
    description: " The Little card costs 2000 Naira.",
  },
];

const cardFaqs = [
  {
    title: "How do Little cards work?",
    description:
      " The Little cards work just like the regular ATM cards while giving you added advantages like setting spend limits, track spend location, getting notification on low balance and so much more.",
  },
  {
    title: "What are the types of Little cards?",
    description:
      " There are 2 types of Little cards; Little Verve card & Schoolable Little card.\n\nThe Little Verve card can be used any and everywhere (online, ATM, POS etc) while the Schoolable Little card is a smart card that can only be used at our partner schools and other supported merchant locations.",
  },
  {
    title: "How can I request a card?",
    description:
      " You can request for a Little card through the Little app or by clicking on the Order a Card button on our website.",
  },
  {
    title: "Will I be charged a maintenance fee for the Little card?",
    description:
      " No, we do not charge any maintenance fee for the Little card",
  },
  {
    title: "How long does it take to get the Little card?",
    description:
      " It can take 3 to 7 days for a new card to be processed and delivered to you.",
  },
  {
    title: "What is the minimum age to use the card?",
    description:
      " The card can be used by children as young as 9 years or about to enter JSS1 and understand basic financial concepts.\n\nWe would like to add that you know your child better than anyone else, meaning that you are the most qualified to make the decision on the age to give your child the Little card.",
  },
];

const schoolFaqs = [
  {
    title: "How much does the card cost?",
    description:
      " The Schoolable Little card costs 1500 Naira at initial purchase and 1000 Naira for replacement",
  },
  {
    title: "How do students pickup the Schoolable Little Card?",
    description:
      " Students pick up the Schoolable Little card from their school. Note that the card only works at our partner schools and other supported merchant locations.",
  },
  {
    title: "Can the cards be used outside the school?",
    description:
      " The Little Verve card can be used anywhere (POS, ATMs, Online) while the Schoolable Little card works at supported merchant locations.",
  },
  {
    title: "Is the money safe with Little?",
    description:
      " Yes, the money is safe with Little. We are NDIC insured which means that every deposit made on Little is protected.\n\nLittle also secures customers data with high level encryption and we do not store your card information as we work with a PCIDSS-compliant payment processor to handle all our customers’ card details.",
  },
  {
    title: "Can the school get notified on how much the students spend daily",
    description:
      " Getting notified on how much students spend daily is mostly reserved for parents but a school can granted this information after verifiable request has been provided by the school administrator.",
  },
];

export const allFaqs = [
  {
    title: "General",
    faqs: faqs,
  },
  {
    title: "Cards",
    faqs: cardFaqs,
  },
  {
    title: "Schools",
    faqs: schoolFaqs,
  },
];

export const moneyItemList = [
  {
    icon: "/images/money-icon.svg",
    title: "Send pocket money instantly",
    description: (
      <span>
        Transfer money to you child whenever,
        <br /> however and wherever
      </span>
    ),
  },
  {
    icon: "/images/card-icon.svg",
    title: "Set spend limit",
    description: (
      <span>
        Regulate how much they can spend
        <br />
        daily, weekly or monthly
      </span>
    ),
  },
  {
    icon: "/images/notification-icon.svg",
    title: "Get notified when your child spends ",
    description: (
      <span>
        Get instant notifications whenever
        <br />
        your child spends
      </span>
    ),
  },
  {
    icon: "/images/reward-icon.svg",
    title: "Reward them for good behaviour",
    description: (
      <span>
        Let them know you see their efforts and it pays.
        <br />
        They can earn their pocket money.
      </span>
    ),
  },
];

export const schools = [
  {
    name: "isolog",
    image: "/images/school-logos/isolog.svg",
  },
  {
    name: "forbes",
    image: "/images/school-logos/forbes.svg",
  },
  {
    name: "st-francis",
    image: "/images/school-logos/st-francis.svg",
  },
  {
    name: "brookstone",
    image: "/images/school-logos/brookstone.svg",
  },
  {
    name: "taqwa",
    image: "/images/school-logos/taqwa.svg",
  },
  {
    name: "regent",
    image: "/images/school-logos/regent.svg",
  },
  {
    name: "bells",
    image: "/images/school-logos/bells.svg",
  },
  {
    name: "mictec",
    image: "/images/school-logos/mictec.svg",
  },
  {
    name: "diue-le",
    image: "/images/school-logos/diue-le.svg",
  },
];
export const footerNavItems = [
  {
    name: "Terms",
    link: "/terms-of-use",
  },
  {
    name: "Privacy",
    link: "/privacy",
  },

  {
    name: "Read our Blog",
    link: "/blog",
  },
  {
    name: "Frequently Asked Questions",
    link: "/faqs",
  },
];
export const footerSocials = [
  {
    icon: "/images/instagram.svg",
    link: "https://instagram.com/Trylittleapp",
    alt: "instagram",
  },

  {
    icon: "/images/twitter.svg",
    link: "https://twitter.com/Trylittleapp",
    alt: "twitter",
  },
  {
    icon: "/images/facebook.svg",
    link: "https://facebook.com/Trylittleapp",
    alt: "facebook",
  },
];

export const parentFeatures = [
  {
    title: "A Card you can control",
    showButton: true,
    description:
      " The Little debit card gives your child the freedom to spend while iving you the options to set boundaries",
    image: "/images/parents-card.svg",
    position: "left",
  },
  {
    title: "Schedule Pocket Money",
    showButton: false,
    description:
      "Sending regular pocket money can be flexible. Just set how much you want to send and how often you want it sent.",
    image: "/images/schedule-pocket-money.svg",
    position: "right",
  },
  {
    title: "Get Instant Notifications",
    showButton: false,
    description:
      " Receive notifications with every debit. Little lets you know when they spend and how much they spend.",
    image: "/images/instant-notifications.svg",
    position: "left",
  },
  {
    title: " Send money anytime or anywhere",
    showButton: false,
    description:
      " Is your child stranded, low on funds or in case of an emergency? With Little, you can send money instantly to their card.",
    image: "/images/send-money.svg",
    position: "right",
  },
];
export const featuresParentsLove = [
  {
    title: "Instant account opening ",
    description:
      "Yes! You will not queue up at a bank to create an account or get your child’s account details”",
    image: <Zap fill="white" color="white" size={16} />,
    color: "#5BAB0A",
  },

  {
    title: "Used In School and Out of School",
    description:
      "The Little card can be used to receive and spend pocket money within the school, and outside the school. (ATM, and POS centres)",
    image: <img src="/images/graduate.svg" alt="graduate" />,
    color: "#FF991B",
  },

  {
    title: "Add a co-parent",

    description:
      "What is better than one parent, two. Add another parent or guardian to oversee your child’s spend habits.",
    image: <img src="/images/people-icon.svg" alt="co-parent" />,
    color: "#35AFF7",
  },
];
export const liitleSchoolFeatures = [
  {
    title: "  For Pocket Money Card in School",
    description:
      " The card is accompanied by an App where parents/guardians can  get instant notifications, set spending limits and block cards.",
    image: <CreditCard color="white" size={16} />,
    color: "#5BAB0A",
  },

  {
    title: " For Access Control in School",
    description:
      " This Smart card is also designed to offer a secure way to control entries and exits into the school environment while sending parents and the necessary authority instant notifications.",
    image: <Shield color="white" size={16} />,
    color: "#FF991B",
  },

  {
    title: "For Payments",

    description:
      " Quick and easy way to make other payments accepted by the  school. Can be used to pay tuition, bus fees, books, excursion     fees etc.",
    image: <Send color="white" size={16} />,
    color: "#35AFF7",
  },
];
export const giftLinkFaqs = [
  {
    title: "What are giftlinks?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "How do I create a giftlink?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "How can I share a giftlink?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "Can I see who sends my child money through a giftlink?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "How can friends & family send my child money through a giftlink",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
];

export const giftlinkOptions = [
  {
    name: "Add Custom Image",
    icon: "/images/giftlink-image.svg",
  },
  {
    name: "Title your giftlink",
    icon: "/images/giftlink-title.svg",
  },
  {
    name: "Add a description",
    icon: "/images/giftlink-description.svg",
  },
];
export const shareGiftlinkOptions = [
  {
    name: "Copy Link",
    icon: "/images/giftlink-link.svg",
  },
  {
    name: "Share as a text",
    icon: "/images/share-text.svg",
  },
  {
    name: "Send as an email",
    icon: "/images/send-email.svg",
  },
];

export const books = [
  {
    title: "From child to financially responsible adult",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "1",
  },
  {
    title: "Finance 101 ; Money lessons for children",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "2",
  },
  {
    title: "Money lessons for the child I love",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "4",
  },
  {
    title: "Money lessons 101; A child’s first money journey",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "6",
  },
  {
    title: "How to raise a financially responsible child",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "5",
  },
  {
    title: "Rich kids: How to raise a millionaire child",
    image: "https://picsum.photos/200",
    link: "ww.googl.oc",
    _id: "9",
  },
];
export const schoolBenefits = [
  "Ease of use and convenience for parents and students",
  "No middle man between students pocket money and their spending",
  "Zero complains about students misplacing pocket money",
  "Introducing financial responsibility among students",
];
export const schoolNames = [
  "Queens College, Yaba",
  "St. Finbarr’sCollege, Akoka",
  "Ladela Schools, Abuja",
  " Baptist Boys’ Academy, Obanikoro",
  "Igbobi College, Yaba",
  "Reagan Memorial Baptist Girls, Yaba",
  "Federal Science and Technical College, Yaba",
  "Methodist Boys’ High School, Victoria Island",
  "King's College, Yaba",
  "F.G.C, Ijanikin",
];

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Parents",
    link: "/parents",
  },
  // {
  //   name: "Kids",
  //   link: "/kids",
  // },
  // {
  //   name: "Family & Friends",
  //   link: "/family-and-friends",
  // },
  {
    name: "Little Cards",
    link: "/little-cards",
  },
  {
    name: " Little in Schools",
    link: "/little-in-schools",
  },

  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faqs",
  },
];

export const ptComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: ChildrenProp) => (
      <h1 className="text-2xl">{children}</h1>
    ),
    p: ({ children }: ChildrenProp) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }: ChildrenProp) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: ChildrenProp) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      let imageSrc: any = urlFor(value)
        .width(320)
        .height(240)
        .fit("max")
        .auto("format");

      return (
        <Image
          alt={value.alt || " "}
          height={23}
          className="logo"
          src={imageSrc}
          width={24}
          loading="lazy"
        />
      );
    },
  },
};
