// src/components/Contact.jsx
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="preload-wrapper">
      {/* -------- Header -------- */}
      
      {/* -------- Contact Section -------- */}
      <section className="flat-spacing">
        <div className="container">
          <div className="contact-us-content">
            <div className="left">
              <h4>Get In Touch</h4>
              <p className="text-secondary-2">Use the form below to get in touch with the sales team</p>
              <form id="contactform" method="post" className="form-leave-comment">
                <div className="wrap">
                  <div className="cols">
                    <fieldset>
                      <input type="text" placeholder="Your Name*" name="name" required />
                    </fieldset>
                    <fieldset>
                      <input type="email" placeholder="Your Email*" name="email" required />
                    </fieldset>
                  </div>
                  <fieldset>
                    <textarea name="message" rows="4" placeholder="Your Message*" required></textarea>
                  </fieldset>
                </div>
                <div className="button-submit send-wrap">
                  <button className="tf-btn btn-fill" type="submit">
                    <span className="text text-button">Send message</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="right">
  <h4>Information</h4>

  <div className="mb_20">
    <div className="text-title text1 mb_8">Phone:</div>
    <p className="text-secondary-3">+971-582169786</p>
  </div>

  <div className="mb_20">
    <div className="text-title text1 mb_8">Email:</div>
    <p className="text-secondary-3">mail@royalfalcongroup.com</p>
  </div>

  <div className="mb_20">
    <div className="text-title text1 mb_8">Address:</div>
    <p className="text-secondary-3">549 Oak St.Crystal Lake, IL 60014</p>
  </div>

  <div>
    <div className="text-title text1 mb_8">Open Time:</div>
    <p className="mb_4 open-time">
      <span className="text-secondary-3">Mon - Sat:</span> 7:30am - 8:00pm PST
    </p>
    <p className="open-time">
      <span className="text-secondary-3">Sunday:</span> 9:00am - 5:00pm PST
    </p>
  </div>
</div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Contact;