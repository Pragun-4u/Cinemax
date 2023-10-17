import React from "react";

const VideoCard = ({ id }) => {
  return (
    <iframe
      className="w-full h-auto md:h-auto  md:mx-1 aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        id +
        "?&showinfo=0&controls=0&autohide=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoCard;
