import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface StoryItemProps {
  id: number;
  username: string;
  avatar: StaticImageData | string;
}

function StoryItem({ id, username, avatar }: StoryItemProps) {
  return (
    <Link
      href={`/stories/${id}`}
      aria-label={`View ${username}'s story`}
      className="flex min-w-0 cursor-pointer flex-col items-center gap-1"
    >
      <div className="rounded-full bg-(image:--ig-gradient-close-friends) p-0.5">
        <div className="rounded-full bg-black p-0.5">
          <Image
            src={avatar}
            alt={`${username} story`}
            width={89}
            height={89}
            className="size-22.25 rounded-full object-cover"
          />
        </div>
      </div>

      <p className="w-full truncate text-center text-xs">{username}</p>
    </Link>
  );
}

export default StoryItem;