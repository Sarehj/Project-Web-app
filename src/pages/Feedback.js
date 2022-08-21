import React, { useState } from "react";
import {db} from '../config/fire';
import './pages.css'

const Feedback = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
 
 

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({
        name: name,
        email:email,
        message: message
    })
    .then(() =>{
        alert('Message has been submitted 😉')
    })
    .catch(error =>{
        alert(error.message);
    });

    setName('');
    setEmail('');
    setMessage('');

  };


  return (
    <>
     <div className="cont">
		<form className="feedback" onSubmit={handleSubmit}>
		 
        <div>
            <label>Name</label>
			<div ></div>
            <input className="in" placeholder="name..." value={name} onChange={(e) => setName(e.target.value)} />
          </div> 
         
          <div>
            <label htmlFor="email">Email</label>
			<div></div>
            <input className="in" placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label >Message</label>
			<div></div>
            <textarea placeholder="message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
         
          <div className="input-field">
            <button className="Submit">SEND FEEDBACK</button>
          </div>
        </form>
      </div>
     
    </>
  );
};

export default Feedback;
