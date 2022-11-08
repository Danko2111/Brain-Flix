import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./pages/MainContent/MainContent";
import Upload from "./pages/Upload/Upload";
import VideoDetails from "./assets/Data/video-details.json";
import Videos from "./assets/Data/videos.json";
// imported a date parser func from utilities
import { dateParser } from "./utilities/DateParser/DateParser";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                dateParser={dateParser}
                activeVideo={activeVideo}
                updateActiveVideo={updateActiveVideo}
                updateVideosArr={updateVideosArr}
                videos={videosArr}
              />
            }
          />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
