import "./CommentSection.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import Comment from "../Comment/Comment";
import { dateParser } from "../../utilities/DateParser/DateParser";

const CommentSection = ({
  activeVideo,
  postComment,
  delComment,
  likeComment,
  colorMode,
}) => {
  return (
    <div className="comments">
      <p className="comments__stats">{activeVideo.comments.length} Comments</p>
      <CommentsForm postComment={postComment} activeVideo={activeVideo} />
      {activeVideo.comments
        .sort((itemA, itemB) => itemB.timestamp - itemA.timestamp)
        .map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.name}
            text={comment.comment}
            timestamp={comment.timestamp}
            likes={comment.likes}
            dateParser={dateParser}
            delComment={delComment}
            likeComment={likeComment}
            activeVideoId={activeVideo.id}
            colorMode={colorMode}
          />
        ))}
    </div>
  );
};

export default CommentSection;
