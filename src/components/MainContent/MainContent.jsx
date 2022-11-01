import VideoInfo from "../VideoInfo/VideoInfo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <VideoPlayer />
        <VideoInfo />
      </div>
    </section>
  );
};

export default MainContent;
