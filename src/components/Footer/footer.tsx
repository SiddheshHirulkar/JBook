import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileContract, faLaptopCode, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer: React.FC = () => {
  const iconLinkedIn = faLinkedinIn as IconProp;
  const iconGithub = faGithub as IconProp;
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Code<span>Book</span>
          <FontAwesomeIcon className="footer-title-icon" icon={faLaptopCode} />
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </p>
        <p className="footer-company-name">Siddhesh Hirulkar © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faUserShield} /></i>
          <p><a href="#">Privacy Policy</a></p>
        </div>

        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faFileContract} /></i>
          <p><a href="#">Terms & Conditions</a></p>
        </div>

        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faEnvelope} /></i>
          <p><a href="mailto:hirulkarsiddhu@gmail.com">hirulkarsiddhu@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-company-about">
          <span>About</span>
          <p>
            My motivation behind the creation of this app is, <br />
            everyone makes notes, but no one likes to read them again. <br />
            So the next time you visit here, reading them will be fun.
          </p>
        </div>
        <div className="footer-icons">
          <a href="#"><FontAwesomeIcon icon={iconLinkedIn} /></a>
          <a href="#"><FontAwesomeIcon icon={iconGithub} /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
