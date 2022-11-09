import "./CommentSection.scss";
import Form from "../Form/Form";
import Comment from "../Comment/Comment";
import { dateParser } from "../../utilities/DateParser/DateParser";

const CommentSection = ({ activeVideo, postComment }) => {
  const comments = activeVideo.comments;
  const numOfComments = comments.length;

  return (
    <div className="comments">
      <p className="comments__stats">{numOfComments} Comments</p>
      <Form postComment={postComment} activeVideo={activeVideo} />
      {activeVideo.comments
        .sort((itemA, itemB) => itemB.timestamp - itemA.timestamp)
        .map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            text={comment.comment}
            timestamp={comment.timestamp}
            dateParser={dateParser}
          />
        ))}
    </div>
  );
};

export default CommentSection;
