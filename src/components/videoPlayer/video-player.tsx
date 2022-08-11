import React from 'react';

import './video-player.css';

const VideoPlayer: React.FC = () => {
  return (
    <div className="player-component-wrapper">
      <div className="player-text-wrapper">
        <h2 className="player-text-heading">
          Compile JavaScript in run time and get the results
        </h2>
        <p className="player-text-paragraph">
          The JavaScript code written in the code cell will be compiled 
          and the results will be shown in the adjacent DOM pane.
        </p>
        <p className="player-text-paragraph">
          The text cell is a dynamic markdown cell.
        </p>
      </div>

      <div className="player-wrapper">
        <video className="video-player" autoPlay loop muted>
          <source src="videos/video-lake.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoPlayer;
