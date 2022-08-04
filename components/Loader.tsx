import Image from "next/image";
import { ReactNode, Suspense } from "react";

const LoaderComp = <Image src="/logo.svg" width={72} alt="logo" height={18} />;

export const SuspenseContainer = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={LoaderComp}>{children}</Suspense>;
};
