import AcademicRecord from "../components/AcademicRecord";
import AccountPreview from "../components/AccountPreview";
import ImportantContacts from "../components/ImportantContacts";
import MyCourses from "../components/MyCourses";
import NewsSection from "../components/NewsSection";
import Timetable from "../components/TimeTable";

const FirstPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AccountPreview />
      <NewsSection />
      <MyCourses />
      <AcademicRecord />
      <ImportantContacts />
      <Timetable />
    </div>
  );
};

export default FirstPage;
