import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import VideoDetails from "./assets/Data/video-details.json";
import Videos from "./assets/Data/videos.json";
import { useState } from "react";
// imported a date parser func from utilities
import { dateParser } from "./utilities/DateParser/DateParser";

function App() {
  // declaring a state variable to keep track of the active video
  const [activeVideo, setActiveVideo] = useState(VideoDetails[0]);
  // func that sets the active video based on an ID arg
  const updateActiveVideo = (id) => {
    const newvid = VideoDetails.find((video) => video.id === id);
    setActiveVideo(newvid);
  };
  // filtering out the default video out of the videos array on load
  let firstVidoesArr = Videos.filter(
    (video) => video.id !== VideoDetails[0].id
  );

  // declaring a state variable to keep track of the vidoes array
  const [videosArr, setVideosArr] = useState(firstVidoesArr);
  // func that filters out the selected video by ID from the videos arary
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
