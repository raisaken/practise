import React, { useRef, useState } from "react";

function Timeout() {
  const [iseSending, setIssending] = useState(false);
  const t = useRef();
  const HandleChange = () => {
    setIssending(true);
    t.current= setTimeout(() => {
      alert("hello")
      setIssending(false);
    }, 1000);
  };
  const handleCancel=()=>{
    clearTimeout(t.current)
    setIssending(false)
  }

  return (
    <div>
      <input type="text" />
      <button onClick={() => HandleChange()}>
        {iseSending ? "Sending" : "Send"}
      </button>
      {iseSending && <button onClick={handleCancel}>Cancel</button>}
    </div>
  );
}

export default Timeout;
