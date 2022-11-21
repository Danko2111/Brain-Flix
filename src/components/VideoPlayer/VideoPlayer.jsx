import "./VideoPlayer.scss";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { useRef } from "react";

const VideoPlayer = ({ activeVideo }) => {
  const videoElement = useRef(null);

  const {
    isPlaying,
    vidProgress,
    vidDuration,
    getVideoDuration,
    isMuted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    toggleFullscreen,
  } = useVideoPlayer(videoElement);

  setTimeout(() => {
    getVideoDuration();
  }, 50);

  return (
    <figure className="video-player__wrapper">
      <video
        className="video-player"
        poster={activeVideo.image}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      >
        <source src={activeVideo.video} type="video/mp4" />
      </video>
      <div className="video-player__controls" data-state="visible">
        {!isPlaying ? (
          <button
            type="button"
            onClick={togglePlay}
            className="video-player__play"
          ></button>
        ) : (
          <button
            type="button"
            onClick={togglePlay}
            className="video-player__pause"
          ></button>
        )}
        <div className="video-player__progress-wrapper">
          <p className="video-player__progress-time">{`${Math.floor(
            vidProgress / 10
          )} / ${vidDuration}`}</p>
          <input
            className="video-player__progress-bar"
            type="range"
            min="0"
            max="100"
            value={vidProgress}
            onChange={(e) => handleVideoProgress(e)}
          ></input>
        </div>
        {!isMuted ? (
          <button
            className="video-player__unmuted"
            type="button"
            onClick={toggleMute}
          ></button>
        ) : (
          <button
            className="video-player__muted"
            type="button"
            onClick={toggleMute}
          ></button>
        )}
        <button className="video-player__volup" type="button">
          +
        </button>
        <button className="video-player__voldown" type="button">
          -
        </button>
        <button
          className="video-player__fs"
          type="button"
          onClick={toggleFullscreen}
        ></button>
      </div>
    </figure>
  );
};

export default VideoPlayer;
