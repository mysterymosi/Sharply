/* eslint-disable @next/next/no-img-element */
import groq from "groq";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import client from "../../client";
import { BookList, Layout, NavigationBar, SharePost } from "../../components";
import { Subscription } from "../../components/Subscribtion";
import { urlFor } from "../../utils";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { twitterHandle } from "../../utils/constants";
import { ChildrenProp } from "../../types";
const Post: NextPage<any> = ({ post, blogContent }) => {
  const {
    body = [],
    title,
    image,
    publishedAt,
    category,
    estimatedReadingTime,
    author,
  } = post;

  const { asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return (
    <div className="bg-faintYellow">
      <Layout title="Blog">
        <section>
          <NavigationBar />
        </section>

        <section className="flex lg:max-w-[1100px] flex-col md:flex-row gap-[20px] md:w-full px-[20px] md:p-0  m-auto  h-full md:pt-[200px] justify-between  rounded-[40px] ">
          <div className="md:w-2/5 lg:mt-[100px] mt-[130px] md:sticky md:top-[100px] md:h-screen">
            <p className="lg:text-[18px] text-[16px] font-[500] mb-[16px]">
              {" "}
              {category?.title}
            </p>
            <h3 className="font-semibold lg:text-[40px] text-[28px] leading-[35px] lg:leading-[49px] mb-[16px]">
              {title}
            </h3>
            <h3 className="text-grey lg:text-[16px] text-[14px] leading-[16px]">
              {new Date(publishedAt)?.toDateString() ?? "Today"} - {` `}
              {estimatedReadingTime} mins
            </h3>
            <div className="flex gap-[16px] mt-[48px] lg:mb-[100px] mb-[48px]">
              <img src={urlFor(author.image) as any} alt={author?.title} />
              <div>
                <p className="font-semibold font-[16px] leading-[20px]">
                  {author?.name}
                </p>
                <p className="font-[14px] leading-[17px] text-grey">
                  {author?.title}
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <Link href="/blog">
                <p className="flex text-[14px] items-center cursor-pointer">
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

          <div className="md:w-2/4 ">
            <div className="mb-[80px]">
              <Image
                src={image}
                width={528}
                alt={title}
                height={480}
                priority={true}
                className="rounded-[20px] object-cover"
                layout="responsive"
              />{" "}
            </div>
            <div className="blog">
              <PortableText
                content={body}
                serializers={{
                  p: ({ children }: ChildrenProp) => (
                    <p className="font-medium text-[16px] leading-[33px]">
                      {children}
                    </p>
                  ),

                  strong: ({ children }: ChildrenProp) => (
                    <span className="font-semibold text-[24px] mt-[40px] mb-[16px]">
                      {children}
                    </span>
                  ),
                }}
              />
            </div>
          </div>
        </section>
        <div className="lg:hidden flex justify-between items-end px-[20px] mt-[48px]">
          <Link href="/blog">
            <p className="flex text-[14px] items-center cursor-pointer mb-[8px] ">
              <ArrowLeft size={14} className="mr-[8px]" /> Back to Blog
            </p>
          </Link>
          <div className="">
            <SharePost
              url={`${origin}${asPath}`}
              title={title}
              twitterHandle={twitterHandle}
            />
          </div>
        </div>
        <div className="lg:mt-[100px]">
          <BookList title="Latest releases" books={blogContent} />
        </div>
        <section className="lg:max-w-[1000px] md:w-full  m-auto  h-full md:mt-[100px]  rounded-[40px]">
          <Subscription />
        </section>
      </Layout>
    </div>
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
    
  ] | order(_createdAt desc) [0...4] {
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
