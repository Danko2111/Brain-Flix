import "./App.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import VideoDetails from "./assets/Data/video-details.json";
import Vidoes from "./assets/Data/videos.json";
import { useState } from "react";

function App() {
  const [activeVideo, setActiveVideo] = useState(VideoDetails[0]);

  return (
    <div className="App">
      <Header />
      <MainContent activeVideo={activeVideo} videos={Vidoes} />
    </div>
  );
}

export default App;
