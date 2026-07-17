import explorePosts from "@/data/explore";
import ExploreItem from "../ExploreItem/ExploreItem";

function ExploreGrid() {
  return (
    <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-3 lg:grid-cols-4">
      {explorePosts.map((post) => (
        <ExploreItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ExploreGrid;
