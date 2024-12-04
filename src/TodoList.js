import React from "react";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
