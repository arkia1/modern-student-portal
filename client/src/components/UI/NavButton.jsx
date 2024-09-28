import PropTypes from "prop-types";
import { memo } from "react";

const NavButton = ({ children, handleNavButtonClick, ariaLabel }) => {
  return (
    <button
      onClick={handleNavButtonClick}
      className="button--nav"
      aria-label={ariaLabel || "Navigation Button"}
    >
      {children || "Click"}
    </button>
  );
};

NavButton.propTypes = {
  children: PropTypes.node,
  handleNavButtonClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

export default memo(NavButton); // Wrap with memo to prevent re-renders unless props change
