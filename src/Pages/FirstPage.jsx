import AccountPreview from "../components/AccountPreview";
import MyCourses from "../components/MyCourses";
import NewsSection from "../components/NewsSection";

const FirstPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AccountPreview />
      <NewsSection />
      <MyCourses />
    </div>
  );
};

export default FirstPage;
