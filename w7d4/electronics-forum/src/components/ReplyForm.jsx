// Controlled Component (Inputs)
// State: Text
// Props: onSubmit()

import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;
  const [replyText, setReplyText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    setReplyText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(replyText);
    setReplyText("");
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reply"
        value={replyText}
        onChange={handleChange}
      />
      <button>Add reply</button>
    </form>
  );
}
