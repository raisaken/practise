import React, { useCallback } from "react";

function Todo({ todo, setTodo }) {
  const handleTodo = useCallback(() => {
    console.log(todo);

    setTodo((t) => [...t, "new Todo"]);
  }, [todo]);

  return (
    <div>
      <button onClick={handleTodo}>Add Todo</button>
      {todo.map((t, index) => {
        return <p key={index}>{t}</p>;
      })}
    </div>
  );
}

export default Todo;
