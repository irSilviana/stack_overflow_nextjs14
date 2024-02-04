import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/home/NoResult';
import QuestionCard from '@/components/cards/QuestionCard';
import Filter from '@/components/shared/Filter';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';

import Link from 'next/link';

const questions = [
  {
    _id: '1',
    title:
      'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
    tags: [
      { _id: '1', name: 'JavaScript', count: 10 },
      { _id: '2', name: 'Next.JS', count: 5 },
      { _id: '3', name: 'React.JS', count: 7 },
      { _id: '4', name: 'TypeScript', count: 3 },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 15780000000,
    answers: [
      { text: 'Answer 1', author: 'Author 1' },
      { text: 'Answer 2', author: 'Author 2' },
      { text: 'Answer 3', author: 'Author 3' },
    ],
    views: 568548645,
    createdAt: new Date('2023-08-01'),
  },
  {
    _id: '2',
    title: 'How to center a div? I have a div that contains other elements',
    tags: [
      { _id: '1', name: 'CSS', count: 10 },
      { _id: '2', name: 'HTML', count: 5 },
      { _id: '3', name: 'JavaScript', count: 7 },
    ],
    author: {
      _id: '2',
      name: 'Mike Smith',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 11,
    answers: [
      { text: 'Answer 1', author: 'Author 1' },
      { text: 'Answer 2', author: 'Author 2' },
    ],
    views: 82,
    createdAt: new Date('2024-01-01'),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900"> All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};
export default Home;
