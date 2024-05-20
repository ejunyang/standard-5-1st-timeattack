import { useState } from "react";

export default function TodoForm({ onInsert }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    }
    e.preventDefault();
    onInsert(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button>추가</button>
    </form>
  );
}
