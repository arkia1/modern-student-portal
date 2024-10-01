import { Box, Collapse, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const CourseCollapsingCard = ({ course }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      bg="gray.100"
      w="full"
      mb={4}
      p={4}
    >
      <Text fontSize="lg" fontWeight="bold">
        {course.name}
      </Text>
      <Button size="sm" onClick={handleToggle} mt={2}>
        {show ? "Hide Details" : "Show Details"}
      </Button>
      <Collapse in={show} animateOpacity>
        <VStack spacing={2} mt={2}>
          <Text>Location: {course.location}</Text>
          <Text>Building: {course.room}</Text>
          <Text>Time: {course.time}</Text>
          <Text>Instructor: {course.instructor}</Text>
          {/* Add more course details as needed */}
        </VStack>
      </Collapse>
    </Box>
  );
};

CourseCollapsingCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCollapsingCard;
