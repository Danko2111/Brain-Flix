import CtaButton from "../Button/CtaButton";
import buttonIcon from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Form.scss";

const Form = () => {
  return (
    <div className="comments__form-wrapper">
      <div className="comments--left">
        <img className="comments__avatar" src={avatar} alt="avatar"></img>
      </div>
      <div className="comments--right">
        <form className="comments__form">
          <div className="comments__form-input">
            <label className="comments__form-label">
              join the conversation
            </label>
            <textarea
              className="comments__form-text1"
              rows="6"
              placeholder="Add a new comment"
            ></textarea>
            <input
              className="comments__form-text2"
              placeholder="Add a new comment"
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
