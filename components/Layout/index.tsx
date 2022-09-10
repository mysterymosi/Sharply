import Head from "next/head";
import { DownloadCard } from "../DownloadCard";
import { Footer } from "../Footer";
import { WhatsappContact } from "../WhatsappContact";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { LayoutProps } from "../../types";

export const Layout = ({ children, title, showDownloadCard }: LayoutProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{`${title} | Little App`}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          property="og:title"
          content={`${title} | Little App`}
          key="ogtitle"
        />
        <meta
          name="keywords"
          content="send pocket money, pocket money, personal finance, online banking, prepaid cards, children, kids, teens, family finance, allowance, chores, Debit Card for children, Pocket Money Made Smarter, little app, little card"
        />
        <meta
          property="og:description"
          content="Little is an easy and convenient way to give your child pocket money. Automatically disburse pocket money, set spending limits, monitor spending habits and more!"
          key="ogdesc"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Little is an easy and convenient way to give your child pocket money. Automatically disburse pocket money, set spending limits, monitor spending habits and more!"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="relative overflow-x-hidden">
        {children}
        {showDownloadCard && (
          <DownloadCard className="lg:max-w-[1000px] md:w-full xl:max-w-[1350px] lg:m-auto lg:mw-[1px] flex items-center justify-center overflow-x-hidden mb-12" />
        )}
        <div className="flex pl-[22.5px] pr-[17.5px]  z-30 w-full flex-col lg:items-center transition-all  md:pb-16 overflow-x-hidden md:px-5">
          <WhatsappContact
            title={title}
            className="lg:mb-[106px] lg:mt-10 mb-[90px]"
          />
          <Footer />
        </div>
      </main>
    </>
  );
};
