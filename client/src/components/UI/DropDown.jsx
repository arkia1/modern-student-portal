import { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io"; // Import arrow icon

const DropDown = ({ label, items, onSelect, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${className}`}>
      {" "}
      {/* Adjusted width to half */}
      {/* Label Button */}
      <button
        onClick={toggleDropDown}
        className="bg-gray-700 text-white px-4 py-2 rounded flex items-center justify-between w-full text-left"
      >
        {label}
        <IoIosArrowDown className="ml-2 text-white" /> {/* Arrow Icon */}
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute mt-2 bg-white border rounded shadow-lg w-full z-10">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DropDown;
