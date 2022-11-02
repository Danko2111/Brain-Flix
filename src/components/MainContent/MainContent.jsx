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
        <VideoInfo activeVideo={props.activeVideo} />
        <CommentSection activeVideo={props.activeVideo} />
        <Aside videos={props.videos} />
      </div>
    </section>
  );
};

export default MainContent;
