import UserCard from '@/components/cards/UserCard';
import NoResult from '@/components/home/NoResult';
import Filter from '@/components/shared/Filter';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import { UserFilters } from '@/constants/filters';
import { getAllUsers } from '@/lib/actions/user.action';

export default async function Community() {
  const result = await getAllUsers({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900"> All Users</h1>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search amazing minds here..."
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="max-md:flex"
        />
      </div>

      <div className="mt-10 flex w-full flex-row gap-6">
        {result.users.length > 0 ? (
          result.users.map((user) => (
            <UserCard
              key={user._id}
              _id={user._id}
              name={user.name}
              username={user.username}
              picture={user.picture}
              topTags={[
                { _id: '1', name: 'react', count: 2 },
                { _id: '2', name: 'javascript', count: 3 },
                { _id: '3', name: 'nodejs', count: 1 },
              ]}
            />
          ))
        ) : (
          <NoResult
            title="There's no user to show"
            description=" Be the first to break the silence! 🚀Be auser and kickstart the discussion. Our query could be the next big thing others learn from. Get involved! 💡"
            link="/sign-up"
            linkTitle="Sign Up"
          />
        )}
      </div>
    </>
  );
}
