import { ReactNode } from "react";

export type ClassNameProps = {
  className?: string;
};
export type ChildrenProp = {
  children: ReactNode;
};
export type ButtonTypes = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;  
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
  buttonClassName?:string;
};
export type ListProps = {
  list: {
    title: string;
    description: string;
  }[];
  className?: string;
};
export type HomeStepProps = {
  step: number;
  children: React.ReactNode;
  className?: string;
};
export type ContentProp = {
  heading: string;
  description: string;
  buttonText?: string;
  footNote?: string;
  image?: string;
  section: string;
};
export type ContentTypeProps = {
  contents: ContentProp[];
};
export type LayoutProps = {
  children: ReactNode;
  title: string;
  showDownloadCard?: boolean;
};
export type BooksTypes = {
  title: string;
  image: string;
  _id: string;
  estimatedReadingTime?: number;
  publishedAt?: string;
  slug?: {
    current: string;
    _type: string;
  };
};
export type BookListProps = {
  books: BooksTypes[];
  title: string;
  download?: boolean;
};
export type BookGridProps = {
  books: BooksTypes[];
  download?: boolean;
};
export type TwoColLayoutProps = {
  showButton?: boolean;
  title: string;
  description: string;
  image: string;
  position: string;
};
export type GiftCardColProps = {
  children: ReactNode;
  className?: string;
};
export type TabsProps = {
  books: BooksTypes[];
  categories: {
    title: string;
  }[];
  loading: boolean;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};

export type ModalProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type StepperListProps = {
  list: {
    heading: string;
    description: string;
    img: any;
  }[];
  page?: string;
};
