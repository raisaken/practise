import React, { useEffect, useState } from "react";

function Test() {
  const [users, setUsers] = useState([]);
  const url = "https://randomuser.me/api";
  const fetchData = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.picture.large} alt="" />
              <p>{user.name.first}</p>
              <button onClick={fetchData}>Change</button>
            </div>
          );
        })}
    </div>
  );
}

export default Test;
