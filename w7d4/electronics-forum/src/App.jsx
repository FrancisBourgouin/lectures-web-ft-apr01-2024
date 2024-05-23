import "./App.scss";
import ForumPost from "./components/ForumPost";
import Header from "./components/Header";
import ReplyForm from "./components/ReplyForm";
import ReplyListItem from "./components/ReplyListItem";

import { usersObj } from "./data/users";
import { topicsObj } from "./data/topics";
import ReplyList from "./components/ReplyList";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState(1)

  const navigateRandomPost = () => {
    const newId = Math.ceil(Math.random() * 3)
    console.log(newId)

    setPostId(newId)
  }

  return (
    <>
      <Header navigateRandomPost={navigateRandomPost} />
      <ForumPost userInfo={usersObj} topic={topicsObj[postId]}/>
    </>
  );

  // return <Header />

  // const checkSubmit = (value) => console.log(value);
  // return <ReplyForm onSubmit={checkSubmit} />;

  // const replyContent = topicsObj[1].replies[0]
  // const userContent = usersObj[replyContent.userId]

  // return <ReplyListItem {...replyContent} {...userContent}/>

  // const replies = topicsObj[1].replies
  // return <ReplyList replies={replies} users={usersObj}/>

  // return <ForumPost />
}

export default App;
