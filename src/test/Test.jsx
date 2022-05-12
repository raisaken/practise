import React, { useRef } from "react";

function Test() {
  const ref = useRef();
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={() => ref.current.focus()}>click</button>
    </div>
  );
}

export default Test;
