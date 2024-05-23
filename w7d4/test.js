const updateUpvote = (replyId, isUpvote, currentPost) => {
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

const t1 = {
  id: 1,
  userId: 1,
  question:
    "I have a TV that suddenly stopped turning on. No signs of life. Any suggestions on how to diagnose and fix this issue?",
  replies: [
    {
      id: 1,
      userId: 2,
      content:
        "Check the power cable and outlet first. Sometimes it's a simple power issue.",
    },
    {
      id: 2,
      userId: 3,
      content:
        "Look for any blown fuses on the TV's circuit board. A blown fuse could be the culprit.",
    },
    {
      id: 3,
      userId: 7,
      content:
        "Inspect the capacitors on the power supply board. Bulging or leaking capacitors are a common cause of power problems.",
    },
    {
      id: 4,
      userId: 12,
      content:
        "Try resetting the TV to its factory settings. Sometimes a software glitch can cause such issues.",
    },
    {
      id: 5,
      userId: 15,
      content:
        "Check if there are any visible burnt components or solder joints on the board.",
    },
    {
      id: 6,
      userId: 21,
      content:
        "It might also be a faulty power button. Check if the button is making proper contact.",
    },
    {
      id: 7,
      userId: 24,
      content:
        "Test the voltage outputs from the power supply board using a multimeter. Make sure they match the specifications.",
    },
    {
      id: 8,
      userId: 29,
      content:
        "Try leaving the TV unplugged for a while, then plug it back in. Sometimes power fluctuations can cause issues.",
    },
    {
      id: 9,
      userId: 32,
      content:
        "If you're comfortable, open the TV and look for any burnt traces or components on the circuit board.",
    },
    {
      id: 10,
      userId: 37,
      content:
        "Consider seeking professional help if the issue persists. It could be a more complex problem.",
    },
  ],
};

const result = updateUpvote(10, false, t1);

console.log(result);
