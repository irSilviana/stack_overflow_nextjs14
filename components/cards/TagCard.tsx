import Link from 'next/link';
interface TagCardProps {
  tag: {
    _id: string;
    name: string;
    description: string;
    questions: string;
  };
}
const TagCard = async ({ tag }: TagCardProps) => {
  const { _id, name, description, questions } = tag;

  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]">
      <article className="background-light900_dark200 light-border flex w-full flex-col items-start justify-start rounded-2xl border p-8">
        <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
          <Link
            href={`/tags/${_id}`}
            className="paragraph-semibold text-dark300_light900"
          >
            {name}
          </Link>
        </div>
        <p className="small-regular text-dark500_light700 mt-4">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
          dolore quia porro in ad sunt ipsa repudiandae dignissimos.
        </p>
        <p className="small-medium text-dark400_light500 mt-3.5">
          <span className="body-semibold primary-text-gradient mr-2.5">
            {questions.length}+
          </span>
          Questions
        </p>
      </article>
    </div>
  );
};
export default TagCard;
