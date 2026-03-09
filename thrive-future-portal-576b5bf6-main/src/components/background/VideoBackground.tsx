
import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10"></div>
      <video
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "saturate(1.2) contrast(1.1)" }}
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/042/213/original/Students-Students-in-a-computer-class.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
