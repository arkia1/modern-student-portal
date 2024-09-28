import ContactCollapsingCard from "./UI/ContactCollapsingCard";

const dummyContacts = [
  {
    name: "John Doe",
    role: "Advisor",
    email: "johndoe@university.com",
    phone: "123-456-7890",
    office: "Room 201",
  },
  {
    name: "Jane Smith",
    role: "Dean of Department",
    email: "janesmith@university.com",
    phone: "987-654-3210",
    office: "Room 301",
  },
  {
    name: "Emily Johnson",
    role: "Teacher Assistant",
    email: "emilyjohnson@university.com",
    phone: "555-123-4567",
    office: "Room 102",
  },
];

const ImportantContacts = () => {
  return (
    <div className="container">
      <div className="card_1 hide-scrollbars">
        <h2 className="font-semibold text-lg mb-4 text-gray-700">
          Important Contacts
        </h2>
        {dummyContacts.map((contact, index) => (
          <ContactCollapsingCard key={index} contact={contact}>
            <div className="header mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {contact.name}
              </h3>
              <p className="text-gray-600">{contact.role}</p>
            </div>
            {/* Header inside each collapsing card */}
          </ContactCollapsingCard>
        ))}
      </div>
    </div>
  );
};

export default ImportantContacts;
