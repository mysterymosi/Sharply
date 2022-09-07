/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Zap } from "react-feather";
import { ChildrenProp } from "../types";
import { urlFor } from "./utils";

export const faqs = [
  {
    title: "How can I start using Little?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "How can I put money in the Little card?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "Can the Little card be secured with a PIN?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "Does the Little card expire?",
    description:
      " Yes! You can purchase a license that you can share with your entire team.",
  },
];
export const allFaqs = [
  {
    title: "General",
    faqs: faqs,
  },
  {
    title: "Cards",
    faqs: faqs,
  },
  {
    title: "Allowance",
    faqs: faqs,
  },
  { title: "Tasks", faqs: faqs },
  { title: "Giftlinks", faqs: faqs },
];

export const moneyItemList = [
  {
    icon: "/images/money-icon.svg",
    title: "Send pocket money instantly",
    description: "Transfer money to your child whenever, however, and wherever",
  },
  {
    icon: "/images/card-icon.svg",
    title: "Set spend limit",
    description: "Regulate how much they can spend daily, weekly or monthly",
  },
  {
    icon: "/images/notification-icon.svg",
    title: "Get notified when your child spends ",
    description: "Transfer money to your child whenever, however, and wherever",
  },
  {
    icon: "/images/reward-icon.svg",
    title: "Reward them for good behaviour",
    description:
      "Let them know you see their efforts and it pays. They can earn their pocket money. ",
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
    name: "About Us",
    link: "/",
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
      "Is your child stranded, low on funds or in case of an emergency? With Little, you can send money instantly to their card.",
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

export const navItems = [
  {
    name: "Parents",
    link: "/parents",
  },
  {
    name: "Kids",
    link: "/kids",
  },
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
    name: "About",
    link: "/",
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
