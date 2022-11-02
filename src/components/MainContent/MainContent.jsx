import CommentSection from "../CommentSection/CommentSection";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Aside from "../Aside/Aside";
import "./MainContent.scss";
import { dateParser } from "../../utilities/DateParser/DateParser";

const MainContent = (props) => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <VideoPlayer imgSrc={props.activeVideo.image} />
        <VideoInfo activeVideo={props.activeVideo} dateParser={dateParser} />
        <CommentSection
          activeVideo={props.activeVideo}
          dateParser={dateParser}
        />
        <Aside
          videos={props.videos}
          updateActiveVideo={props.updateActiveVideo}
          updateVideosArr={props.updateVideosArr}
        />
      </div>
    </section>
  );
};

export default MainContent;
