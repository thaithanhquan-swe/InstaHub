import Image, { StaticImageData } from "next/image";

interface StoryItemProps {
  username: string;
  avatar: StaticImageData | string;
}

function StoryItem({ username, avatar }: StoryItemProps) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1">
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
    </div>
  );
}

export default StoryItem;
