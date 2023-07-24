
import { useState } from "react";

const AuthModal = ({setShowModal, isSignup}) => {


  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email,password,confirmPassword);


// handleClick & handleSubmit section code 

  const handleClick = ()=> {
    setShowModal(false)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    try {
      if (isSignup && (password !== confirmPassword)) {
        setError("Password need to match!")
      } 
      console.log('make a post request to our database')
    } catch (error) {
      console.log(error);
    }
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
      { isSignup && <input type="Password"
      id="password-check"
      placeholder="Confirm Password"
      name="Password-check"
      required={true}
      onChange={(e) => setConfirmPassword(e.target.value)}
       />
       }
       <input className="secondary-button" type="submit" />
       <p>{error}</p>
    </form>
    <hr />
    <h2>GET IN NOW</h2>
    Auth Modal
  </div>)
};
export default AuthModal;
