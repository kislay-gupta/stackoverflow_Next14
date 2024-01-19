import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";
export default async function Home() {
  const result = await getQuestions({});
  console.log(result.questions);
  // const questions = [
  //   {
  //     _id: "1",
  //     title: "Cascading Deletes in SQLAlchemy?",
  //     tags: [
  //       { _id: "1", name: "python" },
  //       { _id: "2", name: "SQL" },
  //     ],
  //     author: {
  //       _id: "3",
  //       name: "John Doe",
  //       picture: "url_to_picture",
  //     },
  //     upvotes: 10,
  //     views: 500000,
  //     answers: [],
  //     createdAt: new Date("2022-01-07"),
  //   },
  //   {
  //     _id: "2",
  //     title: "How to center a div?",
  //     tags: [
  //       { _id: "3", name: "HTML" },
  //       { _id: "4", name: "CSS" },
  //     ],
  //     author: {
  //       _id: "5",
  //       name: "Jane Doe",
  //       picture: "url_to_picture",
  //     },
  //     upvotes: 15,
  //     views: 150,
  //     answers: [],
  //     createdAt: new Date("2024-01-04"),
  //   },
  // ];
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient  min-h-[46px] px-4 py-3 !text-light-900">
            ask a question
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          placeholder="search for a question"
          imgSrc="/assets/icons/search.svg"
          otherClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClass="min-h-[56px] sm:min-w-[170px]"
          containerClass="hidden  max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.view}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title=" There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
