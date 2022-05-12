import React, { useState } from "react";
import Todo from "./Todo";

function Todos() {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Todo todo={todo} setTodo={setTodo}></Todo>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Todos;
