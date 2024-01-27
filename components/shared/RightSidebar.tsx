import Image from 'next/image';
import Link from 'next/link';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: '1',
      title:
        'Would it be appropriate to point out an error in another paper during a referee report?',
    },
    { _id: '2', title: 'How can an airconditioning machine exist?' },
    {
      _id: '3',
      title: 'What is an example of 3 numbers that do not make up a vector?',
    },
    {
      _id: 4,
      title:
        'Why we are being interrogated every time crossing UK Border as citizen?',
    },
  ];

  const popularTags = [
    { _id: '1', name: 'JavaScript', count: 20152 },
    { _id: '2', name: 'Next.JS', count: 85464 },
    { _id: '3', name: 'React.JS', count: 85464 },
    { _id: '4', name: 'TypeScript', count: 85464 },
  ];

  return (
    <section className=" light-border background-light900_dark200 custom-scrollbar sticky right-0  top-0 flex  flex-col gap-16 border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[360px]">
      <div className="flex flex-col gap-6">
        <h3 className=" h3-bold text-dark200_light900 ">Top Questions</h3>
        <div>
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="text-dark200_light900 mb-7 flex cursor-pointer flex-row items-start justify-between"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className=" h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.count}
              showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
