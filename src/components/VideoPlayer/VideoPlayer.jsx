import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  return (
    <video className="video-player" controls poster={props.imgSrc}></video>
  );
};

export default VideoPlayer;
