
import { useState } from "react";

const AuthModal = ({setShowModal}) => {


  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email,password,confirmPassword);


  const handleClick = ()=> {
    setShowModal(false)
  }


  const isSignup = false;

  const handleSubmit = (e)=> {
    e.preventDefault();
  }

  return (<div className="auth-modal">
    <div className="close-icon" onClick={handleClick}>⨂
    </div>
  <h2>{isSignup ? "CREATE ACCOUNT" : "LOG IN"}</h2>
  <p>By clicking the button below, you are agreeing to our terms and policy. </p>
    <form onSubmit={handleSubmit}>

      <input type="email"
      id="email"
      placeholder="Email Address"
      name="email"
      required={true}
      onChange={(e) => setEmail(e.target.value)}
       />
      <input type="password"
      id="password"
      placeholder="password"
      name="password"
      required={true}
      onChange={(e) => setPassword(e.target.value)}
       />
      <input type="Password"
      id="password-check"
      placeholder="Confirm Password"
      name="Password-check"
      required={true}
      onChange={(e) => setConfirmPassword(e.target.value)}
       />
       <input className="secondary-button" type="submit" />
       <p>{error}</p>
    </form>
    <hr />
    <h2>GET IN NOW</h2>
    Auth Modal
  </div>)
};
export default AuthModal;
