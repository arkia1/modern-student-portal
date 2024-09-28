import { Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const ContactCollapsingCard = ({ contact, children }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div className="colapsing-card-container mb-4 shadow-lg rounded-lg">
      {/* Insert Header Section */}
      {children}

      <hr className="my-4" />
      <Collapse startingHeight={20} in={show}>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Office:</strong> {contact.office}
        </p>
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </div>
  );
};

ContactCollapsingCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node, // Accepting children for the header
};

export default ContactCollapsingCard;
