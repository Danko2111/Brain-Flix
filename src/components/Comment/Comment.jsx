import delIcon from "../../assets/Icons/delete-button.svg";
import "./Comment.scss";

const Comment = ({
  id,
  name,
  text,
  timestamp,
  dateParser,
  delComment,
  activeVideo,
  colorMode,
}) => {
  return (
    <div className="comment">
      <div className="comment--left">
        <div className="comment__avatar"></div>
      </div>
      <div className="comment--right">
        <div className="comment__top">
          <p className="comment__title">{name}</p>
          <p className="comment__timestamp">{dateParser(timestamp)}</p>
        </div>
        <p className={`comment__text${[colorMode]}`}>{text}</p>
        <div className="comment__bottom">
          <button
            className="comment__delete-button"
            onClick={() => delComment(activeVideo, id)}
          >
            <img
              src={delIcon}
              alt="delete icon"
              className="comment__delete-icon"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
