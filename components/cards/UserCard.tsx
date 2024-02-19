import Image from 'next/image';
import RenderTag from '../shared/RenderTag';
import Link from 'next/link';
import { getTopInteractedTags } from '@/lib/actions/tag.action';
import { Badge } from '../ui/badge';

interface UserCardProps {
  user: {
    _id: string;
    ClerkId: string;
    name: string;
    username: string;
    picture: string;
  };
}

const UserCard = async ({ user }: UserCardProps) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]">
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Link href={`/profile/${user.username}`} className="">
          <Image
            src={user.picture}
            alt={`${user.name} profile picture`}
            width={100}
            height={100}
            className="mx-auto rounded-full object-contain"
          />

          <div className="mt-4 text-center">
            <h3 className="h3-bold text-dark200_light900 line-clamp-1">
              {user.name}
            </h3>
            <p className="body-regular text-dark500_light500 mt-2">
              @{user.username}
            </p>
          </div>
        </Link>

        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex justify-between gap-2">
              {interactedTags.map((tag) => (
                <RenderTag
                  key={tag._id}
                  _id={tag._id}
                  name={tag.name}
                  totalQuestions={0}
                  showCount={false}
                />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </div>
  );
};
export default UserCard;
