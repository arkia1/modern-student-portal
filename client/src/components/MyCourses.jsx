import CourseCollapsingCard from "./UI/CourseColapsingCard";

const studentCourses = [
  {
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    instructor: "Dr. Alice Johnson",
    credits: 3,
    semester: "Fall 2023",
    description:
      "An introduction to the basics of computer science, including programming, algorithms, and data structures.",
    schedule: {
      days: ["Monday", "Wednesday"],
      time: "10:00 AM - 11:30 AM",
    },
    location: "Building A, Room 101",
  },
  {
    courseCode: "MATH201",
    courseName: "Calculus I",
    instructor: "Prof. Robert Williams",
    credits: 4,
    semester: "Fall 2023",
    description:
      "A first course in calculus, covering limits, derivatives, integrals, and their applications.",
    schedule: {
      days: ["Tuesday", "Thursday"],
      time: "2:00 PM - 3:30 PM",
    },
    location: "Building B, Room 202",
  },
  {
    courseCode: "PHY102",
    courseName: "General Physics",
    instructor: "Dr. Emma Thompson",
    credits: 3,
    semester: "Fall 2023",
    description:
      "An introduction to classical mechanics, including Newton’s laws, work, energy, and momentum.",
    schedule: {
      days: ["Monday", "Wednesday", "Friday"],
      time: "9:00 AM - 10:00 AM",
    },
    location: "Building C, Room 303",
  },
];

const MyCourses = () => {
  return (
    <div className="container">
      <div className="card_1 hide-scrollbars">
        <h2 className="font-semibold text-lg mb-4 text-gray-700">My Courses</h2>
        {studentCourses.map((course) => (
          <CourseCollapsingCard key={course.courseCode} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
