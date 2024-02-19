import TagCard from '@/components/cards/TagCard';
import NoResult from '@/components/home/NoResult';
import Filter from '@/components/shared/Filter';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import { TagFilters } from '@/constants/filters';
import { getAllTags } from '@/lib/actions/tag.action';

export default async function Tags() {
  const result = await getAllTags({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name..."
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] "
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => <TagCard key={tag._id} tag={tag} />)
        ) : (
          <NoResult
            title="There's no tag to show"
            description="Be the first to break the silence! 🚀Be a user and kickstart the discussion. Our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  );
}
