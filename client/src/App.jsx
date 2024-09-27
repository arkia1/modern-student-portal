import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Naviggation from "./components/Naviggation";
import FirstPage from "./Pages/FirstPage";
import CourseSelectionPage from "./Pages/CourseSelectionPage";
import TimeTablePage from "./Pages/TimeTablePage";

const App = () => {
  return (
    <>
      <Router>
        <div className="h-screen w-full ">
          <Naviggation />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/courses" element={<CourseSelectionPage />} />
              <Route path="/time-table" element={<TimeTablePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
