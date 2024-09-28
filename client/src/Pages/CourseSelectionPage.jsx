import { useState } from "react";
import SearchBar from "../components/UI/SearchBar";
import DropDown from "../components/UI/DropDown";

const CourseSelectionPage = () => {
  const [query, setQuery] = useState("");
  const dropList_1 = ["item1", "item2", "item3"];

  const handleSelect = (item) => {
    console.log("Selected:", item);
  };

  return (
    <div className="p-4 space-y-6">
      <SearchBar
        placeholder={"Search for your courses"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={() => console.log("Searched")}
      />
      <DropDown
        label="Select an option"
        onSelect={handleSelect}
        items={dropList_1}
      />
      <DropDown
        label="select"
        onSelect={() => console.log("clicked")}
        items={["1", "2", "3"]}
      />
    </div>
  );
};

export default CourseSelectionPage;
