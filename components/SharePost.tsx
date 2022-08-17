import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Image from "next/image";

export const SharePost = ({
  title,
  url,
  twitterHandle,
}: {
  title: string;
  url: string;
  twitterHandle: string;
}) => (
  <div className="">
    <p className="mb-[20px] text-grey text-[14px] text-end lg:text-start">
      Share Post
    </p>
    <div className="flex gap-[25px]">
      <FacebookShareButton
        url={url}
        className="button is-outlined is-rounded facebook">
        <Image
          className="cursor-pointer"
          layout="intrinsic"
          src={"/images/instagram.svg"}
          priority={true}
          width={30.72}
          alt={"instagram"}
          height={30.72}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        className="button is-outlined is-rounded twitter">
        <Image
          className="cursor-pointer"
          layout="intrinsic"
          src={"/images/twitter.svg"}
          priority={true}
          width={30.72}
          alt={"twitter"}
          height={30.72}
        />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <Image
          className="cursor-pointer"
          layout="intrinsic"
          src={"/images/linkedin.svg"}
          priority={true}
          width={30.72}
          alt={"twitter"}
          height={30.72}
        />
      </LinkedinShareButton>
    </div>
  </div>
);
