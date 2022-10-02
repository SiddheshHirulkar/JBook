import React, { useEffect } from 'react';
import { isNull } from 'lodash';
import { Link } from 'react-router-dom';

import './error-page.css';

const ErrorPage: React.FC = () => {
  const documentBodyNode = document.querySelector('body');
  const documentHtmlNode = document.querySelector('html');

  useEffect(() => {
    if (!isNull(documentBodyNode) && !isNull(documentHtmlNode)) {
      documentBodyNode.style.height = "100%";
      documentBodyNode.style.overflow = "hidden";
      documentHtmlNode.style.height = "100%";
      documentHtmlNode.style.overflow = "hidden";
    }

    return () => {
      if (!isNull(documentBodyNode) && !isNull(documentHtmlNode)) {
        documentBodyNode.style.removeProperty("height");
        documentBodyNode.style.removeProperty("overflow");
        documentHtmlNode.style.removeProperty("height");
        documentHtmlNode.style.removeProperty("overflow");
      }
    }
  }, [documentBodyNode, documentHtmlNode]);

  return (
    <div className="error-page-container">
        <header className="top-header">
      </header>

      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>


      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <section className="error">
        
        <div className="error__content">
          <div className="error__message">
            <h1 className="message__title">404, Page Not Found</h1>
            <p className="message__text">
              We can't find the page you're looking for.           
            </p>
          </div>
          <div className="error__nav e-nav">
            <Link to="/" className="e-nav__link" />
          </div>
        </div>


      </section>

    </div>
  );
}

export default ErrorPage;
