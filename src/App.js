import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [test, setTest] = useState("all");

  const handleAll = () => {
    setTest(() => "all");
  };
  const handleActive = () => {
    setTest(() => "active");
  };
  const handleCompleted = () => {
    setTest(() => "completed");
  };
  return (
    <div>
      <button onClick={handleAll}>All</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleCompleted}>Completed</button>
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoList={todoList}
        setTodoList={setTodoList}
      ></AddTodo>
      <Todo test={test} todoList={todoList} setTodoList={setTodoList}></Todo>
    </div>
  );
}

export default App;
