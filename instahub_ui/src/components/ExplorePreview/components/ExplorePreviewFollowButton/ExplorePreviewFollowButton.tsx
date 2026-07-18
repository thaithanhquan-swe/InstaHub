interface ExplorePreviewFollowButtonProps {
  isFollowing: boolean;
  onToggleFollow: () => void;
}

function ExplorePreviewFollowButton({
  isFollowing,
  onToggleFollow,
}: ExplorePreviewFollowButtonProps) {
  return (
    <div className="p-4">
      <button
        type="button"
        onClick={onToggleFollow}
        className={`w-full cursor-pointer rounded-lg py-2 text-sm font-semibold transition-colors ${
          isFollowing
            ? "bg-neutral-700 text-white hover:bg-neutral-600"
            : "bg-[#4f5df5] text-white hover:bg-[#4050ed]"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default ExplorePreviewFollowButton;