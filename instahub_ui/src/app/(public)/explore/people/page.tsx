import ExplorePeopleFooter from "./components/ExplorePeopleFooter/ExplorePeopleFooter";
import ExplorePeopleHeader from "./components/ExplorePeopleHeader/ExplorePeopleHeader";
import ExplorePeopleList from "./components/ExplorePeopleList/ExplorePeopleList";

function ExplorePeople() {
  return (
      <div className=" w-full max-w-150 ml-50 pt-15">
        <ExplorePeopleHeader />
        <ExplorePeopleList />
        <ExplorePeopleFooter />
      </div>
  );
}

export default ExplorePeople;