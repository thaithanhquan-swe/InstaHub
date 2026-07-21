import { Search } from 'lucide-react';

function ExploreSearch() {
  return (
    <div className="mx-auto w-full max-w-164">
      <div className="flex h-10 items-center gap-3 rounded-full bg-[#26292d] px-4">
        <Search
          size={17}
          strokeWidth={2}
          className="shrink-0 text-(--text-secondary)"
        />

        <input
          type="text"
          placeholder="Search"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-(--text-secondary)"
        />
      </div>
    </div>
  );
}

export default ExploreSearch;
