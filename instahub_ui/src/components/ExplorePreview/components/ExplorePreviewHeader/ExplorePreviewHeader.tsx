import { SuggestedUser } from "@/data/suggestion.data";
import Image from "next/image";
import Link from "next/link";

interface ExplorePreviewHeaderProps {
  user: SuggestedUser;
}

function ExplorePreviewHeader({ user }: ExplorePreviewHeaderProps) {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
        <Image
          src={user.avatar}
          alt={`${user.username} avatar`}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <Link
          href={`/${user.username}`}
          className="block truncate text-sm font-semibold text-white"
        >
          {user.nickname}
        </Link>

        <p className="truncate text-sm text-neutral-300">
          {user.username}
        </p>
      </div>
    </div>
  );
}

export default ExplorePreviewHeader;