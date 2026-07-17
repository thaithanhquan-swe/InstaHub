import { suggestedUsers } from "@/data/suggestion.data";
import CurrentUserCard from "./components/CurrentUserCard/CurrentUserCard";
import SuggestionItem from "./components/SuggestionItem/SuggestionItem";
import SuggestionFooter from "./components/SuggestionFooter/SuggestionFooter";
import { images } from "@/assets/images";

function SuggestionList() {
  return (
    <aside className="mt-9 w-full max-w-90 pl-16">
      <CurrentUserCard
        username="quan.thai_"
        fullName="Quân Thái"
        avatar={images.loginPreview}
      />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#f5f5f5]">
          Suggested for you
        </h2>

        <button
          type="button"
          className="cursor-pointer text-xs font-semibold text-(--text-white) transition-colors hover:text-[#a8a8a8]"
        >
          See all
        </button>
      </div>

      <div className="space-y-4">
        {suggestedUsers.map(({ id, ...user }) => (
          <SuggestionItem key={id} {...user} />
        ))}
      </div>

      <SuggestionFooter />
    </aside>
  );
}

export default SuggestionList;
