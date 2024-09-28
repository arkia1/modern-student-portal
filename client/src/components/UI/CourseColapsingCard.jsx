import { Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const CourseCollapsingCard = ({ course }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div className="colapsing-card-container">
      <div className="flex-between-colapsing-card">
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
