import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import CtaButton from "../../components/Button/CtaButton";
import uploadIcon from "../../assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/videos";

const Upload = ({ colorMode }) => {
  // post video func that creates an obj and posts it to the api server
  const postVideo = (title, description, image) => {
    const videoData = new FormData();
    videoData.append("title", title);
    videoData.append("description", description);
    videoData.append("image", image);
    axios
      .post(API_URL, videoData)
      .then((res) => {
        console.log("your video has been posted!");
      })
      .catch((err) => alert(err));
  };
  // useNavigate hook that can be passed into the button component with props.
  const nav = useNavigate();
  const navigateToHome = (e) => {
    e.preventDefault();
    nav("/");
  };

  const [formErrClass, setFormErrorClass] = useState("");

  const uploadVideo = (e) => {
    e.preventDefault();
    console.log(e.target.uploadImage.files[0]);
    if (!e.target.uploadTitle.value || !e.target.uploadDesc.value) {
      setFormErrorClass("--error");
      alert("Please enter a title and description before submitting");
    } else {
      postVideo(
        e.target.uploadTitle.value,
        e.target.uploadDesc.value,
        e.target.uploadImage.files[0]
      );
      alert("Your video has been uploaded");
      setFormErrorClass("");
      nav("/");
    }
  };

  return (
    <div className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <form
        className="upload__form"
        onSubmit={uploadVideo}
        encType="multipart/form-data"
      >
        <div className="upload__form-top">
          <label className="upload__form-label">video Thumbnail</label>
          <img
            className="upload__form-thumbnail"
            src={thumbnail}
            alt="a placeholder thumbnail"
          ></img>
          <input
            type="file"
            name="uploadImage"
            className="upload__form-fileupload"
          ></input>
        </div>
        <div className="upload__form-inputarea">
          <label className="upload__form-label">title your video</label>
          <input
            className={`upload__form-input upload__form-input${formErrClass}`}
            name="uploadTitle"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload__form-label">add a video description</label>
          <textarea
            className={`upload__form-textarea upload__form-textarea${formErrClass}`}
            name="uploadDesc"
            placeholder="Add a description to your video"
            rows="5"
          ></textarea>
        </div>
        <div className="upload__form-footer">
          <CtaButton
            text="cancel"
            type="button"
            source={null}
            clickHandler={navigateToHome}
            classModifier="cancel-button"
            colorMode={colorMode}
          />
          <CtaButton
            text="publish"
            type="submit"
            source={uploadIcon}
            classModifier="false"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;
