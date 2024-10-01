import { useState } from "react";
import { Box, Collapse, Text } from "@chakra-ui/react";
import { timetableData } from "../constants/timetableData"; // Assuming this is the dummy data

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleToggle = (day) => {
    setSelectedDay((prev) => (prev === day ? null : day));
  };

  return (
    <Box
      className="timetable"
      w="100%"
      h="auto"
      bg="gray.100"
      p="4"
      rounded="md"
    >
      {timetableData.map((dayData) => (
        <Box
          key={dayData.day}
          mb="4"
          bg="white"
          rounded="md"
          shadow="md"
          overflow="hidden"
        >
          <Box
            onClick={() => handleToggle(dayData.day)}
            bg="gray.300"
            py="4"
            textAlign="center"
            cursor="pointer"
          >
            <Text fontSize="lg" fontWeight="bold">
              {dayData.day}
            </Text>
          </Box>
          <Collapse in={selectedDay === dayData.day}>
            <Box p="4">
              {dayData.courses.map((course, index) => (
                <Box key={index} mb="2">
                  <Text fontWeight="bold">{course.name}</Text>
                  <Text>{course.location}</Text>
                  <Text>{course.building}</Text>
                  <Text>{course.room}</Text>
                  <Text>{course.time}</Text>
                  <Text>{course.instructor}</Text>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default Timetable;
