import "./contact.css";
import React, { useState } from 'react';
import { Modal } from './Modal';


export default function Contact() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    
    <div className="contact">
      <div className="title">
          Contact Me
        </div>

      <div>
            { show ? <div onClick={closeModalHandler} 
            className="back-drop"></div> : null }

            <button onClick={(x) => setShow(true)} 
        
            className="btn-openModal"
        
            >
              Open Modal
            </button>
          <Modal show={show} close={closeModalHandler} />
        </div>
        
        
        <br/>
        <div className="contactFormGroup1">
          <input
            className="contactInput"
            placeholder="whats your name"
            type="text"
            autoFocus={true}
          />
        </div>
        <br/>
        <div className="contactFormGroup2">
          <input
            className="contactInput"
            placeholder="whats your email"
            type="text"
            autoFocus={true}
          />
        </div>
        <br/>
        <div className="contactFormGroup3">
          <textarea
            className="contactInput contactText"
            placeholder="whats your inquiry..."
            type="text"
            autoFocus={true}
          />
        </div>
        
    </div>
  );
}
