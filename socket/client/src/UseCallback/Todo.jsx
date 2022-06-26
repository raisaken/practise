import React from "react";

const add = (a, b) => {
  return a + b;
};
function Todo() {
  const sum = add(5, 3);
  return (
    <div>
      Todo
      {sum}
    </div>
  );
}

export default Todo;
