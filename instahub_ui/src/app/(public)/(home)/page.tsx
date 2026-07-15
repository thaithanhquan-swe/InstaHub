import { posts } from "@/data/post";
import PostCard from "./components/PostCard/PostCard";
import StoryList from "./components/StoryList/StoryList";
import SuggestionList from "./components/SuggestionList/SuggestionList";

function HomePage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <StoryList />
        <div className="flex flex-col items-center gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="col-span-6">
        <SuggestionList />
      </div>
    </div>
  );
}
export default HomePage;
