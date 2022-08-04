import { ReactNode } from "react";

export type ClassNameProps = {
  className?: string;
};
export type ButtonTypes = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};
export type PhoneInputProps = {
  className?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  type?: string;
  name?: string;
  text?: string;
};
export type ListProps = {
  list: {
    title: string;
    description: string;
  }[];
};
export type HomeStepProps = {
  step: number;
  children: React.ReactNode;
};
export const navItems = [
  {
    name: "Parents",
    link: "/parents",
  },
  {
    name: "Kids",
    link: "/kids",
  },
  {
    name: "Family & Friends",
    link: "/family-and-friends",
  },
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
    link: "/about",
  },
];
