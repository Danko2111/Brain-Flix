import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./VideoInfo.scss";

const VideoInfo = (props) => {
  return (
    <div className="video-info">
      <div className="video-info__title">
        <h2>BMX Rampage: 2021 Highlights</h2>
      </div>
      <div className="video-info__stats">
        <p className="video-info__channel">By Red Crow</p>
        <div className="video-info__views">
          <img
            className="video-info__views-icon"
            src={viewsIcon}
            alt="views icon"
          ></img>
          <p className="video-info__views-text">1,001,023</p>
        </div>
        <p className="video-info__timestamp">07/11/2021</p>
        <div className="video-info__likes">
          <img
            className="video-info__likes-icon"
            src={likesIcon}
            alt="likes icon"
          ></img>
          <p className="video-info__likes-text">110,985</p>
        </div>
      </div>
      <div className="video-info__desc">
        <p className="video-info__desc-text">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
