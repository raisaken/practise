import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "./ReduxToolkit/features/posts/PostSlice";
import { fetchTodo } from "./ReduxToolkit/features/posts/PostSlice";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [newvalue, setNewValue] = useState();
  // dispatch(fetchTodo());
  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
      <input type="number" onChange={(e) => setNewValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch(incrementByValue(Number(newvalue)));
        }}
      >
        increm by value
      </button>
      <button onClick={() => dispatch(fetchTodo())}> fetchTodo</button>
    </div>
  );
}

export default App;
