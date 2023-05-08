import React, { useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import { UserContext } from "./UserContext";

function Component1() {
  const [user, setUser] = useState({
    id: 102,
    name: "Saiful Ajom Khan",
    age: 40,
  });

  
  return (
    <div>
      <p1>I am Component1</p1>
      <Component2 />

      <UserContext.Provider user={user} setUser={setUser}>
        <Component4 />
        <Component3 />
      </UserContext.Provider>
    </div>
  );
}
export default Component1;

// provider, consumer/useContext hooks

// 1. create context
// 2. wrap childs with context provider
// 3. state access useContext hook
