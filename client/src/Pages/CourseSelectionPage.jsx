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
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-4 gap-6">
        <div className="h-screen w-full rounded-md bg-gray-100 overflow-y-auto flex">
          <div className="bg-gray-300 w-full rounded-top-md h-[10%] flex items-center">
            {/* Dropdown placed on the left */}
            <DropDown
              label="Filter"
              onSelect={handleSelect}
              items={dropList_1}
              className="ml-4"
            />
            {/* Center the text vertically */}
            <div className="flex-grow flex justify-center items-center">
              <h2 className="text-gray-700 font-bold text-lg text-center">
                Common Courses
              </h2>
            </div>
          </div>
        </div>
        <div className="h-screen w-full rounded-md bg-gray-100 overflow-y-auto flex"></div>
      </div>
    </div>
  );
};

export default CourseSelectionPage;
