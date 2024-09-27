import { Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const NewsCollapsingCard = ({ title, date, content }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm font-medium text-gray-600">{date}</p>
      </div>
      <hr className="my-4" />
      <Collapse startingHeight={20} in={show}>
        <p className="text-gray-600">{content}</p>
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </div>
  );
};

NewsCollapsingCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsCollapsingCard;
