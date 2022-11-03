import CommentSection from "../CommentSection/CommentSection";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Aside from "../Aside/Aside";
import "./MainContent.scss";

const MainContent = (props) => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <VideoPlayer imgSrc={props.activeVideo.image} />
        <div className="main__lower">
          <div className="main__lower--left">
            <VideoInfo
              activeVideo={props.activeVideo}
              dateParser={props.dateParser}
            />
            <CommentSection
              activeVideo={props.activeVideo}
              dateParser={props.dateParser}
            />
          </div>
          <div className="main__lower--right">
            <Aside
              videos={props.videos}
              updateActiveVideo={props.updateActiveVideo}
              updateVideosArr={props.updateVideosArr}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
