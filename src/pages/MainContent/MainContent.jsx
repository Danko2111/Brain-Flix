import CommentSection from "../../components/CommentSection/CommentSection";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Aside from "../../components/Aside/Aside";
import "./MainContent.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainContent = ({ dateParser }) => {
  const { id } = useParams();
  // declaring a state variable to keep track of the active video
  const [activeVideo, setActiveVideo] = useState(null);
  // declaring a state variable to keep track of the vidoes array
  const [videosArr, setVideosArr] = useState([]);
  // useEffect hook used to make an axios api call on page load and set the state var to the videos arr

  useEffect(() => {
    getVideoList();
  }, []);

  useEffect(() => {
    if (id) {
      getVideoDetails(id);
    }
  }, [id]);

  const getVideoList = () => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=b7aa1069-7457-4ad5-927d-a2af1d03b5b6`
      )
      .then((res) => {
        setVideosArr(res.data);
        if (!id) {
          getVideoDetails(res.data[0].id);
        }
      })
      .catch((err) => alert(err));
  };
  // useEffect gook used to make an axios api call on page load and set the state var to the video where the url matches the video id
  const getVideoDetails = (id) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=b7aa1069-7457-4ad5-927d-a2af1d03b5b6`
      )
      .then((res) => {
        setActiveVideo(res.data);
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      {activeVideo ? (
        <section className="main">
          <div className="main__wrapper">
            <VideoPlayer imgSrc={activeVideo} />
            <div className="main__lower">
              <div className="main__lower--left">
                <VideoInfo activeVideo={activeVideo} />
                <CommentSection activeVideo={activeVideo} />
              </div>
              <div className="main__lower--right">
                <Aside videos={videosArr} activeVideo={activeVideo} />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default MainContent;