import { useState } from "react";
import SearchBar from "../components/UI/SearchBar";
import DropDown from "../components/UI/DropDown";
import { coursesData } from "../constants/courses"; // Assuming courses data is imported from a separate file

const CourseSelectionPage = () => {
  const [query, setQuery] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("All");

  const dropListSemesters = [
    "All",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
  ];

  // Handle selection of semester from dropdown
  const handleSelectSemester = (semester) => setSelectedSemester(semester);

  // Filter courses based on semester and query input
  const filteredCourses = coursesData.filter((course) => {
    const matchesSemester =
      selectedSemester === "All" || course.semester === selectedSemester;
    const matchesQuery =
      course.name.toLowerCase().includes(query.toLowerCase()) ||
      course.code.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase());
    return matchesSemester && matchesQuery;
  });

  return (
    <div className="p-4 space-y-6">
      {/* Search bar for filtering by name, code, instructor, etc. */}
      <SearchBar
        placeholder="Search for your courses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={() => console.log("Searched")}
      />

      {/* Dropdown for filtering by semester */}
      <DropDown
        label={`${
          selectedSemester === "All" ? "All" : `Semester ${selectedSemester}`
        } Courses`}
        onSelect={handleSelectSemester}
        items={dropListSemesters}
        className="mb-4 w-[200px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Common Courses Section */}
        <div className="h-screen w-full rounded-md bg-gray-100 overflow-y-auto hide-scrollbars">
          <div className="bg-gray-300 w-full h-[10%] flex items-center p-4">
            <div className="flex-grow flex justify-center items-center">
              <h2 className="text-gray-700 font-bold text-lg">
                Common Courses
              </h2>
            </div>
          </div>

          <div className="p-4 grid gap-4">
            {filteredCourses
              .filter((course) => !course.code.startsWith("CS")) // Filter for "Common Courses"
              .map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow-md p-4 rounded-md min-h-24 h-auto"
                >
                  <h3 className="text-lg font-bold">{course.name}</h3>
                  <p>{course.code}</p>
                  <p>{course.instructor}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Faculty Courses Section */}
        <div className="h-screen w-full rounded-md bg-gray-100 overflow-y-auto hide-scrollbars">
          <div className="bg-gray-300 w-full h-[10%] flex items-center p-4">
            <div className="flex-grow flex justify-center items-center">
              <h2 className="text-gray-700 font-bold text-lg">
                Faculty Courses
              </h2>
            </div>
          </div>

          <div className="p-4 grid gap-4">
            {filteredCourses
              .filter((course) => course.code.startsWith("CS")) // Filter for "Faculty Courses"
              .map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow-md p-4 rounded-md min-h-24 h-auto"
                >
                  <h3 className="text-lg font-bold">{course.name}</h3>
                  <p>{course.code}</p>
                  <p>{course.instructor}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelectionPage;
