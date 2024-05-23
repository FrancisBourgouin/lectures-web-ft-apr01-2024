// ...reply{}
// const reply = {
//   userId: 8, <- User ???
//   content: "",
//   likes: 0,
// };
export default function ReplyListItem(props) {
  const {content, likes, username, profile_url, upvote, downvote} = props
  return (
    <li className="ReplyListItem">
      <h1>{username}</h1>
      <h2><img src={profile_url} alt="" /></h2>
      <p>{content}</p>
      <div>
        <button onClick={downvote}>-</button>
        <span>{likes ? likes : 0}</span>
        <button onClick={upvote}>+</button>
      </div>
    </li>
  );
}
