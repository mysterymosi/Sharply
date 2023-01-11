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
        <link rel="icon" href="/logo_icon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center lg:hidden">
        <p className="font-semibold font-[raleway] text-[30px] text-center">
          Mbok! Not available on smaller screens yet
        </p>
      </div>
      <main className="relative overflow-x-hidden hidden lg:block">
        {children}
      </main>
    </>
  );
};
