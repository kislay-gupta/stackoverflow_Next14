import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const RightSideBar = () => {
  const question = [
    {
      _id: "1",
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    { _id: "2", title: "How can an airconditioning machine exist?" },
    {
      _id: "3",
      title: "Interrogated every time crossing UK Border as citizen",
    },
    { _id: "4", title: "Low digit addition generator" },
    {
      _id: "5",
      title: "What is an example of 3 numbers that do not make up a vector?",
    },
  ];
  const tags = [
    {
      _id: "1",
      name: "Javascript",
      reqNo: "20152+",
    },
    {
      _id: "2",
      name: "Next.js",
      reqNo: "18493+",
    },
    {
      _id: "3",
      name: "React.js",
      reqNo: "16269+",
    },
    {
      _id: "4",
      name: "Node.js",
      reqNo: "15121+",
    },
    {
      _id: "5",
      name: "Python",
      reqNo: "14431+",
    },
    {
      _id: "6",
      name: "Microsoft Azure",
      reqNo: "9429+",
    },
    {
      _id: "7",
      name: "PostgreSql",
      reqNo: "9429+",
    },
    {
      _id: "8",
      name: "Machine Learning",
      reqNo: "9429+",
    },
  ];
  return (
    <>
      <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen shrink  flex-col    overflow-y-auto border-l p-6 pt-36  shadow-light-300 max-xl:hidden max-sm:hidden lg:w-[350px]   dark:shadow-none">
        <div className="flex flex-1 flex-col gap-6 ">
          <p className="h3-bold  text-dark300_light900">Top question</p>
          <div className="flex flex-col gap-[30px] ">
            {question.map((q, i) => {
              return (
                <>
                  <Link
                    key={i}
                    href={`/question/${q._id}`}
                    className="flex cursor-pointer items-center justify-between gap-7 "
                  >
                    <p className="body-medium   text-dark500_light700">
                      {q.title}{" "}
                    </p>
                    <Image
                      src="/assets/icons/chevron-right.svg"
                      className="invert-colors my-auto"
                      alt="icons"
                      width={20}
                      height={20}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-16 flex flex-1 flex-col gap-6 ">
          <h3 className="h3-bold  text-dark200_light900">Popular Tags</h3>
          <div className="flex  flex-col gap-4">
            {tags.map((tag, i) => {
              return (
                <>
                  <RenderTags
                    key={tag._id}
                    name={tag.name}
                    _id={tag._id}
                    question={tag.reqNo}
                    showCount
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RightSideBar;
