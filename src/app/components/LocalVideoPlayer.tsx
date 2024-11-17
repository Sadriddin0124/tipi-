import React from "react";

interface LocalVideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
}

const LocalVideoPlayer: React.FC<LocalVideoPlayerProps> = ({
  src,
  width = "100%",
  height = "auto",
  controls = true,
}) => {
  return (
    <video
      width={width}
      height={height}
      controls={controls}
      style={{ display: "block", margin: "0 auto" }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LocalVideoPlayer;
