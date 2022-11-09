import CommentSection from "../../components/CommentSection/CommentSection";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Aside from "../../components/Aside/Aside";
import "./MainContent.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainContent = () => {
  const { id } = useParams();
  // declaring a state variable to keep track of the active video
  const [activeVideo, setActiveVideo] = useState(null);
  // declaring a state variable to keep track of the vidoes array
  const [videosArr, setVideosArr] = useState([]);
  // useEffect hook used to make an axios api call on page load and set the state var to the videos arr

  // calling the getvideo array func on page load
  useEffect(() => {
    getVideoList();
  }, []);

  // calling the video details func on url change
  useEffect(() => {
    // only calling it if there is a non default url
    if (id) {
      getVideoDetails(id);
    }
  }, [id]);

  // Func to make an axios get call for the video list array and set it as the state var, also setting a default video details state var
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
  // Func to make an axios get call for the video details obj and set it as the state var using the url params as the id in the api call.
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
  // Func that makes an axios post call sending the comment form data to the api
  const postComment = (id, content) => {
    const commentData = { name: "Placeholder", comment: content };
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=b7aa1069-7457-4ad5-927d-a2af1d03b5b6`,
        commentData
      )
      .then(() => {
        getVideoDetails(id);
      })
      .catch((err) => alert(err));
  };
  // Func that makes an axios delete call and removes a comment from the api server
  const delComment = (vidId, comId) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${vidId}/comments/${comId}?api_key=b7aa1069-7457-4ad5-927d-a2af1d03b5b6`
      )
      .then(() => {
        getVideoDetails(vidId);
      })
      .catch((err) => alert(err));
  };

  return (
    // terniary operator to only mount components if an active video obj is set to the state var
    <>
      {activeVideo ? (
        <section className="main">
          <div className="main__wrapper">
            <VideoPlayer imgSrc={activeVideo} />
            <div className="main__lower">
              <div className="main__lower--left">
                <VideoInfo activeVideo={activeVideo} />
                <CommentSection
                  activeVideo={activeVideo}
                  postComment={postComment}
                  delComment={delComment}
                />
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
