import "./VideoPlayer.scss";

const VideoPlayer = ({ imgSrc }) => {
  return (
    <video className="video-player" controls poster={imgSrc.image}></video>
  );
};

export default VideoPlayer;
