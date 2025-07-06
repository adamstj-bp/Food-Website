import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            esse hic perspiciatis placeat magnam, eius quae modi quibusdam
            accusantium numquam quis veniam magni tempora, dignissimos fugit
            sapiente natus dolor harum inventore. Pariatur architecto recusandae
            aperiam ab possimus esse! Non nesciunt vel rerum, saepe commodi
            reprehenderit veniam quod. Eligendi, placeat ea.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy POlicy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-456-678-789</li>
            <li>contact@blackadamsdev.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ‡ BlackAdams.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
