import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ id, image, title, channel, colorMode }) => {
  return (
    <Link to={`/${id}`}>
      <div className="video">
        <div className="video--left">
          <img className="video__image" src={image} alt="video thumbnail"></img>
        </div>
        <div className="video--right">
          <p className={`video__title ${colorMode}`}>{title}</p>
          <p className={`video__channel ${colorMode}`}>{channel}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
