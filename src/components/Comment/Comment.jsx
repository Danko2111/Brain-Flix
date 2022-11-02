import "./Comment.scss";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="comment--left">
        <div className="comment__avatar"></div>
      </div>
      <div className="comment--right">
        <div className="comment__top">
          <p className="comment__title">{props.name}</p>
          <p className="comment__timestamp">{props.timestamp}</p>
        </div>
        <p className="comment__text">{props.text}</p>
      </div>
    </div>
  );
};

export default Comment;
