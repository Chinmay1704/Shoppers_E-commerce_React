import React from "react";
import "./Footer.css"
import FooterLogo from "../Assets/logo_big.png"
import InstagramIcon from "../Assets/instagram_icon.png"
import PininterestIcon from "../Assets/pintester_icon.png"
import WhatsappIcon from "../Assets/whatsapp_icon.png"

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={FooterLogo} alt="logo" />

                <p>SHOPPER</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={InstagramIcon} alt="insta icon" />
                </div>

                <div className="footer-icon-container">
                    <img src={PininterestIcon} alt="insta icon" />
                </div>

                <div className="footer-icon-container">
                    <img src={WhatsappIcon} alt="insta icon" />
                </div>
            </div>

            <div className="footer-copy-right">
                <hr />
                <p>Copyright &copy; 2023 - All rights reserve</p>
            </div>
        </div>
    );
}

export default Footer;