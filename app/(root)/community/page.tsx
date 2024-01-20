import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filter";
import { getAllUser } from "@/lib/actions/user.action";
import Link from "next/link";

const Page = async () => {
  const result = await getAllUser({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All User</h1>

      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          placeholder="search for amazing minds"
          imgSrc="/assets/icons/search.svg"
          otherClass="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClass="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users
            .toReversed()
            .map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>no user yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Join to be the first
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
