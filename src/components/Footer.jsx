import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-background">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src="/zara_logo_white.png" alt="" />
          </div>
          <div className="footer-links">
            <a href="#insta">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#pinterest">Pintrest</a>
            <a href="#yt">Youtube</a>
            <a href="#vk">VK</a>
          </div>
          <div className="footer-seperator"></div>
          <div className="footer-privacy-poilicy">
            <a href="#policy">Privacy Policy</a> /{" "}
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
