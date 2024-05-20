import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = (title, content) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setTodos([...todos, newTodo]);
  };

  const onRemove = (id) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    return setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList
        key={todos.id}
        title="Working🔥"
        todos={workingTodo}
        onRemove={onRemove}
        onToggle={onToggle}
      />

      <TodoList
        key={todos.id}
        title="Done🎉"
        todos={doneTodo}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}
