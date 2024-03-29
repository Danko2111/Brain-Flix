import CommentSection from "../../components/CommentSection/CommentSection";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Aside from "../../components/Aside/Aside";
import "./MainContent.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5000/videos";

const MainContent = ({ colorMode }) => {
  const { id } = useParams();
  // declaring a state variable to keep track of the active video
  const [activeVideo, setActiveVideo] = useState(null);
  // declaring a state variable to keep track of the vidoes array
  const [videosArr, setVideosArr] = useState([]);

  // useEffect hook used to make an axios api call on page load and set the state var to the videos arr
  useEffect(() => {
    // calling the getvideo array func on page load
    getVideoList();
    window.scrollTo(0, 0);
  }, []);

  // calling the video details func on url change
  useEffect(() => {
    // only calling it if there is a non default url becuase our initial onload useEffect sets the default video details
    if (id) {
      getVideoDetails(id);
    } else {
      getVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8");
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 250);
  }, [id]);

  // Func to make an axios get call for the video list array and set it as the state var, also setting a default video details state var
  const getVideoList = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setVideosArr(res.data);
        if (!id) {
          getVideoDetails(res.data[0].id);
        }
      })
      .catch((err) => alert(err));
  };
  // Func to make an axios get call for the video details obj and set it as the state var // using the url params as the id in the api call.
  const getVideoDetails = (id) => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setActiveVideo(res.data);
      })
      .catch((err) => alert(err));
  };
  // Func that makes an axios post sending the comment form data to the api
  const postComment = (id, content) => {
    const commentData = { name: "Placeholder", comment: content };
    axios
      .post(`${API_URL}/${id}/comments`, commentData)
      .then((res) => {
        getVideoDetails(id);
      })
      .catch((err) => alert(err));
  };
  // Func that makes an axios delete call and removes a comment from the api server
  const delComment = (vidId, comId) => {
    axios
      .delete(`${API_URL}/${vidId}/comments/${comId}`)
      .then(() => {
        getVideoDetails(vidId);
      })
      .catch((err) => alert(err));
  };

  const likeVideo = (vidId) => {
    axios
      .put(`${API_URL}/${vidId}/likes`)
      .then((res) => {
        getVideoDetails(vidId);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const likeComment = (vidId, comId) => {
    axios
      .put(`${API_URL}/${vidId}/comments/${comId}/likes`)
      .then((res) => {
        getVideoDetails(vidId);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    // terniary operator to only mount components once an active video obj is set to the state var
    <>
      {activeVideo ? (
        <section className="main">
          <div className="main__wrapper">
            <VideoPlayer activeVideo={activeVideo} />
            <div className="main__lower">
              <div className="main__lower--left">
                <VideoInfo
                  activeVideo={activeVideo}
                  likeVideo={likeVideo}
                  colorMode={colorMode}
                />
                <CommentSection
                  activeVideo={activeVideo}
                  postComment={postComment}
                  delComment={delComment}
                  likeComment={likeComment}
                  colorMode={colorMode}
                />
              </div>
              <div className="main__lower--right">
                <Aside
                  videos={videosArr}
                  activeVideo={activeVideo}
                  colorMode={colorMode}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default MainContent;
