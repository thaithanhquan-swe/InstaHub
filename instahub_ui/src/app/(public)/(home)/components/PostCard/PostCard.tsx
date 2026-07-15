import PostHeader from "./components/PostHeader/PostHeader";
import PostMedia from "./components/PostMedia/PostMedia";
import PostActions from "./components/PostActions/PostActions";
import PostCaption from "./components/PostCaption/PostCaption";
import { Post } from "@/types/post.types";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="max-w-117.5 text-(--text-white)">
      <PostHeader author={post.author} createdAt={post.createdAt} />

      <PostMedia images={post.images} alt={`${post.author.username} post`} />

      <PostActions post={post} />

      <PostCaption username={post.author.username} caption={post.caption} />
    </article>
  );
}

export default PostCard;
