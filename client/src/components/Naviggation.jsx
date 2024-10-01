import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "./UI/NavButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleNav = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  // Memoize the navigation handler to prevent re-creation
  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      setIsOpen(false); // Close the menu after navigation
    },
    [navigate]
  );

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
          <NavButton handleNavButtonClick={() => handleNavigation("/")}>
            Home
          </NavButton>
          <NavButton handleNavButtonClick={() => handleNavigation("/courses")}>
            My Courses
          </NavButton>

          <NavButton handleNavButtonClick={() => handleNavigation("/account")}>
            Account
          </NavButton>
          <NavButton handleNavButtonClick={() => handleNavigation("/contacts")}>
            Contact
          </NavButton>
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
          <NavButton handleNavButtonClick={() => handleNavigation("/")}>
            Home
          </NavButton>
          <NavButton handleNavButtonClick={() => handleNavigation("/courses")}>
            Courses
          </NavButton>

          <NavButton handleNavButtonClick={() => handleNavigation("/contact")}>
            Contact
          </NavButton>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
