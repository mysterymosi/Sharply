import { Dispatch, ReactNode, SetStateAction } from "react";

export type ClassNameProps = {
  className?: string;
};
export type ChildrenProp = {
  children: ReactNode;
};
export type ButtonTypes = {
  variant?: string,
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
export type PhoneInputProps = {
  className?: string;
  onClick?: () => void;
  onChange?: any;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  type?: string;
  name?: string;
  text?: string;
  buttonClassName?: string;
  noNumber?: boolean;
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
  contents2: ContentProp[];
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
  loading?: boolean;
};
export type BookGridProps = {
  books: BooksTypes[];
  download?: boolean;
  loading?: boolean;
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
  type?: string
};

export type StepperListProps = {
  list: {
    heading: string;
    description: string | Element | any;
    img: any;
    youtubeId?: string;
  }[];
  page?: string;
};


export type PhoneNumberInputProps = {
  country?: any;
  placeholder?: string;
  value: any;
  onChange: Dispatch<any>;
  className?: string;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface MultiOptionType {
  label: string;
  options: OptionType[];
}

export interface RiskAssessmentTypes {
  setStepNumber: Dispatch<SetStateAction<number>>;
}

export interface TabOptionTypes {
  id: number;
  name: string;
  active: boolean;
  done?: boolean;
}

export interface ReferPartnerTypes {
  setTabId: Dispatch<SetStateAction<number>>;
}