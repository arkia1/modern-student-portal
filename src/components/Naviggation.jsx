import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Naviggation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <div className="z-10">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-full md:hidden">
        <div className="text-xl">Brand</div>
        <button onClick={toggleNav} className="text-xl">
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl">Brand</div>
        <div className="space-x-4">
          <button onClick={() => handleNavigation("/")} className="button--nav">
            Home
          </button>
          <button
            onClick={() => handleNavigation("/courses")}
            className="button--nav"
          >
            Courses
          </button>
          <button
            onClick={() => handleNavigation("/time-table")}
            className="button--nav"
          >
            Time Table
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="button--nav"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Side Navigation */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-xl">Brand</div>
          <button onClick={toggleNav} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <button onClick={() => handleNavigation("/")} className="button--nav">
            Home
          </button>
          <button
            onClick={() => handleNavigation("/courses")}
            className="button--nav"
          >
            Course
          </button>
          <button
            onClick={() => handleNavigation("/time-table")}
            className="button--nav"
          >
            Time Table
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="button--nav"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Naviggation;
