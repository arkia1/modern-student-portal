import { useState } from "react";
import PropTypes from "prop-types";
import { timetableData } from "../constants/timetableData";

const TimetableCard = ({ day, courses, isOpen, toggleCard }) => {
  return (
    <div className="w-full">
      {/* Header showing day */}
      <div
        onClick={toggleCard}
        className={`cursor-pointer bg-gray-300 py-4 text-center text-xl font-semibold rounded-t-lg transition-all duration-300 ${
          isOpen ? "bg-gray-500 text-white" : ""
        }`}
      >
        {day}
      </div>
      {/* Courses details */}
      <div
        className={`transition-all duration-300 bg-white p-4 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {courses.map((course, idx) => (
          <div key={idx} className="p-2 mb-4 border-b border-gray-200">
            <h3 className="font-bold text-lg">{course.name}</h3>
            <p>Location: {course.location}</p>
            <p>Building: {course.building}</p>
            <p>Room: {course.room}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Time: {course.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TimetableCard.propTypes = {
  day: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      building: PropTypes.string.isRequired,
      room: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleCard: PropTypes.func.isRequired,
};

const Timetable = () => {
  const [openDay, setOpenDay] = useState(null);

  const toggleCard = (day) => {
    setOpenDay((prevDay) => (prevDay === day ? null : day));
  };

  return (
    <div className="w-full h-[600px] overflow-y-auto space-y-4 bg-gray-100 rounded-lg p-4 shadow-md">
      {timetableData.map((dayData) => (
        <TimetableCard
          key={dayData.day}
          day={dayData.day}
          courses={dayData.courses}
          isOpen={openDay === dayData.day}
          toggleCard={() => toggleCard(dayData.day)}
        />
      ))}
    </div>
  );
};

export default Timetable;
