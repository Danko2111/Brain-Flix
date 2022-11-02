import "./CommentSection.scss";
import Form from "../Form/Form";
import Comment from "../Comment/Comment";

const CommentSection = (props) => {
  const comments = props.activeVideo.comments;
  const numOfComments = comments.length;

  return (
    <div className="comments">
      <p className="comments__stats">{numOfComments} Comments</p>
      <Form />
      {props.activeVideo.comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          text={comment.comment}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
};

export default CommentSection;
