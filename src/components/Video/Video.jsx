import "./Video.scss";

const Video = (props) => {
  return (
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
  );
};

export default Video;
