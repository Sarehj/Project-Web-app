import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../store/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <>
     <div className="cont">
		    {error && <div class="alert">Error, please try again<div>{error}</div></div>}
		<form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text">Log In</h5>
		  <div>
            <label htmlFor="email">Email</label>
			<div placeholder="Your email.."></div>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
			<div placeholder="Your password.."></div>
            <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
          </div> 
          <div className="input-field">
            <button className="logBtn">Login</button>
          </div>
        </form>
        <div className="newAcc">
        Don't have an account? <Link className="links" to="/signup">Sign up</Link>
      </div>
      </div>
     
    </>
  );
};

export default Login;
