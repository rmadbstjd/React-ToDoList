import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoList={todoList}
        setTodoList={setTodoList}
      ></AddTodo>
      <Todo todoList={todoList} setTodoList={setTodoList}></Todo>
    </div>
  );
}

export default App;
