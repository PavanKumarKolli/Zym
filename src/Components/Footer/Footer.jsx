import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaYoutube, FaMapMarkerAlt, FaPhone, FaMap } from 'react-icons/fa';



// Map height and width
const MapStyle = {
    width: "100%",
    height: "100%",
};



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="company-info">
                    <img src="https://beefit.in/logo.png" alt="Company Logo" className="company-logo" />
                    <ul className="contact-info">
                        <li><FaMapMarkerAlt /> A Wing, 1st Floor, Opposite to Ikea store, Aurobindo Galaxy Building, Hyderabad, Telangana 500081</li>
                        <li><FaPhone /> +91 9989999804</li>
                        <li><FaEnvelope /> <a href="mailto:enquiry@beefit.in">enquiry@beefit.in</a></li>
                        <li><FaMap /> <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">View on Map</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Use Links</h4>
                        <ul>
                           <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>CLASSES</li>
                            <li>SERVICES</li>
                            <li>OUR TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    {/* <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li>Login</li>
                            <li>My Account</li>
                            <li>Subscribe</li>
                        </ul>
                    </div> */}
                    <div className="footer-column">
                        <h4>Reach us</h4>
                        <div className="Contact-us-maps-location">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7-1-621/259,%206th%20Floor,%20Sahithi%20Arcade,%20Beside%20S.R.Nagar%20Traffic%20Police%20Station,%20Hyderabad-%20500038+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width={MapStyle.width}
                                height={MapStyle.height}
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Bee fit"
                            />
                        </div>
                    </div>
                </div>

            </div>
           
            <div className="footer-bottom">
                <div className="social-media">
                    <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
                {/* <hr id='hr' /> */}
                <div className="copyright">
                    <p>&copy;<b>Pavan Kolli</b>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
