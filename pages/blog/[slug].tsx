import groq from "groq";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { BookList, Layout, NavigationBar, SharePost } from "../../components";
import { Subscription } from "../../components/Subscribtion";
import { urlFor } from "../../utils";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { twitterHandle } from "../../utils/constants";
import DisqusComments from "../../components/DisqusComments";
const Post: NextPage<any> = ({ post, blogContent }) => {
  const {
    _id,
    body = [],
    title,
    image,
    publishedAt,
    category,
    estimatedReadingTime,
    author,
  } = post;
  const ptComponents = {
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
          <img
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
  const { asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return (
    <Layout title="Blog" showDownloadCard>
      <section>
        <NavigationBar />
      </section>

      <section className="flex lg:max-w-[1100px] md:w-full flex-col md:flex-row md:gap-6 p-5 m-auto   h-full md:mt-[100px]  rounded-[40px] ">
        <div className="md:w-2/5 mt-[100px] w-full">
          <p className="text-[18px] font-[400] mb-[16px]"> {category?.title}</p>
          <h3 className="font-semibold text-[30px] leading-[39px] md:text-[40px] md:leading-[49px] mb-[16px]">
            {title}
          </h3>
          <h3 className="text-[#424242] text-[16px] leading-[16px]">
            {new Date(publishedAt)?.toDateString() ?? "Today"} - {` `}
            {estimatedReadingTime} mins
          </h3>
          <div className="flex gap-[16px] mt-[48px] mb-[100px]">
            <img src={"/images/author.svg"} alt={author?.title} />
            <div>
              <p className="font-semibold font-[16px] leading-[20px]">
                {author?.name}
              </p>
              <p className="font-[14px] leading-[17px] text-[#424242]">
                {author?.title}
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col ">
            <Link href="/blog">
              <p className="flex text-[14px] items-center cursor-pointer">
                {" "}
                <ArrowLeft size={14} className="mr-[8px]" /> Back to Blog
              </p>
            </Link>
            <div className="mt-[64px]">
              <SharePost
                url={`${origin}${asPath}`}
                title={title}
                twitterHandle={twitterHandle}
              />
            </div>
          </div>
        </div>

        <div className="md:w-3/5  blog w-full">
          <div className="mb-[80px] ">
            <img
              src={image}
              className="lg:mt-[75px] mt-[40px] lg:w-[650px]  rounded-[12px] box-shadow"
              alt={"little card hero"}
            />
          </div>

          <PortableText value={body} components={ptComponents} />

          <div className="md:hidden flex w-full justify-between">
            <Link href="/blog">
              <p className="flex text-[14px] items-center">
                {" "}
                <ArrowLeft size={14} className="mr-[8px]" /> Back to Blog
              </p>
            </Link>
            <div className="mt-[64px]">
              <SharePost
                url={`${origin}${asPath}`}
                title={title}
                twitterHandle={twitterHandle}
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:max-w-[1100px]  p-5 m-auto  md:mt-[100px] ">
        <DisqusComments url={`${origin}${asPath}`} title={title} id={_id} />
      </section>

      <div className="lg:mt-[100px]">
        <BookList title="Latest releases" books={blogContent} />
      </div>
      <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full md:mt-[100px]  rounded-[40px]">
        <Subscription />
      </section>
    </Layout>
  );
};
const query = groq`*[_type == "blog" && slug.current == $slug][0]{
  title,
  category->,
  author->,
  "image" :image.asset->url,
   body, publishedAt,
   publishedAt,
   'estimatedReadingTime' : round(length(pt::text(body)) / 5 / 180 ),
   _id,
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  const blogContent = await client.fetch(groq`
  *[
    _type == "blog"
    
  ] | order(publishedAt desc) [0...4] {
   _id,
   title,
   category->,
   slug,
   publishedAt,
   body,
   "image" :image.asset->url,
   'estimatedReadingTime' : round(length(pt::text(body)) / 5 / 180 )
 }

   `);
  return {
    props: {
      post,
      blogContent,
    },
  };
}

export default Post;
