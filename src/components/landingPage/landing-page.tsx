import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowDownLong, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { isNull } from 'lodash';
import { useHistory } from 'react-router';

import VideoPlayer from '../videoPlayer/video-player';
import Footer from '../Footer/footer';
import { useActions } from '../../hooks/use-actions';
import './landing-page.css';

const LandingPage: React.FC = () => {
  const documentHtmlNode = document.querySelector('html');
  const history = useHistory();
  const { storePageLocation } = useActions();

  useEffect(() => {
    if (!isNull(documentHtmlNode)) {
      documentHtmlNode.style.backgroundColor = "#201e1a";
      documentHtmlNode.style.scrollBehavior = "smooth";
    }
  }, [documentHtmlNode]);

  useEffect(() => {
    storePageLocation(history.location.pathname);
  }, [])

  const handleTryNow = () => {
    history.push('/cellList');
  };

  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-container">

        {/* ----------------------- Product Description --------------------------- */}
        <section className="product-description-wrapper">
          <h2 className="main-title margin-top-20">A Notebook For Programmers</h2>
          <div className="description-wrapper">
            <p className="description-text">
              CodeBook is a platform where developers can take notes of their coding concepts
              with real time compilation of their code
            </p>
            <p className="sub-description-text">
              It also supports Markdown
            </p>
            <div className="description-button-wrapper">
              <button onClick={handleTryNow} className="try-btn margin-right-10">
                Try now &nbsp;<FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
              <button className="sign-in-btn">Sign In &nbsp;<FontAwesomeIcon icon={faUserCircle} /></button>
            </div>
          </div>
        </section>

        <a className="see-more" href="#video-player-section">
          <div className="see-more-text">See More</div>
          <div>
            <FontAwesomeIcon className="see-more-icon" icon={faArrowDownLong} />
          </div>
        </a>

        {/* ------------------------------- Video Player ----------------------------------- */}
        <section className="video-player-wrapper" id="video-player-section">
          <VideoPlayer />
        </section>

        {/* ------------------------------- Markdown ---------------------------------------- */}
        <section className="markdown-wrapper">
          <h2 className="main-title">Other than JavaScript...?</h2>
          <h4 className="sub-title">We also have a complete markdown editor for you</h4>
          <div className="description-button-wrapper margin-top-10">
            <button className="try-markdown-btn">
              Try Mardown Editor &nbsp;<FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        </section>

      </div>
      {/* <section className="footer-wrapper"> */}
      <Footer />
      {/* </section> */}
    </div>
  );
}

export default LandingPage;
