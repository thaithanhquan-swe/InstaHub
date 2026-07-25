import PostGridItem from '@/components/PostGridItem/PostGridItem';
import explorePosts from '@/data/explore';

function ExploreGrid() {
  return (
    <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-3 lg:grid-cols-4">
      {explorePosts.map((post) => (
        <PostGridItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ExploreGrid;
