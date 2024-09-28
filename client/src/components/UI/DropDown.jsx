import { useState } from "react";
import PropTypes from "prop-types";

const DropDown = ({
  label,
  items,
  onSelect,
  buttonClassName,
  listClassName,
  itemClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-xs mx-auto my-4">
      <button
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 ${buttonClassName}`}
      >
        <span>{label}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul
          className={`absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10 ${listClassName}`}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className={`px-4 py-2 hover:bg-indigo-100 cursor-pointer text-gray-700 ${itemClassName}`}
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
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  buttonClassName: PropTypes.string, // Optional class for button customization
  listClassName: PropTypes.string, // Optional class for the dropdown list
  itemClassName: PropTypes.string, // Optional class for the dropdown items
};

DropDown.defaultProps = {
  buttonClassName: "", // Default to no extra classes
  listClassName: "", // Default to no extra classes
  itemClassName: "", // Default to no extra classes
};

export default DropDown;
