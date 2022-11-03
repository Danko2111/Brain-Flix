import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import VideoDetails from "./assets/Data/video-details.json";
import Videos from "./assets/Data/videos.json";
import { useState } from "react";
import { dateParser } from "./utilities/DateParser/DateParser";

function App() {
  const [activeVideo, setActiveVideo] = useState(VideoDetails[0]);
  const updateActiveVideo = (id) => {
    setActiveVideo(VideoDetails.find((video) => video.id === id));
  };

  let firstVidoesArr = Videos.filter(
    (video) => video.id !== VideoDetails[0].id
  );

  const [videosArr, setVideosArr] = useState(firstVidoesArr);
  const updateVideosArr = (id) => {
    setVideosArr(Videos.filter((video) => video.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <MainContent
        dateParser={dateParser}
        activeVideo={activeVideo}
        updateActiveVideo={updateActiveVideo}
        updateVideosArr={updateVideosArr}
        videos={videosArr}
      />
    </div>
  );
}

export default App;
