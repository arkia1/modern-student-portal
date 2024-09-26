const dummyAccount = {
  name: "John Doe",
  email: "QpNn5@example.com",
  image: "https://i.pravatar.cc/300",
  studentNumber: "20245444",
  advisor: "Someone Random",
  currentSemester: "2024-25 fall semester",
  department: "Computer Science",
  graduationYear: "2026",
  enrollmentStatus: "Full-Time",
};

const AccountPreview = () => {
  return (
    <div className="card">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Account Overview
        </h3>
        <button className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-800 duration-300">
          Go to Account
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <img
          className="w-20 h-20 rounded-full"
          src={dummyAccount.image}
          alt={dummyAccount.name}
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {dummyAccount.name}
          </h2>
          <p className="text-sm font-medium text-gray-600">
            {dummyAccount.email}
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-gray-600 space-y-2">
        <p>
          <strong>Student Number:</strong> {dummyAccount.studentNumber}
        </p>
        <p>
          <strong>Advisor:</strong> {dummyAccount.advisor}
        </p>
        <p>
          <strong>Current Semester:</strong> {dummyAccount.currentSemester}
        </p>
        <p>
          <strong>Department:</strong> {dummyAccount.department}
        </p>
        <p>
          <strong>Graduation Year:</strong> {dummyAccount.graduationYear}
        </p>
        <p>
          <strong>Enrollment Status:</strong> {dummyAccount.enrollmentStatus}
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;
