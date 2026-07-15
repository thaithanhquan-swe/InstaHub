interface PostCaptionProps {
  username: string;
  caption: string;
}

function PostCaption({ username, caption }: PostCaptionProps) {
  return (
    <div className="px-2 pt-2 pb-4 text-sm">
      <p>
        <span className="mr-1 font-semibold">{username}</span>
        <span>{caption}</span>
      </p>

      <button
        type="button"
        className="mt-2 cursor-pointer text-(--text-secondary)"
      >
        View all comments
      </button>
    </div>
  );
}

export default PostCaption;
