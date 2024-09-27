const AcademicRecord = () => {
  const academicRecordData = [
    {
      semester: "2024-25 Fall",
      courses: [
        {
          courseCode: "CS101",
          courseName: "Introduction to Computer Science",
          credit: 3,
          midterm: 78,
          final: 85,
          gpa: 3.5,
        },
        {
          courseCode: "MATH202",
          courseName: "Calculus II",
          credit: 4,
          midterm: 82,
          final: 89,
          gpa: 3.8,
        },
      ],
      semesterGPA: 3.65,
    },
    {
      semester: "2023-24 Spring",
      courses: [
        {
          courseCode: "ENG103",
          courseName: "Academic Writing",
          credit: 2,
          midterm: 80,
          final: 90,
          gpa: 3.7,
        },
        {
          courseCode: "PHYS101",
          courseName: "General Physics I",
          credit: 3,
          midterm: 75,
          final: 83,
          gpa: 3.3,
        },
      ],
      semesterGPA: 3.5,
    },
  ];

  return (
    <div className="container">
      {/* Single card for all semesters */}
      <div className="card_1 hide-scrollbars overflow-y-auto max-h-96 p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Academic Record
        </h3>

        {/* Iterate through each semester */}
        {academicRecordData.map((record, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-md font-semibold text-gray-600 mb-2">
              {record.semester}
            </h4>

            <table className="w-full mt-2">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="p-2">Course Code</th>
                  <th className="p-2">Course Name</th>
                  <th className="p-2">Credit</th>
                  <th className="p-2">Midterm</th>
                  <th className="p-2">Final</th>
                  <th className="p-2">GPA</th>
                </tr>
              </thead>
              <tbody>
                {record.courses.map((course, courseIndex) => (
                  <tr key={courseIndex}>
                    <td className="p-2">{course.courseCode}</td>
                    <td className="p-2">{course.courseName}</td>
                    <td className="p-2">{course.credit}</td>
                    <td className="p-2">{course.midterm}</td>
                    <td className="p-2">{course.final}</td>
                    <td className="p-2">{course.gpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Semester GPA */}
            <div className="mt-2 text-right">
              <p className="font-semibold">
                Semester GPA: {record.semesterGPA}
              </p>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicRecord;
