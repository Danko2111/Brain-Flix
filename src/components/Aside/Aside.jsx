import "./Aside.scss";
import Video from "../Video/Video";

const Aside = (props) => {
  return (
    <div className="videos">
      <p className="videos__title">next videos</p>
      <div className="vidoes__wrapper">
        {props.videos.map((video) => (
          <Video
            updateActiveVideo={props.updateActiveVideo}
            updateVideosArr={props.updateVideosArr}
            key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
          />
        ))}
      </div>
    </div>
  );
};

export default Aside;
