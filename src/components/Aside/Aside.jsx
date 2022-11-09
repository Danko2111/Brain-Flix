import "./Aside.scss";
import Video from "../Video/Video";

const Aside = ({ videos, activeVideo }) => {
  return (
    <div className="videos">
      <p className="videos__title">next videos</p>
      <div className="vidoes__wrapper">
        {videos
          .filter((vid) => vid.id !== activeVideo.id)
          .map((video) => {
            return (
              <Video
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Aside;
