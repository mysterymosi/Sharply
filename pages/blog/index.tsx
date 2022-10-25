import groq from "groq";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import client from "../../client";
import {
  BookList,
  Layout,
  NavigationBar,
  Subscription,
} from "../../components";
import Tabs from "../../components/Tab";
const Blog: NextPage<any> = ({ blogContent, catgeoryContent }) => {
  const [selectedTab, setSelectedTab] = useState("All Articles");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBooks([]);
    client
      .fetch(
        `*[_type == "blog"${
          selectedTab !== "All Articles"
            ? `&& category->title =="${selectedTab}"`
            : `\n`
        }] | order(publishedAt desc){
          _id,
    title,
    category->,
    slug,
    publishedAt,
    body,
    "image" :image.asset->url,
    'estimatedReadingTime' : round(length(pt::text(body)) / 5 / 180 )
 }`
      )
      .then((data) => {
        setLoading(false);
        setBooks(data);
      });
  }, [selectedTab]);
  return (
    <div className="bg-faintYellow">
      <Layout title="Blog">
        <section>
          <NavigationBar buttonText="Order a card" />
          {false ? (
            <div className="px-[25px] pt-[96px] lg:pt-[150px] flex lg:flex-row flex-col md:h-full justify-center">
              {new Array(1).fill(1).map((_, i) => (
                <div
                  key={i}
                  className="flex justify-center flex-col  items-center"
                >
                  <p className="  lg:mt-[20px] h-6 w-[100px] rounded-md bg-[#d1d5db]  animate-pulse"></p>

                  <p className="mt-[20px] h-6 w-full rounded-md bg-[#d1d5db]  animate-pulse"></p>
                  <p className="mt-[20px] h-6 w-full rounded-md bg-[#d1d5db]  animate-pulse"></p>
                  <p className="md:w-[450px] w-[250px] h-[200px] mt-[50px] md:h-[340px] rounded-[24px] bg-[#d1d5db] animate-pulse"></p>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-[25px] pt-[96px] lg:pt-[150px] flex lg:flex-row flex-col md:h-full  justify-center text-black ">
              <div className="flex justify-center flex-col  items-center">
                <p className=""> {blogContent[0]?.category?.title}</p>
                <Link
                  href={`/blog/${blogContent[0]?.slug?.current}`}
                  passHref
                  as={`/blog/${blogContent[0]?.slug?.current}`}
                >
                  <h1 className="  hover:underline md:text-[40px] cursor-pointer max-w-[20ch] text-[28px] leading-[34px ]   lg:leading-[50px] font-semibold text-center mb-[16px] ">
                    {blogContent[0]?.title}
                  </h1>
                </Link>

                <p>
                  {new Date(blogContent[0].publishedAt).toDateString() ??
                    "Today"}{" "}
                  - {blogContent[0]?.estimatedReadingTime} mins
                </p>
                <img
                  src={blogContent[0]?.image}
                  className="lg:mt-[75px] mt-[40px] lg:w-[650px]  rounded-[12px] box-shadow"
                  alt={"little card hero"}
                />
              </div>
            </div>
          )}
        </section>

        <div className="lg:mt-[100px] ">
          {loading ? (
            <section className="flex flex-col flex-auto md:px-0 px-[23px] pt-[80px] xl:max-w-[1100px] m-auto lg:pt-{200px]">
              <h3 className="mt-[20px] mb-[20px] h-6 w-[200px] rounded-md bg-[#d1d5db]  animate-pulse"></h3>
              <div className="md:grid md:grid-cols-3  lg:grid-cols-4 flex  flex-row overflow-x-scroll gap-4 ">
                {new Array(4).fill(1).map((_, i) => (
                  <div key={i} className="mb-[48px] min-w-[240px] ">
                    <div className="md:w-[250px] mb-[20px] w-[200px] h-[200px] md:h-[240px] rounded-[24px] bg-[#d1d5db] animate-pulse"></div>

                    <p className="  lg:mt-[20px] h-6 w-full rounded-md bg-[#d1d5db]  animate-pulse"></p>

                    <p className="mt-[20px] h-6 w-full rounded-md bg-[#d1d5db]  animate-pulse"></p>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <BookList title="Latest releases" books={blogContent} />
          )}
        </div>

        <section className="lg:max-w-[1100px] md:w-full  m-auto  h-full md:mt-[100px]  rounded-[40px] box-shadow">
          <Subscription />
        </section>
        <section className="lg:max-w-[1100px] md:w-full px-5  m-auto  h-full md:mt-[100px]   mb-[50px]">
          {" "}
          <Tabs
            title="Read more from Little"
            books={books}
            loading={loading}
            setLoading={setLoading}
            setSelectedTab={setSelectedTab}
            categories={catgeoryContent}
          />
        </section>
      </Layout>
    </div>
  );
};
export async function getStaticProps() {
  const blogContent = await client.fetch(groq`
   *[
     _type == "blog"
     
   ] | order(publishedAt desc) [0...4]{
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
  const catgeoryContent = await client.fetch(groq`
    *[
      _type == "category"
    ] {
    title,
     }
     `);
  return {
    props: {
      blogContent,
      catgeoryContent,
    },
  };
}
export default Blog;
