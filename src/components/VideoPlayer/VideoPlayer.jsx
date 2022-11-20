import "./VideoPlayer.scss";

const VideoPlayer = ({ activeVideo }) => {
  return (
    <figure className="video-player__wrapper">
      <video className="video-player" poster={activeVideo.image}>
        <source src={activeVideo.video} type="video/mp4" />
      </video>
      <div className="video-player__controls" data-state="visible">
        <button
          className="video-player__playpause"
          type="button"
          data-state="play"
        ></button>
        <div className="video-player__progress-wrapper">
          <progress className="video-player__progress" value="0" min="0">
            <span className="video-player__progress-bar"></span>
          </progress>
        </div>
        <button
          className="video-player__mute"
          type="button"
          data-state="muted"
        ></button>
        <button
          className="video-player__volup"
          type="button"
          data-state="volup"
        >
          +
        </button>
        <button
          className="video-player__voldown"
          type="button"
          data-state="voldown"
        >
          -
        </button>
        <button
          className="video-player__fs"
          type="button"
          data-state="go-fullscreen"
        ></button>
      </div>
    </figure>
  );
};

export default VideoPlayer;
