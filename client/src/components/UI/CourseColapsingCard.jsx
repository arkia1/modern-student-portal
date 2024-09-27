import { Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const CourseCollapsingCard = ({ course }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">
          {course.courseName}
        </h2>
        <p className="text-sm font-medium text-gray-600">
          Instructor: {course.instructor}
        </p>
      </div>
      <hr className="my-4" />
      <Collapse startingHeight={20} in={show}>
        <p>
          <strong>Credits:</strong> {course.credits}
        </p>
        <p>
          <strong>Semester:</strong> {course.semester}
        </p>
        <p>
          <strong>Schedule:</strong> {course.schedule.days.join(", ")}{" "}
          {course.schedule.time}
        </p>
        <p>
          <strong>Location:</strong> {course.location}
        </p>
        <p>{course.description}</p>
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </div>
  );
};

CourseCollapsingCard.propTypes = {
  course: PropTypes.shape({
    courseCode: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    semester: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    schedule: PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string).isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCollapsingCard;
