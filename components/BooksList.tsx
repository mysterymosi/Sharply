import Link from "next/link";
import { BookGridProps, BookListProps } from "../types";
import { EnterFromLeft, FadeInWhenVisible } from "../utils";

/* eslint-disable @next/next/no-img-element */

export const BookGrid = ({ books, download }: BookGridProps) => {
  return books?.length > 0 ? (
    <div className="md:grid md:grid-cols-4 flex  flex-row overflow-x-scroll gap-4 ">
      {books.map(
        ({ title, estimatedReadingTime, slug, image, publishedAt, _id }, i) => (
          <div key={i} className="mb-[48px] min-w-[240px] ">
            <FadeInWhenVisible>
              <img
                src={image}
                alt={title}
                className="lg:w-[250px] object-cover lg:h-[240px] rounded-[24px]"
              />
              {!download && publishedAt && (
                <>
                  <p className=" lg:mt-[20px] font-grey mt-[8px] text-[16px] leading-[24px] font-medium">
                    {new Date(publishedAt).toDateString() ?? "Today"} -{" "}
                    {estimatedReadingTime} mins
                  </p>
                  <Link
                    href={`/blog/${slug?.current}`}
                    passHref
                    as={`/blog/${slug?.current}`}>
                    <p className="mt-[20px] hover:underline cursor-pointer mb-[16px] font-semibold md:text-[18px]">
                      {title}
                    </p>
                  </Link>
                </>
              )}
              {download && (
                <p className="mt-[20px] cursor-pointer mb-[16px] font-medium md:text-[18px]">
                  {title}
                </p>
              )}

              {download && (
                <p className="underline text-[16px] cursor-pointer leading-[24px] font-medium">
                  <a href={slug?.current} rel="noreferrer" target="_blank">
                    Download Book
                  </a>
                </p>
              )}
            </FadeInWhenVisible>
          </div>
        )
      )}
    </div>
  ) : (
    <p>Nothing to see here, check back later</p>
  );
};

export const BookList = ({ title, books, download }: BookListProps) => {
  return (
    <section className="flex flex-col flex-auto md:px-0 px-[23px] pt-[80px] xl:max-w-[1100px] m-auto lg:pt-{200px]  ">
      <EnterFromLeft>
        <h3 className="md:text-[34px] text-[20px] font-semibold mb-[40px]">
          {title}
        </h3>
      </EnterFromLeft>
      <BookGrid books={books} download={download} />
    </section>
  );
};
