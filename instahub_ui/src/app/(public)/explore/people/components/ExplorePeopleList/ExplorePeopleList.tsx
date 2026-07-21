import { suggestedUsers } from '@/data/suggestion.data';
import ExplorePeopleItem from '../ExplorePeopleItem/ExplorePeopleItem';

function ExplorePeopleList() {
  return (
    <div className="flex flex-col pt-2">
      {suggestedUsers.map((user) => (
        <ExplorePeopleItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ExplorePeopleList;
