import "./Video.scss";
import { Link } from "react-router-dom";

const Video = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <div className="video">
        <div className="video--left">
          <img
            className="video__image"
            src={props.image}
            alt="video thumbnail"
          ></img>
        </div>
        <div className="video--right">
          <p className="video__title">{props.title}</p>
          <p className="video__channel">{props.channel}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
