import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileContract, faLaptopCode, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
          <Link to="#" className="link-1">Home</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Contact</Link>
          <Link to="#">FAQ</Link>
        </p>
        <p className="footer-company-name">Siddhesh Hirulkar © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faUserShield} /></i>
          <p><Link to="#">Privacy Policy</Link></p>
        </div>

        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faFileContract} /></i>
          <p><Link to="#">Terms & Conditions</Link></p>
        </div>

        <div>
          <i className="footer-center-icon"><FontAwesomeIcon icon={faEnvelope} /></i>
          <p><Link to="mailto:hirulkarsiddhu@gmail.com">hirulkarsiddhu@gmail.com</Link></p>
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
          <Link to="#"><FontAwesomeIcon icon={iconLinkedIn} /></Link>
          <Link to="#"><FontAwesomeIcon icon={iconGithub} /></Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
