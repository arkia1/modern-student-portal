import NewsCollapsingCard from "./UI/NewsColapsingCard"; // Adjust the import path as needed

const NewsSection = () => {
  // Dummy data
  const newsItems = [
    {
      id: 1,
      title: "University Notice",
      date: "Posted on 22nd Oct 2022",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Important Announcement",
      date: "Posted on 1st Nov 2022",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      title: "Upcoming Event",
      date: "Posted on 5th Nov 2022",
      content:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, a venenatis lectus pharetra nec. Nam at nulla at nunc dignissim sodales.",
    },
  ];

  return (
    <div className="container">
      <div className="card_1 hide-scrollbars">
        <h2 className="font-semibold text-lg mb-4 text-gray-700">
          Whats New ?
        </h2>
        {newsItems.map((item) => (
          <NewsCollapsingCard
            key={item.id}
            title={item.title}
            date={item.date}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
