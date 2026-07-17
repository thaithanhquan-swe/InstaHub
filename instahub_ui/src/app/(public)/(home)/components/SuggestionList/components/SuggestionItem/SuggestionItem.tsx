import { SuggestedUser } from "@/data/suggestion.data";
import Image from "next/image";

type SuggestionItemProps = Omit<SuggestedUser, "id">;

function VerifiedIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-label="Verified"
      className="size-3.5 shrink-0 fill-[#0095f6]"
    >
      <path d="M19.998 3.568l4.173 2.135 4.62-.553 2.136 4.173 4.173 2.136-.553 4.62 2.135 4.173-2.135 4.173.553 4.62-4.173 2.136-2.136 4.173-4.62-.553-4.173 2.135-4.173-2.135-4.62.553-2.136-4.173-4.173-2.136.553-4.62L3.568 20l2.135-4.173-.553-4.62 4.173-2.136 2.136-4.173 4.62.553L20 3.568zm-2.05 22.257l9.04-9.039-1.414-1.414-7.626 7.626-3.536-3.536-1.414 1.414 4.95 4.95z" />
    </svg>
  );
}

function FollowedBy({
  usernames,
  avatars,
}: NonNullable<SuggestedUser["followedBy"]>) {
  return (
    <div className="flex min-w-0 items-center gap-1">
      <div className="flex shrink-0 items-center">
        {avatars.slice(0, 2).map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt=""
            width={14}
            height={14}
            className={[
              "size-3.5 rounded-full border border-[#0c1014] object-cover",
              index > 0 ? "-ml-1" : "",
            ].join(" ")}
          />
        ))}
      </div>

      <p className="truncate text-xs text-[#a8a8a8]">Followed by {usernames}</p>
    </div>
  );
}

function SuggestionItem({
  username,
  avatar,
  verified = false,
  suggestedText,
  followedBy,
}: SuggestionItemProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={avatar}
          alt={`${username} avatar`}
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <p className="truncate text-sm font-semibold text-(--text-white)">
              {username}
            </p>

            {verified && <VerifiedIcon />}
          </div>

          {followedBy ? (
            <FollowedBy {...followedBy} />
          ) : (
            <p className="truncate text-xs text-[#a8a8a8]">{suggestedText}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        className="shrink-0 cursor-pointer text-xs font-semibold text-[#7595ff] transition-colors hover:text-[#8b9ede]"
      >
        Follow
      </button>
    </div>
  );
}

export default SuggestionItem;
