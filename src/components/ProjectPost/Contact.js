import React from "react";
import usePostFormContext from "../../hook/usePostFormContext";

const Contact = () => {
    const { data, handleChange } = usePostFormContext();
    return (
    <section className="addproject">
      <div className="addpr-form-contact">
        <div className="addpr-welcome">
          <div className="addpr-welcome-txt">
            <img src="/images/logo-sm.png" className="logo-sm"></img>
            <span>
              We are excited to hear more about you! Please provide your contact
              information so that we can get in touch with you.
            </span>
          </div>
        </div>
        <div className="addpr-form-contact-input">
          <div>
            <span>Contact</span>
            <input
              required
              className="addpr-contact-input inputbar-long dec-txt"
              placeholder="Julia Anderson"
              value={data.contactName}
              name="contactName"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <span>Email</span>
            <input required
              className="addpr-contact-input inputbar-long dec-txt"
              type="email"
              placeholder="collaborationhub2023@collab.org"
              value={data.contactEmail}
              name="contactEmail"
              onChange={handleChange}
            ></input>
          </div>
          <div className="addpr-contact-mobile">
            <div className="addpr-contact-mobile-txt">
              <span>Mobile</span>
              <br></br>
              <i>*optional</i>
            </div>
            <input
              className="addpr-contact-input inputbar-long dec-txt"
              type="text"
              maxLength="20"
              placeholder="+1 (555) 555-5555"
              value={data.contactMobile}
              name="contactMobile"
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
