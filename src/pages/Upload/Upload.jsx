import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import CtaButton from "../../components/Button/CtaButton";
import uploadIcon from "../../assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = ({ colorMode }) => {
  // post video func that creates an obj and posts it to the api server
  const postVideo = (title, description) => {
    const videoData = { title: title, description: description };
    axios
      .post(`http://localhost:5000/videos`, videoData)
      .then((res) => {
        console.log("completed");
      })
      .catch((err) => alert(err));
  };
  // useNavigate hook that can be passed into the button component with props.
  const nav = useNavigate();
  const navigateToHome = (e) => {
    e.preventDefault();
    nav("/");
  };

  const uploadVideo = (e) => {
    e.preventDefault();
    postVideo(e.target.uploadTitle.value, e.target.uploadDesc.value);
    alert("Your video has been uploaded");
    nav("/");
  };

  return (
    <div className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <form className="upload__form" onSubmit={uploadVideo}>
        <div className="upload__form-top">
          <label className="upload__form-label">video Thumbnail</label>
          <img
            className="upload__form-thumbnail"
            src={thumbnail}
            alt="a placeholder thumbnail"
          ></img>
        </div>
        <div className="upload__form-inputarea">
          <label className="upload__form-label">title your video</label>
          <input
            className="upload__form-input"
            name="uploadTitle"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload__form-label">add a video description</label>
          <textarea
            className="upload__form-textarea"
            name="uploadDesc"
            placeholder="Add a description to your video"
            rows="5"
          ></textarea>
        </div>
        <div className="upload__form-footer">
          <CtaButton
            text="cancel"
            source={null}
            clickHandler={navigateToHome}
            classModifier="cancel-button"
            colorMode={colorMode}
          />
          <CtaButton
            text="publish"
            type="submit"
            source={uploadIcon}
            clickHandler={null}
            classModifier="false"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;
