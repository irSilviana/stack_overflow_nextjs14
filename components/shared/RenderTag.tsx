import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface TagProps {
  _id: string;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: TagProps) => {
  return (
    <Link key={_id} href={`/tags/${_id}`} className="flex-between gap-2">
      <Badge
        variant="outline"
        className="subtle-medium background-light800_dark300 rounded-md border-none px-4 py-2 uppercase text-light-400"
      >
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};
export default RenderTag;
