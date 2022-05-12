import React from "react";
import useFetch from "./useFetch";

function GetData() {
  const [posts] = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const [todos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return (
    <div>
      <h1>5 Posts </h1>
      {posts &&
        posts.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      <p>--------------------------------------------</p>

      <h1>5 Todos </h1>

      {todos &&
        todos.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

export default GetData;
