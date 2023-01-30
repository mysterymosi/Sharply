import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { LayoutProps } from "../../types";
import { useState } from "react";

export const Layout = ({ children, title, showDownloadCard }: LayoutProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  const [showIcons, setShowIcons] = useState(false);

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
        <div className="z-[5] fixed right-[120px] bottom-[115px] flex flex-col">
          {showIcons && (
            <div className="flex flex-col">
              <a target="_blank" href="https://www.instagram.com">
                <img
                  className="w-[92px] mb-[-20px]"
                  src="/images/messenger.png"
                  alt="message"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com">
                <img
                  className="w-[92px] mb-[-20px]"
                  src="/images/instagram.png"
                  alt="message"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com">
                <img
                  className="w-[92px] mb-[-20px]"
                  src="/images/whatsapp.png"
                  alt="message"
                />
              </a>
            </div>
          )}
          <img
            onClick={() => setShowIcons(!showIcons)}
            className="w-[92px] cursor-pointer"
            src="/images/message.png"
            alt="message"
          />
        </div>
      </main>
    </>
  );
};
