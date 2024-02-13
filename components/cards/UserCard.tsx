import Image from 'next/image';
import RenderTag from '../shared/RenderTag';
import Link from 'next/link';

interface UserCardProps {
  _id: string;
  name: string;
  username: string;
  picture: string;
  topTags: { _id: string; name: string; count: number }[];
}

const UserCard = ({ _id, name, username, picture, topTags }: UserCardProps) => {
  return (
    <article
      className="card-wrapper flex w-[260px] flex-col items-center gap-5 rounded-[10px] px-7 py-[30px]"
      key={_id}
    >
      <Link href={`/profile/${_id}`} className=" flex flex-col items-center">
        <Image
          src={picture}
          alt={`${name} profile picture`}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
          {name}
        </h3>
        <p>@{username}</p>
      </Link>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {topTags &&
          topTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.count}
              showCount={false}
            />
          ))}
      </div>
    </article>
  );
};
export default UserCard;
