import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import CtaButton from "../../components/Button/CtaButton";
import uploadIcon from "../../assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  // using useNavigate hook to create a func that i can pass into the button component with props.
  const nav = useNavigate();
  const navigateToHome = () => {
    nav("/");
  };

  return (
    <div className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <form className="upload__form">
        <label className="upload__form-label">video Thumbnail</label>
        <img className="upload__form-thumbnail" src={thumbnail}></img>
        <label className="upload__form-label">title your video</label>
        <input
          className="upload__form-input"
          name="upload-title"
          placeholder="Add a title to your video"
        ></input>
        <label className="upload__form-label">add a video description</label>
        <textarea
          className="upload__form-textarea"
          name="upload-desc"
          placeholder="Add a description to your video"
        ></textarea>
        <div className="upload__form-footer">
          <CtaButton
            text="cancel"
            source={null}
            clickHandler={navigateToHome}
            classModifier="cancel-button"
          />
          <CtaButton
            text="publish"
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
