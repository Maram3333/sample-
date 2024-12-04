import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: true },
  ]);

  return (
    <div>
      <Header title="My Sample App" />
      <Counter />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
