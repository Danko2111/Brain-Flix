import "./Video.scss";

const Video = (props) => {
  const clickHandler = () => {
    props.updateActiveVideo(props.id);
    props.updateVideosArr(props.id);
  };

  return (
    <div className="video" onClick={clickHandler}>
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
