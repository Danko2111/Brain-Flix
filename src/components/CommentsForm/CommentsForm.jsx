import CtaButton from "../Button/CtaButton";
import buttonIcon from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./CommentsForm.scss";
import { useState } from "react";

const CommentsForm = ({ postComment, activeVideo }) => {
  // form error catching state var used for className toggle
  const [formErrClass, setFormErrorClass] = useState("");
  // form submit func that reads the form values into vars
  const formSubmit = (e) => {
    e.preventDefault();
    // if either of the inputs are empty throw an error and set state var to an error string // else set the state var to blank
    if (!e.target.commentLarge.value && !e.target.commentSmall.value) {
      setFormErrorClass("--error");
      alert("Please enter a comment before submitting");
    } else if (e.target.commentLarge.value) {
      postComment(activeVideo.id, e.target.commentLarge.value);
      setFormErrorClass("");
      e.target.reset();
    } else if (e.target.commentSmall.value) {
      postComment(activeVideo.id, e.target.commentSmall.value);
      setFormErrorClass("");
      e.target.reset();
    }
  };

  return (
    <div className="comments__form-wrapper">
      <div className="comments--left">
        <img className="comments__avatar" src={avatar} alt="avatar"></img>
      </div>
      <div className="comments--right">
        <form className="comments__form" onSubmit={formSubmit}>
          <div className="comments__form-input">
            <label className="comments__form-label">
              join the conversation
            </label>
            <textarea
              className={`comments__form-text1 comments__form-text1${formErrClass}`}
              rows="6"
              placeholder="Add a new comment"
              name="commentLarge"
            ></textarea>
            <input
              className={`comments__form-text2 comments__form-text2${formErrClass}`}
              placeholder="Add a new comment"
              name="commentSmall"
            ></input>
          </div>
          <CtaButton
            text="Comment"
            type="submit"
            source={buttonIcon}
            classModifier="false"
          />
        </form>
      </div>
    </div>
  );
};

export default CommentsForm;
