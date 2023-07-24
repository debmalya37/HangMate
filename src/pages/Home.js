import Nav from "../Components/Nav";
import AuthModal from "../Components/AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignup(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignup={setIsSignup}
      />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignup={isSignup} />
        )}
      </div>
    </div>
  );
};
export default Home;
