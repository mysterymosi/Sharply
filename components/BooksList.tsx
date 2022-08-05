/* eslint-disable @next/next/no-img-element */
type BookListProps = {
  books: {
    name: string;
    link: string;
    image?: string;
  }[];
  title: string;
  download?: boolean;
};

export const BookList = ({ title, books, download }: BookListProps) => {
  return (
    <section className="flex flex-col flex-auto  md:px-5 pt-[80px] xl:max-w-[1040px] m-auto lg:pt-{200px]  bg-white">
      <h3 className="md:text-[34px] font-medium md:mb-[40px]">{title}</h3>
      <div className="grid grid-cols-4 gap-4">
        {books.map(({ name, link }, i) => (
          <div key={name} className="mb-[48px]">
            <img
              src={`${link}/id/${i}/200`}
              alt={name}
              className="lg:w-[250px] lg:h-[240px] rounded-[24px]"
            />
            {!download && (
              <p className=" text-[16px] leading-[24px] font-normal">
                June 20, 2022 - 5 mins read
              </p>
            )}
            <p className="mt-[20px] mb-[16px] font-medium md:text-[18px]">
              {name}
            </p>
            {download && (
              <p className="underline text-[16px] leading-[24px] font-normal">
                <a href={link} rel="noreferrer" target="_blank">
                  Download Book
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
