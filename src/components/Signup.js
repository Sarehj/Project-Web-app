import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../store/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, name, lastname);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
        <div className="container">
        {error && <div class="alert">Error, please try again{error}</div>}
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text">Sign Up</h5>
          <div>
            <label htmlFor="email">Email</label>
            <div/>
            <input  placeholder="Your email.." type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div ></div>
            <input placeholder="Your password.." type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <div></div>
            <input placeholder="Your name.." id='firstName' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <div ></div>
            <input placeholder="Your lastname.." id='lastName' onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="input-field">
            <button className="signBtn">Sign Up</button>
          </div>
        </form>
        <div className="p-4 box mt-3 text-center">
        Already have an account? <Link className="links" to="/">Log In</Link>
      </div>
      </div>
    </>
  );
};

export default Signup;
