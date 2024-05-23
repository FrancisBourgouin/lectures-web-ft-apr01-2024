// Props: replies[]
// Props: add / remove upvote : updateUpvote()
import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, downvote, upvote } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.id}
        {...reply}
        {...users[reply.userId]}
        upvote={() => upvote(reply.id)}
        downvote={() => downvote(reply.id)}
      />
    ));

  return <ul className="ReplyList">{parsedReplies}</ul>;
}
