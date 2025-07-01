import React from 'react';
import './ContactPage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


// Map height and width
// const MapStyle = {
//     width: "100%",
//     height: "100%",
// };
export const ContactPage = () => {
    return (
        <><div className="Aboutus_backgroundimg_container">
            <h1 className="h1class">CONTACT US</h1>
        </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><FaMapMarkerAlt className="contact-icon" /> A Wing, 1st Floor, Opposite to Ikea store, Aurobindo Galaxy Building, Hyderabad, Telangana 500081</p>
                    <p><FaPhoneAlt className="contact-icon" /> +91 9989999804</p>
                    <p><FaEnvelope className="contact-icon" /> enquiry@beefit.in</p>
                </div>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" name="mobile" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="remarks">Remarks</label>
                            <textarea id="remarks" name="remarks" required></textarea>
                        </div>
                        <button className='contact-button' type="submit">Submit</button>
                    </form>
                </div>

               
            </div>
            
        </>
    );
};


