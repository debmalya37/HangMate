import logo from "../Images/TripMate.png";
import colorLogo from "../Images/HangMate-logo.jpeg";
import { Button } from "react-bootstrap"; // Import Button from 'react-bootstrap' instead of 'bootstrap'

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignup }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={minimal ? colorLogo : logo} alt="hangMate" className="logo" />
      </div>
      {!authToken && !minimal && (
        <Button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </Button>
      )}
    </nav>
  );
};

export default Nav;
