import { useState } from "react";
import "./App.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import Button from "./components/UI/Button";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
