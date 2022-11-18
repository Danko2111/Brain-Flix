import delIcon from "../../assets/Icons/delete-button.svg";
import likeIcon from "../../assets/Icons/like-icon.svg";
import "./Comment.scss";

const Comment = ({
  id,
  name,
  text,
  likes,
  timestamp,
  dateParser,
  delComment,
  activeVideoId,
  colorMode,
  likeComment,
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
            onClick={() => delComment(activeVideoId, id)}
          >
            <img
              src={delIcon}
              alt="delete icon"
              className="comment__delete-icon"
            ></img>
          </button>
          <button
            className="comment__like-button"
            onClick={() => likeComment(activeVideoId, id)}
          >
            <img
              src={likeIcon}
              alt="like icon"
              className="comment__like-icon"
            ></img>
            {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
