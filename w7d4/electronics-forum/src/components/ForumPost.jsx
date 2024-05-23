// Controlled Component
// State: forumPost (post + replies)
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";


import { useState } from "react";
import { addReplyToPost, updateUpvote } from "../helpers/postHelpers";

export default function ForumPost(props) {
  const {userInfo, topic} = props

  const [currentPost, setCurrentPost] = useState(topic);
  const [users, setUsers] = useState(userInfo);

  const currentUser = users[currentPost.userId];

  const addReply = (replyText) => {
    const updatedCurrentPost = addReplyToPost(replyText, currentPost, currentUser);

    setCurrentPost(updatedCurrentPost);
  };

  const upvote = (replyId) => setCurrentPost(updateUpvote(replyId, true, currentPost));
  const downvote = (replyId) => setCurrentPost(updateUpvote(replyId, false, currentPost));

  return (
    <main className="ForumPost">
      <section>
        <h1>{currentPost.question}</h1>
        <h2>
          BY:
          <img src={currentUser.profile_url} alt="" />
          <span>{currentUser.username}</span>
        </h2>
      </section>
      <ReplyList
        replies={currentPost.replies}
        users={users}
        upvote={upvote}
        downvote={downvote}
      />
      <ReplyForm onSubmit={addReply} />
    </main>
  );
}
