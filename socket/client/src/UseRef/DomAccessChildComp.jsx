import React, { forwardRef, useRef } from "react";

const Child = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function DomAccessChildComp() {
  const handleClick = () => {
    ref.current.focus();
  };
  const ref = useRef();
  return (
    <div>
      <Child ref={ref}></Child>
      <button onClick={handleClick}>Access Child</button>
    </div>
  );
}

export default DomAccessChildComp;
