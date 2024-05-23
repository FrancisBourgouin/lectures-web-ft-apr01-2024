export const addReplyToPost = (replyText, currentPost, currentUser) => {
  const newReply = {
    id: currentPost.replies.length + 1,
    userId: currentUser.id,
    content: replyText,
    likes: 0,
  };

  const updatedCurrentPost = { ...currentPost };
  const updatedReplies = [...currentPost.replies, newReply];

  updatedCurrentPost.replies = updatedReplies;

  return updatedCurrentPost;
};

export const updateUpvote = (replyId, isUpvote, currentPost) => {
  const updatedCurrentPost = { ...currentPost };
  const updatedReplies = [...currentPost.replies];

  const indexToChange = updatedReplies.findIndex((reply) => reply.id === replyId);

  const updatedReply = { ...updatedReplies[indexToChange] };

  if (!updatedReply.likes) {
    updatedReply.likes = 0;
  }

  if (isUpvote) {
    updatedReply.likes++;
  } else {
    updatedReply.likes--;
  }

  updatedReplies[indexToChange] = updatedReply;
  updatedCurrentPost.replies = updatedReplies;

  return updatedCurrentPost;
};
