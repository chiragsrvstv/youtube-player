import React from "react";
import "./VideoItem.css";

const VideoItems = ({ video, onVideoSelect }) => {
  // video above is a destrucutured prop
  /* in below onClick: apart from invoking onVideoSelect we wanna pass specific video which is being clicked that is one made with this div so we use anon fn */

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItems;
