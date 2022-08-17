import { Tab } from "@headlessui/react";
import { TabsProps } from "../types";
import { BookGrid } from "./BooksList";
import { Spinner } from "./Spinner";

export default function Tabs({
  books,
  categories,
  setSelectedTab,
  loading,
  setLoading,
  title,
}: TabsProps) {
  let blogCategories = [{ title: "All Articles" }, ...categories];
  return (
    <div className=" px-2 py-16 sm:px-0 ">
      <p className="mt-[20px]  mb-[16px] font-semibold  md:text-[30px] text-[20px]">
        {title}
      </p>
      <Tab.Group>
        <Tab.List className="flex overflow-x-auto">
          {blogCategories.map(({ title }, i) => (
            <Tab
              onClick={() => {
                setLoading(true);
                setSelectedTab(title);
              }}
              key={i}
              className={` w-fit focus:outline-none ml-[20px] lg:ml-0 `}>
              {({ selected }) => (
                <div
                  className={`lg:pr-[54px] rounded-full  lg:rounded-none lg:border-b-[2px] lg:border-0  
                   lg:border- white3
                   border-[1.5px]  border-white4 
                   ${
                     selected
                       ? "bg-primary lg:bg-[rgba(249,242,180,0.1)] lg:text-black text-white "
                       : ""
                   }
                   `}>
                  <p
                    className={`lg:py-2.5 px-[18px] lg:px-0 py-[8px]  text-sm lg:font-medium leading-5 text-start whitespace-nowrap 
                    text-[12px] lg:text-[15px] ${
                      selected ? "font-semibold " : ""
                    }
                 `}>
                    {title}
                  </p>
                  {selected && (
                    <div className="lg:border-b-[2px] lg:border-[#87C24C]"></div>
                  )}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 flex h-full lg:min-h-[300px] justify-center items-center">
          {blogCategories.map((_, idx) => (
            <Tab.Panel key={idx + 1} className={"mt-[20px]"}>
              {loading ? <Spinner /> : <BookGrid books={books} />}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
