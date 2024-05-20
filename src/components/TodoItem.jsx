export default function TodoItem({ todo, onRemove, onToggle }) {
  const { id, title, content, isDone } = todo;
  return (
    <div className="box">
      <p>{title}</p>
      <p>{content}</p>
      {isDone && (
        <button style={{ color: "red" }} onClick={() => onToggle(id)}>
          취소
        </button>
      )}
      {!isDone && (
        <button style={{ color: "blue" }} onClick={() => onToggle(id)}>
          완료
        </button>
      )}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
