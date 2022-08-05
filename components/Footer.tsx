import Image from "next/image";
import Link from "next/link";
import { footerNavItems, footerSocials } from "../utils";

export const Footer = () => {
  return (
    <footer className="lg:w-full lg:m-auto lg:border-t border-[#E8E8E8] md:items-center lg:pt-[51px]  ">
      <div className="flex flex-1 relative lg:max-w-[1000px] md:w-full xl:max-w-[1350px] lg:m-auto lg:mw-[1px] md:flex-row flex-col md:items-center justify-start md:justify-between">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={72}
              alt="logo"
              height={18}
              priority={true}
              layout="fixed"
            />
          </a>
        </Link>

        <div className=" flex flex-col lg:flex-row justify-between mt-12 lg:mt-0">
          {footerNavItems.map(({ name, link }, i) => (
            <Link key={name} href={link}>
              <p
                className={`${
                  i !== 2 ? "mr-12" : ""
                }  mb-6 lg:mb-0 cursor-pointer`}>
                {" "}
                {name}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6 lg:mt-0">
          {footerSocials.map(({ icon, link, alt }) => (
            <a href={link} key={alt} rel="noreferrer" target="_blank">
              <span className="mr-10 ">
                <Image
                  className="cursor-pointer"
                  layout="intrinsic"
                  src={icon}
                  priority={true}
                  width={30.72}
                  alt={alt}
                  height={30.72}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
