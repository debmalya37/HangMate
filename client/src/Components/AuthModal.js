import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthModal = ({ setShowModal, isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup && password !== confirmPassword) {
        setError("Password needs to match!");
        return;
      }

      console.log("posting", email, password);
      const response = await axios.post(
        `http://localhost:8000/${isSignup ? "signup" : "login"}`,
        {
          email,
          password,
        }
      );
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);
      const success = response.status === 201;

      if (success && isSignup) {
        navigate("/onboarding");
      }
      if (success && !isSignup) navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⨂
      </div>
      <h2>{isSignup ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking the button below, you are agreeing to our terms and policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            type="password"
            id="password-check"
            placeholder="Confirm Password"
            name="password-check"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button className="secondary-button" type="submit">
          Submit
        </button>
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET IN NOW</h2>
      Auth Modal
    </div>
  );
};

export default AuthModal;
