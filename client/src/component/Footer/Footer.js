import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>© 2022 BBVS

        </p>
        <p>
          {/* Made with <i className="fas fa-heartbeat" /> by{" "} */}
          <a
            className="profile"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blockchain Based Voting System
          </a>

        </p>
      </div>
    </div>
  </>
);

export default Footer;
