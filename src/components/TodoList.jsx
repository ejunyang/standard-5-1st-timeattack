import TodoItem from "./TodoItem";

export default function TodoList({ todos, onRemove, onToggle, title }) {
  return (
    <>
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
}
