import CtaButton from "../Button/CtaButton";
import buttonIcon from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Form.scss";
import { useState } from "react";

const Form = ({ postComment, activeVideo }) => {
  // form submission
  const [formErrClass, setFormErroClass] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const formInputLarge = e.target.commentSmall.value;
    const formInputSmall = e.target.commentLarge.value;

    if (!formInputSmall && !formInputLarge) {
      alert("Please enter a comment before submitting");
      setFormErroClass("--error");
    } else if (formInputLarge) {
      postComment(activeVideo.id, formInputLarge);
      setFormErroClass("");
      e.target.reset();
    } else if (formInputSmall) {
      postComment(activeVideo.id, formInputSmall);
      setFormErroClass("");
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
            source={buttonIcon}
            clickHandler={null}
            classModifier="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
