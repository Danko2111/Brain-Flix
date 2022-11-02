import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./VideoInfo.scss";

const VideoInfo = (props) => {
  const { title, channel, views, timestamp, likes, description } =
    props.activeVideo;

  return (
    <div className="video-info">
      <div className="video-info__title">
        <h2>{title}</h2>
      </div>
      <div className="video-info__stats">
        <p className="video-info__channel">{channel}</p>
        <div className="video-info__views">
          <img
            className="video-info__views-icon"
            src={viewsIcon}
            alt="views icon"
          ></img>
          <p className="video-info__views-text">{views}</p>
        </div>
        <p className="video-info__timestamp">{timestamp}</p>
        <div className="video-info__likes">
          <img
            className="video-info__likes-icon"
            src={likesIcon}
            alt="likes icon"
          ></img>
          <p className="video-info__likes-text">{likes}</p>
        </div>
      </div>
      <div className="video-info__desc">
        <p className="video-info__desc-text">{description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
