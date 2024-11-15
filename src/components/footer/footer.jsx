import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-content">

                <h2>Looking for a destination?</h2>
                <p>Book your trip by clicking the button</p>
                <p>Working hours: Mon-Fri 9:00 AM - 6:00 PM</p>

                <button type="button" className="footer-btn">Book Now</button>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Travel All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
