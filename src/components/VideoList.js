import React from "react";
import VideoItem from "./VideoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  // can refer videos being passed as props as: {videos} or props.videos
  const renderedList = videos.map(vid => {
    return <VideoItem key={vid.id.videoId} video={vid} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed divided list"> {renderedList} </div>;
};

export default VideoList;
