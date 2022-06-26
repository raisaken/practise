import React, { useRef } from "react";

function DomAccess() {
  const myref = useRef();
  return (
    <div>
      <input type="text" ref={myref} />
      <button onClick={() => myref.current.focus()}>Click</button>
    </div>
  );
}

export default DomAccess;
