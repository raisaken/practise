import React, { useState } from "react";
const Users = [
  {
    name: "saken",
    surname: "rai",
  },
  {
    name: "sahil",
    surname: "ramjali",
  },
];

function FilterItems() {
  const [query, setQuery] = useState("");
  const filteredValue = Users.filter((user) => {
    return user.name.includes(query) || user.surname.includes(query);
  });
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredValue.map((user, index) => {
        return (
          <p key={index}>
            {user.name} {user.surname}
          </p>
        );
      })}
    </div>
  );
}

export default FilterItems;
