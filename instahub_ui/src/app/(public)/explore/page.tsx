import ExploreGrid from "./components/ExploreGrid/ExploreGrid";
import ExploreSearch from "./components/ExploreSearch/ExploreSearch";

function ExplorePage() {
  return (
    <main className="min-h-screen bg-(--background-color) px-6 py-4 text-(--text-white)">
      <div className="mx-auto w-full max-w-293">
        <ExploreSearch />

        <div className="mt-6">
          <ExploreGrid />
        </div>
      </div>
    </main>
  );
}

export default ExplorePage;
